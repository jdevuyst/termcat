(ns termcat.rules.pretokenize
  (:require [clojure.core.reducers :as r]
            [termcat.term :as t]))

(defn char-to-token
  "Converts all characters to tokens. Here the term/token-type
  a function from characters to keywords. That is, we guess."
[c]
(t/token (case c
           \\ :escape
           \space :whitespace
           \newline :newline
           \( (t/ldelim-t :parenthesis)
           \) (t/rdelim-t :parenthesis)
           \[ (t/ldelim-t :bracket)
           \] (t/rdelim-t :bracket)
           \{ (t/ldelim-t :brace)
           \} (t/rdelim-t :brace)
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
           \? :question-mark
           \: :colon
           \, :comma
           \. :period
           \* :asterisk
           \+ :plus
           :default)
         c))

(defn map-to-tokens [code]
  (->> code
       (r/reduce (fn [[result pos] c]
                   [(conj result
                          (with-meta (char-to-token c)
                                     {:src code
                                      :lpos pos
                                      :rpos pos}))
                    (inc pos)])
                 [[] 0])
       first))