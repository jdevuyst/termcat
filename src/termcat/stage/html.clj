(ns termcat.stage.html
  (:require [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]))

(defn escape [s]
  (cond (string? s) (apply str (for [c s] (case c \< "&lt;" \> "&gt;" \& "&amp;" c)))
        (char? s) (escape (str s))
        :else ""))

(defrule to-html-tokens
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
  [_ :html] [nil t1]
  [_ _] [nil (token :html (escape (payload t1)))])

(defrule introduce-boilerplate
  [state t1 t2]
  tt
  [_ nil _] [nil
             (token :html "<!DOCTYPE html>")
             (token :html "<html>")
             (token :html "<head>")
             (token :html "<meta charset='utf-8'>")
             (token :html "<title>")
             (token :default "A Termcat Document")
             (token :html "</title>")
             (token :html "<style>")
             (token :html ".termcat_error { background: red; color: white }")
             (token :html "</style>")
             (token :html "</head>")
             (token :html "<body>")
             t2]
  [_ _ nil] [nil
             t1
             (token :html "</body>")
             (token :html "</html>")])

(defn to-string [frag]
  (->> frag
       .terms
       (r/map payload)
       (r/reduce str)))