(ns termcat.fun
  (:require [clojure.core.reducers :as r]
            [termcat.term :refer :all]))

(defn html-wrapper [tag]
  (fn [x] (concat [(token :html (str \< tag \>))]
                  (.terms (center x))
                  [(token :html (str \< \/ tag \>))])))

(def fun-map {":par" (fn [] [(token :html "<p>")])
              ":section" (html-wrapper "h1")
              ":subsection" (html-wrapper "h2")
              ":subsubsection" (html-wrapper "h3")
              ":bullet-list" (fn [& xs]
                               (concat [(token :html "<ul>")]
                                       (mapcat (fn [x] (cons (token :html "<li>")
                                                             (.terms (center x)))))
                                       [(token :html "</ul>")]))
              ":emph" (html-wrapper "emph")
              ":strong" (html-wrapper "strong")
              ":underline" (html-wrapper "u")
              ".identity" (fn [x] [x])
              ".rand" (fn [] [(token :default (str (rand)))])})

(defn fun-call-head [fname]
  (let [f (get fun-map fname)]
    (if (fn? f)
      (token :fun f)
      (token :error (str "Function not found: " fname)))))

(defn fun-call-seq
  "Returns a sequence of terms that represent a function call."
  [fname & args]
  (concat [(fun-call-head fname)]
          (for [arg args]
            (block (token [:ldelim :parenthesis])
                   arg
                   (token [:rdelim :parenthesis])))
          [(token :default)]))