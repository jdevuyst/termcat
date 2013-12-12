(ns termcat.core
  (:refer-clojure :exclude [compile])
  (:require [termcat.rewrite :as rw]
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
     (doseq [t (rw/unwrap tree)]
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

(def main-rule
  (rw/sequence
    (rw/abstraction
      (rw/reduction
        tok/escape-html))

    (rw/procedure
      (rw/fixpoint
        (rw/disjunction
          tok/remove-escape-tokens
          tok/remove-annotated-tokens
          tok/merge-tokens
          tok/remove-magic-tokens)))

    (rw/procedure
      (rw/fixpoint
        tok/remove-percent-tokens))

    (rw/procedure
      tok/introduce-emptyline-tokens)

    (rw/procedure
      tok/introduce-indent-tokens)

    (rw/procedure
      tok/remove-superfluous-whitespace)

    (rw/procedure
      tok/introduce-item-tokens) ; fix unwind for bullet items

    (rw/abstraction
      (rw/reduction
        ast/abstract-blocks))

    (rw/recursion
      (rw/procedure
        (rw/disjunction
          ast/fix-bullet-continuations
          ast/remove-superfluous-whitespace))
      block?)

    ; ast/introduce-delim-errors
    ; ast/convert-newlines-to-whitespace
    ; ast/remove-superfluous-whitespace

    ; bind/introduce-lambdas

    (rw/recursive-procedure
      (rw/disjunction
        bind/introduce-fun-calls
        bind/introduce-bindings
        ; bind/remove-superfluous-whitespace
        )
      block?
      rw/lexical-scope)

    (rw/recursion
      (rw/procedure
        (rw/disjunction
          sugar/introduce-par-calls
          sugar/introduce-section-calls
          sugar/introduce-blockquote-calls
          sugar/introduce-bullet-list-calls
          sugar/introduce-link-calls
          sugar/remove-decorators))
      block?)

    (rw/fixpoint
      (rw/recursive-procedure
        (rw/disjunction
          lambda/evaluate-fun-calls

          bind/expand-bindings
          )
        block?
        rw/lexical-scope))

    print-tree-rule

    (rw/recursion
      (rw/fixpoint
        (rw/procedure
          (rw/disjunction
            math-sugar/remove-manual-casts
            math-sugar/introduce-math-operators
            math-sugar/introduce-msub-msup
            math-sugar/introduce-mfrac
            ; math-sugar/math-cast-next-token
            ; math-sugar/flatten-math-fences
            )))
      block?)

    (rw/recursion
      (rw/procedure
        (rw/disjunction
          html/introduce-nbsp-entities
          html/introduce-typographic-dashes
          html/introduce-typographic-quotes
          html/introduce-typographic-full-stops
          html/introduce-typographic-colons))
      html/text-block?)

    (rw/recursion
      (rw/procedure
        (rw/disjunction
          html/remove-error-tokens
          html/introduce-math-tags
          ))
      block?)

    (rw/recursive-procedure
      html/introduce-mtext-tags
      block?
      rw/flat-scope)

    (rw/recursion
      (rw/procedure
        html/remove-math-tokens)
      block?)

    (rw/recursion
      (rw/procedure
        (rw/fixpoint
          html/to-html-tokens))
      block?)))

(defn compile
  ([s]
   (compile s (rw/make-cache)))
  ([s cache]
   (rw/with-cache
     cache
     (->> s
          pretok/map-to-tokens
          (rw/apply-rule-x main-rule)
          html/add-boilerplate
          html/to-string
          ))))

; (defn repeat-compile [s]
;   (let [the-cache (rw/make-cache)]
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