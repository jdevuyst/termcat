(ns termcat.stage.sugar
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]
            [termcat.fun :as fun]
            [termcat.math :as math]))

(defrule introduce-prefix-minus
  [state t1 t2 t3]
  tt
  block?
  [_
   (:or nil
        :newline
        :emptyline
        :whitespace)
   :dash
   (:or :default
        [:block _])] (concat [nil
                              t1
                              (math/math-block (fragment t2)
                                               :mo
                                               :prefix)]
                             (math/math-cast t3)))

(defrule introduce-par-calls
  [state t1]
  tt
  block?
  [_ :emptyline] (concat [nil] (fun/fun-call-seq ":par")))

(defrule introduce-nbsp-calls
  [state t1 t2 t3]
  tt
  block?
  [_ :default :tilde :default] (concat [nil t1]
                                       (fun/fun-call-seq ":nbsp")
                                       [t3]))

(defrule introduce-section-calls
  [state t1]
  tt
  block?
  [_ [:block :h1]] [nil (fun/fun-call-head ":h1") t1]
  [_ [:block :h2]] [nil (fun/fun-call-head ":h2") t1]
  [_ [:block :h3]] [nil (fun/fun-call-head ":h3") t1]
  [_ [:block :h4]] [nil (fun/fun-call-head ":h4") t1]
  [_ [:block :h5]] [nil (fun/fun-call-head ":h5") t1]
  [_ [:block :h6]] [nil (fun/fun-call-head ":h6") t1])

(defrule introduce-blockquote-calls
  [state t1 t2 t3]
  tt
  block?
  [_ :maybe-fun :default _] nil
  [_ _ _ [:block :indent]] [nil t1 t2 (fun/fun-call-head ":quotation") t3])

(defrule introduce-bullet-list-calls
  [state t1 t2 t3]
  tt
  block?
  [_ :maybe-fun :default _] nil
  [_ _ [:block :bullet] _] nil
  [_ _ _ [:block :bullet]] [nil t1 t2 (fun/fun-call-head ":bullet-list") t3])

(defrule introduce-link-calls
  [state t1 t2 t3 t4]
  tt
  block?
  [_ :maybe-fun :default _ _] nil
  [_ _
   :bang
   [:block :bracket]
   [:block :parenthesis]] (concat [nil t1]
                                  (fun/fun-call-seq ":img"
                                                    (center t3)
                                                    (center t4)))
  [_ _ _
   [:block :bracket]
   [:block :parenthesis]] (concat [nil t1 t2]
                                  (fun/fun-call-seq ":link"
                                                    (center t3)
                                                    (center t4))))

(defn decorator-fname [tok]
  (case (payload tok)
    \* ":emph"
    "**" ":strong"
    \_ ":underline"
    nil))

(defrule introduce-decorator-calls
  [state t1 t2 t3]
  tt
  block?
  [_ :maybe-magic (:or :default
                       [:block _]) (:or :underscore
                                        :maybe-magic)]
  (if (= (payload t1) (payload t3))
    (if-let [fname (decorator-fname t1)]
      (concat [nil]
              (fun/fun-call-seq fname (if (block? t2)
                                        (center t2)
                                        (fragment t2)))))))

(defrule introduce-math-identifiers
  [state t1 t2 t3 t4 t5]
  tt
  block?
  [_
   :maybe-magic
   (:or :default
        [:block _])
   _
   _
   _] (case (payload t1)
        \* (concat [nil]
                   (math/math-cast t2)
                   [t3 t4 t5])
        \+ (concat [nil]
                   (math/math-cast t2 #{:script})
                   [t3 t4 t5])
        nil)
  [_
   _
   _
   (:or :default
        [:block _])
   :whitespace
   :tilde] (concat [nil t1 t2]
                   (math/math-cast t3)
                   [t4 t5])
  [_
   :tilde
   :whitespace
   (:or :default
        [:block _])
   _
   _] (concat [nil t1 t2]
              (math/math-cast t3)
              [t4 t5])
  [_
   [:block (_ :guard :math)]
   [:block _]
   _
   _
   _] (concat [nil t1]
              (math/math-cast t2)
              [t3 t4 t5]))

(defrule introduce-math-operators
  [state t1 t2 t3 t4 t5]
  tt
  block?
  [_
   :whitespace
   :tilde
   _ ; (:or :default [:block _])
   :tilde
   :whitespace] (if-let [opt (concat
                               (match (payload t2)
                                      \~ []
                                      "~~" [:normal-left]
                                      "~~~" [:wide-left]
                                      :else nil)
                               (match (payload t4)
                                      \~ []
                                      "~~" [:normal-right]
                                      "~~~" [:wide-right]
                                      :else nil))]
                  [nil (apply math/math-block
                              (if (block? t3)
                                (center t3)
                                (fragment t3))
                              :mo
                              :infix
                              opt)])
  [_
   _
   _
   _ ; (:or :default [:block _])
   :tilde
   :whitespace] (if-let [opt (match (payload t4)
                                    \~ []
                                    "~~" [:normal-right]
                                    "~~~" [:wide-right]
                                    :else nil)]
                  [nil t1 t2 (apply math/math-block
                                    (if (block? t3)
                                      (center t3)
                                      (fragment t3))
                                    :mo
                                    :prefix
                                    opt)])
  [_
   :whitespace
   :tilde
   _ ; (:or :default [:block _])
   _
   _] (if-let [opt (match (payload t2)
                          \~ []
                          "~~" [:normal-left]
                          "~~~" [:wide-left]
                          :else nil)]
        [nil
         (apply math/math-block
                (if (block? t3)
                  (center t3)
                  (fragment t3))
                :mo
                :postfix
                opt)
         t4 t5]))

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
                      (apply math/merge-rows)))
              $)
         (into [] $)
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
                                          (apply str (repeat length \′)))))
                               fragment
                               (math/math-block :mo))])]
  [_
   (:or :default [:block _])
   :underscore
   (:or :default
        [:block _])] [nil
                      (subsup-token
                        (split-base-sub-sup t1)
                        [nil t3 nil])]
  [_
   (:or :default [:block _])
   :circumflex
   (:or :default
        [:block _])] [nil
                      (subsup-token
                        (split-base-sub-sup t1)
                        [nil nil t3])])



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

(defrule flatten-math-fences
  [state t1]
  tt
  block?
  [_
   [:block (:or :parenthesis
                :bracket
                :brace
                :chevron)]] (let [subts (-> t1
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