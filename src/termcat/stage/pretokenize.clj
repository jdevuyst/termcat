(ns termcat.stage.pretokenize
  (:require [clojure.core.reducers :as r]
            [termcat.term :refer :all]))

(defn char-to-token
  "Converts all characters to tokens. Here the term/token-type
  a function from characters to keywords. That is, we guess."
[c]
(token (condp contains? c
         #{\\} :escape
         #{\space} :whitespace
         #{\newline} :newline
         #{\(} (ldelim-t :parenthesis)
         #{\)} (rdelim-t :parenthesis)
         #{\[} (ldelim-t :bracket)
         #{\]} (rdelim-t :bracket)
         #{\{} (ldelim-t :brace)
         #{\}} (rdelim-t :brace)
         #{\<} (ldelim-t :chevron)
         #{\>} (rdelim-t :chevron)
         #{\%} :percent
         #{\~} :tilde
         #{\-} :dash
         #{\`} :left-quote
         #{\'} :right-quote
         #{\"} :double-quote
         #{\^} :circumflex
         #{\. \, \: \; \!} :maybe-fun
         #{\# \* \+ \_} :maybe-magic
         :default)
       c))

(defn map-to-tokens [s]
  (->> s
       (r/map char-to-token)
       r/foldcat
       fragmentcat))