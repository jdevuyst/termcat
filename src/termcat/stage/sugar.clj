(ns termcat.stage.sugar
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]
            [termcat.fun :as fun]
            [termcat.math :as math]))

(defrule introduce-par-calls
  [state t1 t2 t3]
  tt
  block?
  [_ _ :emptyline _] (concat [nil t1]
                             (if-not (= (tt t1) :whitespace)
                               [(token :whitespace nil)])
                             (fun/fun-call-seq ":par")
                             (if-not (= (tt t3) :whitespace)
                               [(token :whitespace nil)])
                             [t3]))

(defrule introduce-section-calls
  [state t1 t2]
  tt
  block?
  [_ :fun _] nil
  [_ _ [:block :h1]] [nil t1 (fun/fun-call-head ":h1") t2]
  [_ _ [:block :h2]] [nil t1 (fun/fun-call-head ":h2") t2]
  [_ _ [:block :h3]] [nil t1 (fun/fun-call-head ":h3") t2]
  [_ _ [:block :h4]] [nil t1 (fun/fun-call-head ":h4") t2]
  [_ _ [:block :h5]] [nil t1 (fun/fun-call-head ":h5") t2]
  [_ _ [:block :h6]] [nil t1 (fun/fun-call-head ":h6") t2])

(defrule introduce-blockquote-calls
  [state t1 t2]
  tt
  block?
  [_ :fun _] nil ; make sure the next line terminates
  [_ _ [:block :indent]] [nil t1 (fun/fun-call-head ":quotation") t2])

(defrule introduce-bullet-list-calls
  [state t1 t2]
  tt
  block?
  [_ [:block :bullet] _] nil
  [_ :fun _] nil ; make sure the next line terminates
  [_ _ [:block :bullet]] [nil t1 (fun/fun-call-head ":bullet-list") t2])

(defrule introduce-link-calls
  [state t1 t2 t3 t4 t5]
  tt
  block?
  [_
   (:or :whitespace nil)
   :bang
   [:block :bracket]
   [:block :parenthesis]
   (:or :whitespace nil)] (concat [nil t1]
                                  (fun/fun-call-seq ":img"
                                                    (center t3)
                                                    (center t4))
                                  [t5])
  [_
   (:or :whitespace nil)
   [:block :bracket]
   [:block :parenthesis]
   (:or :whitespace nil)
   _] (concat [nil t1]
              (fun/fun-call-seq ":link"
                                (center t2)
                                (center t3))
              [t4 t5]))

(defn wrap-term [tag-name t]
  (concat
    [(token :html (str \< tag-name \>))]
    (if (block? t)
      (.terms (center t))
      [t])
    [(token :html (str "</" tag-name \>))]))

(defrule remove-decorators
  [state t1 t2 t3 t4 t5 t6 t7]
  tt
  block?
  [_ (:or :whitespace nil)
   :underscore _ :underscore
   (:or :whitespace nil) _ _]
  (concat [nil t1]
          (wrap-term "u" t3)
          [t5 t6 t7])

  [_ (:or :whitespace nil)
   :asterisk _ :asterisk
   (:or :whitespace nil) _ _]
  (concat [nil t1]
          (wrap-term "em" t3)
          [t5 t6 t7])

  [_ (:or :whitespace nil)
   :asterisk :asterisk _ :asterisk :asterisk
   (:or :whitespace nil)]
  (concat [nil t1]
          (wrap-term "strong" t4)
          [t7]))