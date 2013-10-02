(ns termcat.html
  (:require [termcat.util :refer :all]
            [termcat.token :refer (toktype lexeme)]))

(defn html [s]
  [:html s])

(defn subst-indents [state result tok]
  (case (toktype tok)
    :indent [nil 0 (html "\n<blockquote>")]
    :unindent [nil 0 (html "</blockquote>\n")]
    [nil 0 tok]))

(defn escape [s]
  (apply str (for [c s] (case c \< "&lt;" \> "&gt;" c))))

(defn to-html [state result tok]
  (case (toktype tok)
    :bracketed (concat [nil 0] (second tok))
    :whitespace [nil 0 \space]
    :html [nil 0 (lexeme tok)]
    [nil 0 (escape (lexeme tok))]))