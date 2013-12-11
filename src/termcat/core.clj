(ns termcat.core
  (:refer-clojure :exclude [compile])
  (:require [termcat.rewrite :refer :all]
            [termcat.rewrite2 :as rw2]
            [termcat.term :refer :all]
            [termcat.stage.pretokenize :as pretok]
            [termcat.stage.tokenize :as tok]
            [termcat.stage.ast :as ast]
            [termcat.stage.bind :as bind]
            [termcat.stage.sugar :as sugar]
            [termcat.stage.math-sugar :as math-sugar]
            [termcat.stage.lambda :as lambda]
            [termcat.stage.html :as html]))

(def ^:dynamic *debug* true)

(defn print-tree
  ([tree] (print-tree tree ""))
  ([tree indent]
   (letfn [(token-to-string [t]
                            (assert (token? t))
                            (str [(tt t) (payload t)]
                                 (let [lpos (-> t meta :lpos)
                                       rpos (-> t meta :rpos)]
                                   (if (or lpos rpos)
                                     (str " :: " lpos "-" rpos)))))]
     (doseq [t (rw2/unwrap tree)]
       (if (block? t)
         (let [new-indent (str indent "  ")]
           (println indent \> (token-to-string (left t)))
           (print-tree t new-indent)
           (println indent \< (token-to-string (right t))))
         (println indent (token-to-string t)))))
   tree))

(defn print-tree-rule
  ([] nil)
  ([state input]
   (->> input
        vec
        print-tree)
   nil))

(defn compile
  ([s]
   (compile s (rw2/make-cache)))
  ([s cache]
   (rw2/with-cache
     cache
     (->> s
          pretok/map-to-tokens
          (#(-> % fragmentcat (rewrite tok/escape-html) .terms))
          (rw2/apply-rule-x
            (rw2/sequence
              (rw2/procedure
                (rw2/fixpoint
                  (rw2/disjunction
                    tok/remove-escape-tokens
                    tok/remove-annotated-tokens
                    tok/merge-tokens
                    tok/remove-magic-tokens)))

              (rw2/procedure
                (rw2/fixpoint
                  tok/remove-percent-tokens))

              (rw2/procedure
                tok/introduce-emptyline-tokens)

              (rw2/procedure
                tok/introduce-indent-tokens)

              (rw2/procedure
                tok/remove-superfluous-whitespace)

              (rw2/procedure
                tok/introduce-item-tokens) ; fix unwind for bullet items
              ))

          (#(-> % fragmentcat (rewrite ast/abstract-blocks) .terms))

          (rw2/apply-rule-x
            (rw2/sequence
              (rw2/recursion
                (rw2/procedure
                  (rw2/disjunction
                    ast/fix-bullet-continuations
                    ast/remove-superfluous-whitespace))
                block?)

              ; ast/introduce-delim-errors
              ; ast/convert-newlines-to-whitespace
              ; ast/remove-superfluous-whitespace

              ; bind/introduce-lambdas

              (rw2/recursive-procedure
                (rw2/disjunction
                  bind/introduce-fun-calls
                  bind/introduce-bindings
                  ; bind/remove-superfluous-whitespace
                  )
                block?
                rw2/lexical-scope)

              (rw2/recursion
                (rw2/procedure
                    (rw2/disjunction
                      sugar/introduce-par-calls
                      sugar/introduce-section-calls
                      sugar/introduce-blockquote-calls
                      sugar/introduce-bullet-list-calls
                      sugar/introduce-link-calls
                      sugar/remove-decorators))
                block?)

                (rw2/fixpoint
                   (rw2/recursive-procedure
                    (rw2/disjunction
                      lambda/evaluate-fun-calls

                      bind/expand-bindings
                      )
                  block?
                  rw2/lexical-scope))

              print-tree-rule

              (rw2/recursion
                (rw2/procedure
                  (rw2/disjunction
                    math-sugar/remove-manual-casts
                    math-sugar/introduce-math-operators
                    math-sugar/introduce-msub-msup
                    math-sugar/introduce-mfrac
                    ; math-sugar/math-cast-next-token
                    ; math-sugar/flatten-math-fences
                    ))
                block?)

              (rw2/recursion
                (rw2/procedure
                  (rw2/disjunction
                    html/introduce-nbsp-entities
                    html/introduce-typographic-dashes
                    html/introduce-typographic-quotes
                    html/introduce-typographic-full-stops
                    html/introduce-typographic-colons))
                html/text-block?)

              (rw2/recursion
                (rw2/procedure
                  (rw2/disjunction
                    html/remove-error-tokens
                    html/introduce-math-tags
                    ))
                block?)

              (rw2/recursive-procedure
                html/introduce-mtext-tags
                block?
                rw2/flat-scope)

              (rw2/recursion
                (rw2/procedure
                  html/remove-math-tokens)
                block?)

              (rw2/recursion
                (rw2/procedure
                  (rw2/fixpoint
                    html/to-html-tokens))
                block?)))

          html/add-boilerplate
          html/to-string
          ))))

; (defn repeat-compile [s]
;   (let [the-cache (rw2/make-cache)]
;     (println "PASS 1" (count @the-cache)
;              (count (get @the-cache :funs)))
;     (compile s the-cache)
;     (println "PASS 2" (count @the-cache)
;              (count (get @the-cache :funs)))
;     (compile s the-cache)
;     (println "PASS 3" (count @the-cache)
;              (count (get @the-cache :funs)))
;     (compile s the-cache)
;     (println "PASS 4" (count @the-cache)
;              (count (get @the-cache :funs)))
;     (compile s the-cache)
;     (println "PASS 5" (count @the-cache)
;              (count (get @the-cache :funs)))
;     (compile s the-cache)))

(->> (slurp "doc/termcat-intro.tc")
     compile
     (spit "doc/termcat-intro.html")
     time)