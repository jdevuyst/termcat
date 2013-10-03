(ns termcat.html
  (:require [clojure.string :refer (split)]
            [termcat.util :refer :all]
            [termcat.token :refer (toktype lexeme)]))

(defn html [s]
  [:html s])

(defn escape [s]
  (apply str (for [c s] (case c \< "&lt;" \> "&gt;" \& "&amp;" c))))

(defn to-html [state result tok]
  (case (toktype tok)
    :bracketed (concat [nil 0] (second tok))
    :whitespace [nil 0 \space]
    :html [nil 0 (lexeme tok)]
    [nil 0 (escape (lexeme tok))]))

(defn prettier [xs]
  (s-reduce (fn [state result x]
              [nil 0 (case x
                       "<p>" "\n<p>\n"
                       x)])
            xs))