(ns termcat.core
  (:refer-clojure :exclude [compile])
  (:require [termcat.rewrite :as rw]
            [termcat.term :as t]
            [termcat.rules.pretokenize :as pretok]
            [termcat.rules.tokenize :as tok]
            [termcat.rules.ast :as ast]
            [termcat.rules.bind :as bind]
            [termcat.rules.lambda :as lambda-rules]
            [termcat.rules.markdown :as markdown]
            [termcat.rules.math :as math-rules]
            [termcat.rules.html :as html]))

(def ^:dynamic *debug* false)

(defn print-tree
  ([tree] (print-tree tree ""))
  ([tree indent]
   (letfn [(token-to-string [t]
                            (assert (t/token? t))
                            (str [(t/tt t) (t/payload t)]
                                 (let [lpos (-> t meta :lpos)
                                       rpos (-> t meta :rpos)]
                                   (if (or lpos rpos)
                                     (str " :: " lpos "-" rpos)))))]
     (doseq [t (rw/unwrap tree)]
       (if (t/block? t)
         (let [new-indent (str indent "  ")]
           (println indent \> (token-to-string (t/left t)))
           (print-tree t new-indent)
           (println indent \< (token-to-string (t/right t))))
         (println indent (if (nil? t) "nil" (token-to-string t))))))
   tree))

(defn debug-rule
  ([] nil)
  ([state input]
   (if *debug*
     (->> input vec print-tree))
   nil))

(def compile-rule
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
      tok/introduce-emptyline-tokens)

    (rw/procedure
      tok/introduce-indent-tokens)

    ; (rw/fixpoint
    ;   (rw/procedure
    ;     tok/fix-indent-tokens))

    (rw/procedure
      tok/remove-superfluous-whitespace)

    (rw/procedure
      tok/introduce-item-tokens)

    (rw/procedure
      (rw/fixpoint
        tok/remove-percent-tokens))

    ; debug-rule

    (rw/abstraction
      (rw/reduction
        ast/abstract-blocks))

    (rw/recursion
      (rw/procedure
        (rw/sequence
          ast/fix-bullet-continuations
          ast/convert-newlines-to-whitespace
          ast/remove-superfluous-whitespace))
      t/block?)

    ; ast/introduce-delim-errors

    ; bind/introduce-lambdas

    (rw/recursive-procedure
      (rw/fixpoint (rw/disjunction
                     bind/introduce-fun-calls
                     bind/introduce-bindings
                     ; bind/remove-superfluous-whitespace
                     ))
      t/block?
      rw/lexical-scope)

    (rw/recursion
      (rw/procedure
        (rw/disjunction
          markdown/introduce-section-calls
          markdown/introduce-blockquote-calls
          markdown/introduce-bullet-list-calls
          markdown/introduce-link-calls
          markdown/remove-decorators))
      t/block?)

    (rw/fixpoint
      (rw/recursive-procedure
        (rw/disjunction
          lambda-rules/evaluate-fun-calls

          bind/expand-bindings
          )
        t/block?
        rw/lexical-scope))

    (rw/recursion
      (rw/fixpoint
        (rw/procedure
          (rw/disjunction
            math-rules/remove-manual-casts
            math-rules/introduce-math-operators
            math-rules/introduce-msub-msup
            math-rules/introduce-mfrac
            ; math-rules/math-cast-next-token
            ; math-rules/flatten-math-fences
            )))
      t/block?)

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
          html/introduce-math-tags))
      t/block?)

    (rw/recursive-procedure
      html/introduce-mtext-tags
      t/block?
      rw/flat-scope)

    (rw/recursion
      (rw/procedure
        html/remove-math-tokens)
      t/block?)

    (rw/recursion
      (rw/procedure
        (rw/fixpoint
          html/flatten))
      t/block?)

    (rw/procedure
      (rw/fixpoint
        html/separate-head-body))

    html/add-boilerplate

    (rw/recursion
      (rw/procedure
        (rw/fixpoint
          html/remove-superfluous-whitespace))
      t/block?)

    (rw/recursion
      (rw/procedure
        (rw/fixpoint
          html/to-html-tokens))
      t/block?)
    ))

(defn compile
  ([s]
   (compile s (rw/cache)))
  ([s cache]
   (rw/with-cache
     cache
     (->> s
          pretok/map-to-tokens
          (rw/apply-rule compile-rule)
          html/to-string))))