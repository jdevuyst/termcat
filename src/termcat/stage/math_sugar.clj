(ns termcat.stage.math-sugar
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [clojure.string :as string]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]
            [termcat.fun :as fun]
            [termcat.math :as math]))

(defrule remove-manual-casts
  [state t1 t2]
  tt
  block?
  [_ _ :whitespace] nil
  [_ :double-quote _] [nil (math/math-block
                             (if (block? t2)
                               (center t2)
                               (fragment t2))
                             :text)]
  [_ :asterisk _] (let [ts (if (block? t2)
                             (.terms (center t2))
                             [t2])]
                    (concat [nil]
                            (mapcat math/math-cast ts)))
  [_ :plus _] (let [ts (if (block? t2)
                         (.terms (center t2))
                         [t2])]
                (concat [nil]
                        (mapcat #(math/math-cast % #{:script}) ts))))

(defrule introduce-math-operators
  [state t1 t2 t3 t4 t5 t6 t7]
  tt
  block?
  [_ _ :whitespace :tilde _ :tilde :whitespace _]
  (if-let [opt (concat (match (payload t3)
                              \~ []
                              "~~" [:normal-left]
                              "~~~" [:wide-left]
                              :else nil)
                       (match (payload t5)
                              \~ []
                              "~~" [:normal-right]
                              "~~~" [:wide-right]
                              :else nil))]
    (concat [nil]
            (math/math-cast t1)
            [(apply math/math-block
                    (if (block? t4)
                      (center t4)
                      (fragment t4))
                    :mo
                    :infix
                    opt)]
            (math/math-cast t7)))
  [_ _ :whitespace :tilde _ _ _ _]
  (if-let [opt (match (payload t3)
                      \~ []
                      "~~" [:normal-right]
                      "~~~" [:wide-right]
                      :else nil)]
    (concat [nil]
            (math/math-cast t1)
            [(apply math/math-block
                    (if (block? t4)
                      (center t4)
                      (fragment t4))
                    :mo
                    :postfix
                    opt)]
            [t5 t6 t7]))
  [_ _ _ _ _ :tilde :whitespace _]
  (if-let [opt (match (payload t5)
                      \~ []
                      "~~" [:normal-left]
                      "~~~" [:wide-left]
                      :else nil)]
    (concat [nil t1 t2 t3]
            [(apply math/math-block
                    (if (block? t4)
                      (center t4)
                      (fragment t4))
                    :mo
                    :prefix
                    opt)]
            (math/math-cast t7))))

(defn split-base-sub-sup [t]
  (match (tt t)
         [:block (_ :guard :msub)] [(first (.terms (center t)))
                                    (second (.terms (center t)))
                                    nil]
         [:block (_ :guard :msup)] [(first (.terms (center t)))
                                    nil
                                    (second (.terms (center t)))]
         [:block (_ :guard :msubsup)] [(first (.terms (center t)))
                                       (second (.terms (center t)))
                                       (nth (.terms (center t)) 2)]
         :else [t nil nil]))

(defn subsup-token
  ([x y]
   (as-> (map #(->> (vector %1 %2)
                    (filter (complement nil?)))
              x
              y) $
         (map #(if-not (empty? %)
                 (->> %
                      (mapcat math/math-cast)
                      (apply math/merge-rows
                             (math/math-block
                                    (fragment (token :html "&InvisibleComma;"))
                                    :mo))))
              $)
         (vec $)
         (match $
                [nil _ _] (assert false)
                [a nil nil] (assert false)
                [a nil b] (math/math-block (fragment a b)
                                           :msup)
                [a b nil] (math/math-block (fragment a b)
                                           :msub)
                [a b c] (math/math-block (fragment a b c)
                                         :msubsup)))))

(defrule introduce-msub-msup
  [state t1 t2 t3]
  tt
  block?
  [_
   _
   [:block (_ :guard :math)]
   :right-quote] [nil
                  t1
                  (subsup-token
                    (split-base-sub-sup t2)
                    [nil nil (->
                               (token :default
                                      (let [length (-> t3
                                                       payload
                                                       str
                                                       count)]
                                        (case length
                                          4 \⁗
                                          3 \‴
                                          2 \″
                                          1 \′
                                          (string/join (repeat length \′)))))
                               fragment
                               (math/math-block :mo))])]
  [_
   (:or :default [:block _])
   :underscore
   (:or :default
        [:block _])] [nil
                      (subsup-token
                        (split-base-sub-sup t1)
                        [nil (math/math-row-cast t3) nil])]
  [_
   (:or :default [:block _])
   :circumflex
   (:or :default
        [:block _])] [nil
                      (subsup-token
                        (split-base-sub-sup t1)
                        [nil nil (math/math-row-cast t3)])])



(defrule introduce-mfrac
  [state t1 t2 t3]
  tt
  block?
  [_
   (:or :default
        [:block _])
   :bar
   (:or :default
        [:block _])] [nil
                        (math/math-block
                          (fragment (math/math-row-cast t1)
                                    (math/math-row-cast t3))
                          :mfrac)])

(defrule math-cast-next-token
  [state t1 t2]
  tt
  block?
  [_ [:block (_ :guard :math)] (:or :default [:block _])]
  (concat [nil t1]
          (math/math-cast t2)))

(defrule flatten-math-fences
  [state t1]
  tt
  block?
  [_
   [:block (:or :parenthesis
                :bracket
                :brace)]] (let [subts (-> t1
                                          center
                                          .terms)]
                            (match [(tt (first subts))
                                    (tt (last subts))]
                                   [[:block (_ :guard :math)]
                                    [:block (_ :guard :math)]]
                                   (concat [nil
                                            (math/math-block
                                              (fragment (left t1))
                                              :mo)]
                                           subts
                                           [(math/math-block
                                              (fragment (right t1))
                                              :mo)])
                                   :else nil)))

(defrule introduce-nbsp-entities
  [state t1 t2 t3]
  tt
  block?
  [_ _ :tilde _] [nil t1 (token :html "&nbsp;") t3])