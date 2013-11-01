(ns termcat.stage.sugar
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]
            [termcat.fun :as fun]
            [termcat.math :as math]))

(defrule introduce-par-calls
  [state t1]
  tt
  block?
  [_ :emptyline] (concat [nil] (fun/fun-call-seq ":par")))

(defrule introduce-section-calls
  [state t1]
  tt
  block?
  [_ [:block :section]] [nil (fun/fun-call-head ":section") t1]
  [_ [:block :subsection]] [nil (fun/fun-call-head ":subsection") t1]
  [_ [:block :subsubsection]] [nil (fun/fun-call-head ":subsubsection") t1])

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
   :maybe-fun
   [:block :bracket]
   [:block :parenthesis]] (if (= (payload t2) \!)
                            (concat [nil t1]
                                    (fun/fun-call-seq ":img"
                                                      (center t3)
                                                      (center t4))))
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
                       [:block _]) :maybe-magic]
  (if (= (payload t1) (payload t3))
    (if-let [fname (decorator-fname t1)]
      (concat [nil]
              (fun/fun-call-seq fname (if (block? t2)
                                        (center t2)
                                        (fragment t2)))))))

; (defrule box-remaining-magic
;   [state t1 t2 t3]
;   tt
;   block?
;   [_
;    _
;    :default
;    (:or :left-quote
;         :right-quote
;         :maybe-magic)] [nil t1 (transparent-block
;                                  (fragment t2 t3))]
;   [_
;    _
;    (:or :left-quote
;         :right-quote
;         :maybe-magic)
;    :default] [nil t1 (transparent-block
;                        (fragment t2 t3))]
;   [_
;    [:block :box]
;    [:block :box]
;    _] [nil
;        (transparent-block
;          (fragmentcat (.terms (center t1))
;                       (.terms (center t2))))
;        t3])

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
   _] (if (= (payload t1) \*)
        (concat [nil]
                (math/math-cast t2)
                [t3 t4 t5]))
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
              [t4 t5]))

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

(defrule introduce-typographic-primes
  [state t1 t2]
  tt
  block?
  [_
   [:block (x :guard :mi)]
   :right-quote] [nil
                  (math/math-block
                    (fragment
                      t1
                      (math/math-block
                        (fragment
                          (token :default
                                 (let [length (-> t2
                                                  payload
                                                  str
                                                  count)]
                                   (case length
                                     4 \⁗
                                     3 \‴
                                     2 \″
                                     1 \′
                                     (apply str (repeat length \′))))))
                        :mo))
                    :msup)]
  [_
   [:block (x :guard :msup)]
   :default] (concat [nil t1]
                     (math/math-cast t2)))

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