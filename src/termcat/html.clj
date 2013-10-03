(ns termcat.html
  (:require [termcat.util :refer :all]
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