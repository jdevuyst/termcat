(ns termcat.core
  (:require [clojure.core.reducers :as r]
            [termcat.token :as tok]))

(println (->> (slurp "hello.tc")
              (r/map tok/char-default-token)
              (r/reduce tok/tok-conj [])
              (r/reduce tok/insert-indents [])
              (r/reduce tok/remove-trailing-whitespace [])
              (r/reduce tok/substitute-newlines [])
              (r/foldcat)))