(ns termcat.fun
  (:require [termcat.term :refer :all]))

(defn html-wrapper [tag]
  (fn [x] [(token :html (str \< tag \>))
           (center x)
           (token :html (str \< \/ tag \>))]))

(def fun-map {":par" (fn [] [(token :html "<p>")])
              ":section" (html-wrapper "h1")
              ":subsection" (html-wrapper "h2")
              ":subsubsection" (html-wrapper "h3")
              ":bullet-list" (fn [& xs]
                               (concat [(token :html "<ul>")]
                                       (concat (for [x xs]
                                                 [(token :html "<li>")
                                                  (center x)]))
                                       [(token :html "</ul>")]))
              ":emph" (html-wrapper "emph")
              ":strong" (html-wrapper "strong")
              ":underline" (html-wrapper "u")})

(defn fun-call-head [fname]
  (let [f (get fun-map fname)]
    (assert (fn? f))
    (token :fun f)))

(defn fun-call-seq
  "Returns a sequence of terms that represent a function call."
  [fname & args]
  (concat [(fun-call-head fname)]
          (for [arg args]
            (block (token [:ldelim :parenthesis])
                   arg
                   (token [:rdelim :parenthesis])))))