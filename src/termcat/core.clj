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

(defn print-fragment
  ([frag] (print-fragment frag ""))
  ([frag indent]
   (assert (fragment? frag))
   (letfn [(token-to-string [t]
                            (assert (token? t))
                            (str [(tt t) (payload t)]
                                 (let [lpos (-> t meta :lpos)
                                       rpos (-> t meta :rpos)]
                                   (if (or lpos rpos)
                                     (str " :: " lpos "-" rpos)))))]
     (doseq [t (.terms frag)]
       (if (block? t)
         (let [new-indent (str indent "  ")]
           (println indent \> (token-to-string (left t)))
           (print-fragment (center t) new-indent)
           (println indent \< (token-to-string (right t))))
         (println indent (token-to-string t)))))
   frag))

; (print (apply str (repeat 1000 \newline)))

(defn compile
  ([s]
   (compile s rw2/empty-cache))
  ([s cache]
  (rw2/with-cache
    cache
    (as-> s $
          (pretok/map-to-tokens $)
          (rewrite $ tok/escape-html)
          (.terms $)
          (rw2/apply-rules [(rw2/compose-rules
                              tok/remove-escape-tokens
                              tok/remove-annotated-tokens
                              tok/merge-tokens
                              tok/remove-percent-tokens
                              tok/introduce-emptyline-tokens
                              tok/introduce-indent-tokens
                              tok/remove-superfluous-whitespace
                              tok/introduce-item-tokens
                              tok/remove-magic-tokens
                              )]
                           $)
          ; (rewrite $ ast/abstract-blocks)
          ; (rw2/apply-rules [(rw2/compose-rules
          ;                     ast/introduce-delim-errors
          ;                     ast/fix-bullet-continuations
          ;                     ast/convert-newlines-to-whitespace
          ;                     ast/remove-superfluous-whitespace

          ;                     bind/introduce-lambdas
          ;                     bind/introduce-fun-calls
          ;                     bind/introduce-bindings

          ;                     sugar/introduce-par-calls
          ;                     sugar/introduce-section-calls
          ;                     sugar/introduce-blockquote-calls
          ;                     sugar/introduce-bullet-list-calls
          ;                     sugar/introduce-link-calls
          ;                     sugar/remove-decorators

          ;                     bind/remove-superfluous-whitespace

          ;                     math-sugar/remove-manual-casts
          ;                     math-sugar/introduce-math-operators
          ;                     math-sugar/introduce-msub-msup
          ;                     math-sugar/introduce-mfrac
          ;                     math-sugar/math-cast-next-token
          ;                     math-sugar/flatten-math-fences
          ;                     math-sugar/introduce-nbsp-entities
          ;                     )
          ;                   ]
          ;                  $)
          ; (rw2/apply-rules [(rw2/compose-rules
          ;                     html/introduce-typographic-dashes
          ;                     html/introduce-typographic-quotes
          ;                     html/introduce-typographic-full-stops
          ;                     html/introduce-typographic-colons
          ;                     html/remove-error-tokens
          ;                     html/introduce-math-tags
          ;                     ; html/introduce-mtext-tags
          ;                     ; html/remove-math-tags
          ;                     html/to-html-tokens
          ;                     )]
          ;                  $)
          (html/add-boilerplate $)
          (fragmentcat $)
          (do
            (print-fragment $)
            $)
          (html/to-string $)
          ))))
; fix unwind for bullet items


(def source (slurp "doc/termcat-intro.tc"))

; (def source "[Termcat](https://github.com/jdevuyst/termcat) is a markup language optimized for scientific and technical writing. It compiles to HTML and MathML. To generate PDFs, [Prince](http://www.princexml.com) can be used.")

; (def source "test")

(->> ;(concat (repeat 3 nil) source)
     source
     compile
     first
     (spit "doc/termcat-intro.html")
     time)