(ns termcat.html
  (:require [clojure.string :refer (split)]
            [termcat.util :refer :all]
            [termcat.token :refer (toktype lexeme)]))

(defn escape [s]
  (apply str (for [c s] (case c \< "&lt;" \> "&gt;" \& "&amp;" c))))

(defn to-html [state result tok]
  (case (toktype tok)
    [[:block _]] (concat [nil ()] (second tok))
    [_ :whitespace] [nil \space]
    [_ :html] [nil (payload tok)]
    :else [nil (escape (payload tok))]))