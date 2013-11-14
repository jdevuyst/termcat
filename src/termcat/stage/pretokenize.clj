(ns termcat.stage.pretokenize
  (:require [clojure.core.reducers :as r]
            [termcat.term :refer :all]))

(defn char-to-token
  "Converts all characters to tokens. Here the term/token-type
  a function from characters to keywords. That is, we guess."
[c]
(token (case c
         \\ :escape
         \space :whitespace
         \newline :newline
         \( (ldelim-t :parenthesis)
         \) (rdelim-t :parenthesis)
         \[ (ldelim-t :bracket)
         \] (rdelim-t :bracket)
         \{ (ldelim-t :brace)
         \} (rdelim-t :brace)
         \< :less-than
         \> :greater-than
         \% :percent
         \~ :tilde
         \- :dash
         \` :left-quote
         \' :right-quote
         \" :double-quote
         \^ :circumflex
         \_ :underscore
         \| :bar
         \# :hash
         \! :bang
         \: :colon
         \, :comma
         \. :maybe-fun
         \* :maybe-magic
         \+ :maybe-magic
         :default)
       c))

(defn map-to-tokens [code]
  (->> code
       (r/reduce (fn [[result pos] c]
                   [(conj result
                          (with-meta (char-to-token c)
                                     {:source-code code
                                      :source-pos pos}))
                    (inc pos)])
                 [[] 0])
       first
       fragmentcat))