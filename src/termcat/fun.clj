(ns termcat.fun
  (:require [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.util :as u]))

(defn html-constant [code]
  (fn [] [(token :html code)]))

(defn html-wrapper [tag]
  (fn [x] (concat [(token :html (str \< tag \>))]
                  (.terms (center x))
                  [(token :html (str \< \/ tag \>))])))

(defn html-link [text url]
  [(token :html "<a href='")
   url
   (token :html "'>")
   text
   (token :html "</a>")])

(defn html-image [alt-text url]
  [(token :html "<img src='")
   url
   (token :html "' alt='")
   alt-text
   (token :html "'>")])

(def fun-map {":par" (html-constant "<p>")
              ":section" (html-wrapper "h1")
              ":subsection" (html-wrapper "h2")
              ":subsubsection" (html-wrapper "h3")
              ":quotation" (html-wrapper "blockquote")
              ":bullet-list" (fn [& xs]
                               (concat [(token :html "<ul>")]
                                       (mapcat (fn [x]
                                                 (cons (token :html "<li>")
                                                       (.terms (center x))))
                                               xs)
                                       [(token :html "</ul>")]))
              ":numberedlist" (fn [& xs]
                                 (concat [(token :html "<ol>")]
                                         (mapcat (fn [x]
                                                   (cons (token :html "<li>")
                                                         (.terms (center x))))
                                                 xs)
                                         [(token :html "</ol>")]))
              ":link" html-link
              ":img" html-image
              ":emph" (html-wrapper "em")
              ":strong" (html-wrapper "strong")
              ":underline" (html-wrapper "u")
              ":union" (html-constant "⋃")
              ":intersection" (html-constant "⋂")
              ":times" (html-constant "×")
              ":in" (html-constant "∈")
              ":nin" (html-constant "∉")
              ":subset" (html-constant "⊂")
              ":subseteq" (html-constant "⊆")
              ":nsubset" (html-constant "⊄")
              ":nsubseteq" (html-constant "⊈")
              ":supset" (html-constant "⊃")
              ":supseteq" (html-constant "⊇")
              ":nsupset" (html-constant "⊅")
              ":nsupseteq" (html-constant "⊉")
              ".identity" (fn [x] (.terms (center x)))
              ".countargs" (fn [& xs] [(token :default
                                              (str (count xs)))])
              ".rand" (fn [] [(token :default (str (rand)))])})

(defn fun-call-head [fname]
  (let [f (get fun-map fname)]
    (if (fn? f)
      (token :fun (with-meta f {:fun-name fname}))
      (token :error (str "Function not found – " fname)))))

(defn fun-call-seq
  "Returns a sequence of terms that represent a function call."
  [fname & args]
  (concat [(fun-call-head fname)]
          (for [arg args]
            (block (token [:ldelim :parenthesis])
                   arg
                   (token [:rdelim :parenthesis])))
          [(token :html)]))