(ns termcat.core
  (:refer-clojure :exclude [compile])
  (:require [termcat.rewrite :refer :all]
            [termcat.term :refer :all]
            [termcat.stage.pretokenize :as pretok]
            [termcat.stage.tokenize :as tok]
            [termcat.stage.ast :as ast]
            [termcat.stage.sugar :as sugar]
            [termcat.stage.lambda :as lambda]
            [termcat.stage.html :as html]))

(def ^:dynamic *debug* true)

(defn print-fragment
  ([frag] (print-fragment frag ""))
  ([frag indent]
   (assert (fragment? frag))
   (letfn [(token-to-string [t]
                            (assert (token? t))
                            (str [(tt t) (payload t)]))]
     (doseq [t (.terms frag)]
       (if (block? t)
         (let [new-indent (str indent "  ")]
           (println indent \> (token-to-string (left t)))
           (print-fragment (center t) new-indent)
           (println indent \< (token-to-string (right t))))
         (println indent (token-to-string t)))))
   frag))

(defn compile [s]
  (-> s
      pretok/map-to-tokens
      (rewrite tok/remove-escape-tokens)
      (rewrite tok/merge-tokens)
      (rewrite tok/introduce-emptyline-tokens)
      (rewrite tok/introduce-indent-tokens)
      (rewrite tok/remove-superfluous-whitespace)
      (rewrite tok/introduce-item-tokens)
      (rewrite tok/remove-percent-magic)
      (rewrite tok/undelimit-certain-chevrons)
      (rewrite tok/remove-magic-tokens)
      (rewrite ast/abstract-blocks)
      (rewrite ast/introduce-delim-errors)
      (rewrite ast/fix-bullet-continuations)
      (rewrite ast/convert-newlines-to-whitespace)
      (rewrite ast/remove-superfluous-whitespace)
      (rewrite sugar/introduce-par-calls)
      (rewrite sugar/introduce-section-calls)
      (rewrite sugar/introduce-blockquote-calls)
      (rewrite sugar/introduce-bullet-list-calls)
      (rewrite sugar/introduce-link-calls)
      (rewrite sugar/introduce-decorator-calls)
      ; (rewrite sugar/box-remaining-magic)
      (rewrite sugar/introduce-math-identifiers)
      (rewrite sugar/introduce-math-operators)
      (rewrite sugar/introduce-typographic-primes)
      (rewrite sugar/flatten-math-fences)
      (rewrite lambda/introduce-fun-calls)
      (rewrite lambda/evaluate-fun-calls)
      (cond-> *debug* print-fragment)
      (rewrite html/introduce-typographic-dashes)
      ; (rewrite html/introduce-typographic-quotes)
      (rewrite html/introduce-math-tags)
      ; (cond-> *debug* print-fragment)
      (rewrite html/to-html-tokens)
      (rewrite html/introduce-boilerplate)
      html/to-string))

(->> (slurp "hello.tc")
     compile
     (spit "hello.html")
     time)