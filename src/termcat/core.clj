(ns termcat.core
  (:refer-clojure :exclude [compile])
  (:require [termcat.rewrite :refer :all]
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

(defn compile [s]
  (as-> s $
        (pretok/map-to-tokens $)
        (reduce (fn [x y]
                  (if (= y :TRACE)
                    (do
                      (print-fragment x)
                      x)
                    (rewrite x y)))
                $
                [tok/escape-html
                 tok/remove-escape-tokens
                 tok/remove-annotated-tokens
                 tok/merge-tokens
                 tok/introduce-emptyline-tokens
                 tok/introduce-indent-tokens
                 tok/remove-superfluous-whitespace
                 tok/introduce-item-tokens
                 tok/remove-magic-tokens
                 tok/remove-percent-tokens
                 tok/remove-remaining-percent-tokens
                 ast/abstract-blocks
                 ast/introduce-delim-errors
                 ast/fix-bullet-continuations
                 ast/convert-newlines-to-whitespace
                 ast/remove-superfluous-whitespace

                 bind/introduce-lambdas
                 bind/introduce-fun-calls
                 bind/introduce-bindings

                 sugar/introduce-par-calls
                 sugar/introduce-section-calls
                 sugar/introduce-blockquote-calls
                 sugar/introduce-bullet-list-calls
                 sugar/introduce-link-calls
                 sugar/remove-decorators

                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings

                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings
                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings
                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings
                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings
                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings
                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings
                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings
                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings
                 lambda/evaluate-fun-calls
                 bind/introduce-bindings
                 bind/expand-bindings

                 :TRACE

                 bind/remove-superfluous-whitespace
                 math-sugar/remove-manual-casts
                 math-sugar/introduce-math-operators
                 math-sugar/introduce-msub-msup
                 math-sugar/introduce-mfrac
                 math-sugar/math-cast-next-token
                 math-sugar/flatten-math-fences
                 math-sugar/introduce-nbsp-entities
                 html/introduce-typographic-dashes
                 html/introduce-typographic-quotes
                 html/introduce-typographic-full-stops
                 html/introduce-typographic-colons
                 html/remove-error-tokens
                 html/introduce-math-tags
                 html/introduce-mtext-tags
                 html/remove-math-tags
                 html/to-html-tokens
                 html/introduce-boilerplate])
        (html/to-string $)))

(->> (slurp "hello.tc")
     compile
     (spit "hello.html")
     time)