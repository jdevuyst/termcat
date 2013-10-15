(ns termcat.stage.html
  (:require [termcat.term :refer :all]
            [termcat.rewrite :refer :all]))

(defn escape [s]
  (cond (string? s) (apply str (for [c s] (case c \< "&lt;" \> "&gt;" \& "&amp;" c)))
        (char? s) (escape (str s))
        :else ""))

(defrule flatten-to-html
  [state t1]
  tt
  [_ [:block _]] (concat [nil
                          (token :html (escape (payload (left t1))))]
                         (.terms (center t1))
                         [(token :html (escape (payload (right t1))))])
  [_ :error] [nil
              (token :html "<span class='termcat_error'>")
              (token :html (escape (payload t1)))
              (token :html "</span>")]
  [_ :whitespace] [nil (token :html \space)]
  [_ :html] [nil (token :html (payload t1))]
  [_ _] [nil (token :html (escape (payload t1)))])