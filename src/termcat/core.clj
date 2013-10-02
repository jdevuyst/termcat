(ns termcat.core
  (:require [clojure.core.reducers :as r]
            [termcat.util :refer :all]
            [termcat.token :as tok]
            [termcat.bracket :as br]
            [termcat.lambda :as lam]))

(defn tcprint [xs]
  (doseq [x xs]
    (case (first x)
      :bracketed (do
                   (print "<")
                   (tcprint (second x))
                   (print ">"))
      :emptyline (do (println) (println))
      :indent (print "{")
      :unindent (print "}")
      (print (second x)))))

(defn bracketed-rf [tok]
  (if (= (tok/toktype tok) :bracketed)
    (tok/lexeme tok)))

(tcprint (->> (slurp "hello.tc")
              (r/map tok/char-default-token)
              (s-reduce tok/melt-tokens)
              (s-reduce tok/insert-indents)
              (s-reduce tok/subst-newlines)
              (s-reduce br/abstract-brackets)
              (rs-reduce lam/abstract-thunks bracketed-rf)
              (rs-reduce lam/apply-funs bracketed-rf)
              (r/foldcat)))