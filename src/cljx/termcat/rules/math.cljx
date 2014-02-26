(ns termcat.rules.math
  #+cljs (:require-macros [cljs.core.match.macros :refer (match)]
                          [termcat.core-macros-cljs :refer (defrule)])
  (:require #+cljs [cljs.core.match]
            #+clj [clojure.core.match :refer (match)]
            #+clj [termcat.core-macros :refer (defrule)]
            [clojure.string :as string]
            [termcat.rewrite :as rw]
            [termcat.term :as t]
            [termcat.util.math :as math]))

(defrule remove-manual-casts [state t1 t2 t3 t4]
  [_ _ _ (:or nil :whitespace :emptyline) _]
  nil

  [_ _ _ _ (:or :double-quote :asterisk :plus)]
  nil

  [_ (:or nil :whitespace) :double-quote _ _]
  [nil t1 (math/math-block
            (if (t/block? t3)
              (t/center t3)
              (t/fragment t3))
            :text) t4]

  [_ (:or nil :whitespace) :asterisk _ _]
  (concat [nil t1]
          (if (t/block? t3)
            [(math/math-block (t/center t3)
                              :mi)]
            (math/math-cast t3))
          [t4])

  [_ (:or nil :whitespace) :plus _ _]
  (let [ts (if (t/block? t3)
             (rw/unwrap t3)
             [t3])]
    (concat [nil t1]
            (mapcat #(math/math-cast % #{:script}) ts)
            [t4])))

(defrule introduce-math-operators [state t1 t2 t3 t4 t5 t6 t7]
  [_ _ :whitespace :tilde _ :tilde :whitespace _]
  (if-let [opt (concat (match (t/payload t3)
                              \~ []
                              "~~" [:normal-left]
                              "~~~" [:wide-left]
                              :else nil)
                       (match (t/payload t5)
                              \~ []
                              "~~" [:normal-right]
                              "~~~" [:wide-right]
                              :else nil))]
    (concat [nil]
            (math/math-cast t1)
            [(apply math/math-block
                    (if (t/block? t4)
                      (t/center t4)
                      (t/fragment t4))
                    :mo
                    :infix
                    opt)]
            (math/math-cast t7)))

  [_ _ :whitespace :tilde _ _ _ _]
  (if-let [opt (match (t/payload t3)
                      \~ []
                      "~~" [:normal-right]
                      "~~~" [:wide-right]
                      :else nil)]
    (concat [nil]
            (math/math-cast t1)
            [(apply math/math-block
                    (if (t/block? t4)
                      (t/center t4)
                      (t/fragment t4))
                    :mo
                    :postfix
                    opt)]
            [t5 t6 t7]))

  [_ _ :tilde :whitespace _ _ _ _]
  (if-let [opt (match (t/payload t2)
                      \~ []
                      "~~" [:normal-left]
                      "~~~" [:wide-left]
                      :else nil)]
    (concat [nil]
            [(apply math/math-block
                    (if (t/block? t1)
                      (t/center t1)
                      (t/fragment t1))
                    :mo
                    :prefix
                    opt)]
            (if (contains? #{:underscore :circumflex :right-quote}
                           (t/tt t4))
              [t4]
              (math/math-cast t4))
            [t5 t6 t7])))

(defn split-base-sub-sup [t]
  (match (t/tt t)
         [:block (_ :guard :msub)] [(first (rw/unwrap t))
                                    (second (rw/unwrap t))
                                    nil]
         [:block (_ :guard :msup)] [(first (rw/unwrap t))
                                    nil
                                    (second (rw/unwrap t))]
         [:block (_ :guard :msubsup)] [(first (rw/unwrap t))
                                       (second (rw/unwrap t))
                                       (nth (rw/unwrap t) 2)]
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
                               (t/fragment (t/token :html "&InvisibleComma;"))
                               :mo))))
              $)
         (vec $)
         (match $
                [nil _ _] (assert false)
                [a nil nil] (assert false)
                [a nil b] (math/math-block (t/fragment a b)
                                           :msup)
                [a b nil] (math/math-block (t/fragment a b)
                                           :msub)
                [a b c] (math/math-block (t/fragment a b c)
                                         :msubsup)))))

(defrule introduce-msub-msup [state t1 t2 t3]
  [_
   [:block (_ :guard :math)]
   :right-quote
   _] [nil
       (subsup-token
         (split-base-sub-sup t1)
         [nil nil (->
                    (t/token :default
                             (let [length (-> t2
                                              t/payload
                                              str
                                              count)]
                               (case length
                                 4 \⁗
                                 3 \‴
                                 2 \″
                                 1 \′
                                 (string/join (repeat length \′)))))
                    t/fragment
                    (math/math-block :mo))])
       t3]
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



(defrule introduce-mfrac [state t1 t2 t3]
  [_
   (:or :default
        [:block _])
   :bar
   (:or :default
        [:block _])] [nil
                      (math/math-block
                        (t/fragment (math/math-row-cast t1)
                                    (math/math-row-cast t3))
                        :mfrac)])

(defrule math-cast-next-token [state t1 t2]
  [_ [:block (_ :guard :math)] (:or :default [:block _])]
  (concat [nil t1]
          (math/math-cast t2)))

(defrule remove-superfluous-whitespace [state t1 t2 t3]
  [_ [:block (_ :guard :math)] :whitespace [:block (_ :guard :math)]]
  [nil t1 t3])

; (defrule flatten-math-fences [state t1]
;   [_
;    [:block (:or :parenthesis
;                 :bracket
;                 :brace)]]
;   (let [subts (-> t1
;                   center
;                   .-terms)]
;     (match [(t/tt (first subts))
;             (t/tt (last subts))]
;            [[:block (_ :guard :math)]
;             [:block (_ :guard :math)]]
;            (concat [nil
;                     (math/math-block
;                       (t/fragment (t/left t1))
;                       :mo)]
;                    subts
;                    [(math/math-block
;                       (t/fragment (t/right t1))
;                       :mo)])
;            :else nil)))