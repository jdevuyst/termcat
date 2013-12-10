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
   (do
     (if (nil? (first input))
       (->> input
            (filter (complement nil?))
            vec
            print-tree))
     nil)))

(defn compile
  ([s]
   (compile s (rw2/make-cache)))
  ([s cache]
   (rw2/with-cache
     cache
     (as-> s $
           (pretok/map-to-tokens $)
           (rewrite $ tok/escape-html)
           (.terms $)
           (rw2/apply-rules [(rw2/make-fixpoint
                               (rw2/compose-rules
                                 tok/remove-escape-tokens
                                 tok/remove-annotated-tokens
                                 tok/merge-tokens
                                 tok/remove-magic-tokens
                                 ))
                             (rw2/make-fixpoint
                               tok/remove-percent-tokens)
                             tok/introduce-emptyline-tokens
                             tok/introduce-indent-tokens
                             tok/remove-superfluous-whitespace
                             tok/introduce-item-tokens]
                            $)
           (-> $ fragmentcat (rewrite ast/abstract-blocks) .terms)
           (rw2/apply-rules [(rw2/make-recursive
                               (rw2/compose-rules
                                 ast/fix-bullet-continuations
                                 ast/remove-superfluous-whitespace
                                 )
                               block?
                               rw2/narrow-scope)]
                            $)
           (rw2/apply-rules [(rw2/make-recursive
                               (rw2/make-fixpoint
                                 (rw2/compose-rules
                                   ;                     ast/introduce-delim-errors
                                   ;                     ast/convert-newlines-to-whitespace
                                   ;                     ast/remove-superfluous-whitespace

                                   ;                     bind/introduce-lambdas
                                   ;                     bind/introduce-fun-calls
                                   bind/introduce-bindings

                                   sugar/introduce-par-calls
                                   sugar/introduce-section-calls
                                   sugar/introduce-blockquote-calls
                                   sugar/introduce-bullet-list-calls
                                   sugar/introduce-link-calls
                                   sugar/remove-decorators
                                   lambda/evaluate-fun-calls

                                   bind/expand-bindings
                                   ;                     bind/remove-superfluous-whitespace
                                   ))
                               block?
                               rw2/lexical-scope)
                             (rw2/make-recursive
                               (rw2/compose-rules
                                 math-sugar/remove-manual-casts
                                 math-sugar/introduce-math-operators
                                 ; math-sugar/introduce-msub-msup
                                 ;                     math-sugar/introduce-mfrac
                                 ;                     math-sugar/math-cast-next-token
                                 ;                     math-sugar/flatten-math-fences
                                 ;                     math-sugar/introduce-nbsp-entities
                                 )
                               block?
                               rw2/narrow-scope)
                             (rw2/make-recursive
                               (rw2/compose-rules
                                 html/introduce-typographic-dashes
                                 html/introduce-typographic-quotes
                                 html/introduce-typographic-full-stops
                                 html/introduce-typographic-colons
                                 )
                               html/text-block?
                               rw2/narrow-scope)
                             (rw2/make-recursive
                               (rw2/compose-rules
                                 html/remove-error-tokens
                                 html/introduce-math-tags
                                 ; html/introduce-mtext-tags ; special scope
                                 )
                               block?
                               rw2/narrow-scope)
                             print-tree-rule
                             (rw2/make-recursive
                                 html/remove-math-tags
                                 block?
                                 rw2/narrow-scope)
                             ]
                            $)
           (html/add-boilerplate $)
           (rw2/apply-rules [(rw2/make-recursive
                               (rw2/make-fixpoint
                                 html/to-html-tokens)
                               block?
                               rw2/narrow-scope)]
                            $)
           (fragmentcat $)
           (html/to-string $)
           ))))
; fix unwind for bullet items

(->> (slurp "doc/termcat-intro.tc")
     compile
     (spit "doc/termcat-intro.html")
     time)