(ns termcat.core
  (:require [clojure.core.reducers :as r]
            [termcat.util :refer :all]
            [termcat.token :as tok]
            [termcat.bracket :as br]
            [termcat.lambda :as lam]
            [termcat.html :as html]
            [termcat.sugar :as sugar]))

(defn bracketed-rf [tok]
  (if (= (tok/toktype tok) :bracketed)
    (tok/lexeme tok)))

(->> (slurp "hello.tc")
     (r/map tok/char-default-token)
     (s-reduce tok/subst-escapes)
     (s-reduce tok/melt-tokens)
     (s-reduce tok/abstract-indents)
     (s-reduce tok/subst-newlines)
     ; TODO add :emptyline at start and end
     (s-reduce br/abstract-brackets)
     (rs-reduce sugar/subst-hashlines bracketed-rf)
     ; TODO remove first and last :emptyline
     (rs-reduce sugar/subst-emptylines bracketed-rf)
     (rs-reduce sugar/subst-bullets bracketed-rf)
     (rs-reduce sugar/subst-indents bracketed-rf)
     (rs-reduce lam/abstract-funs bracketed-rf)
     (rs-reduce lam/apply-funs bracketed-rf)
     (rs-reduce html/to-html bracketed-rf)
     (html/prettier)
     (apply str)
     println)