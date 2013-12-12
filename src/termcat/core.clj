(ns termcat.core
  (:refer-clojure :exclude [compile])
  (:require [termcat.term :refer :all]
            [termcat.rewrite :as rw]
            [termcat.rules.pretokenize :as pretok]
            [termcat.rules.tokenize :as tok]
            [termcat.rules.ast :as ast]
            [termcat.rules.bind :as bind]
            [termcat.rules.lambda :as lambda-rules]
            [termcat.rules.markdown :as markdown]
            [termcat.rules.math :as math-rules]
            [termcat.rules.html :as html]))

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
   (->> input vec print-tree)
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
          markdown/introduce-par-calls
          markdown/introduce-section-calls
          markdown/introduce-blockquote-calls
          markdown/introduce-bullet-list-calls
          markdown/introduce-link-calls
          markdown/remove-decorators))
      block?)

    (rw/fixpoint
      (rw/recursive-procedure
        (rw/disjunction
          lambda-rules/evaluate-fun-calls

          bind/expand-bindings
          )
        block?
        rw/lexical-scope))

    print-tree-rule

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
          html/introduce-math-tags))
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
   (compile s (rw/cache)))
  ([s cache]
   (rw/with-cache
     cache
     (->> s
          pretok/map-to-tokens
          (rw/apply-rule main-rule)
          html/add-boilerplate
          html/to-string))))

(let [the-cache (rw/cache)
      f #(compile % the-cache)
      void (fn [f x] (f x) x)]
  (->> (slurp "doc/termcat-intro.tc")
       ; (void f) (void f) (void f) (void f)
       f
       (spit "doc/termcat-intro.html")
       time)
  (println "\"Cache size:" (count @the-cache) "items\""))