(ns termcat.fun
  (:require [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.util :as u]))

(defmacro constant-fun [& body]
  (let [x (gensym 'constant-fun-x)]
    `(fn [~x]
       (if ~x
         [~@body ~x]
         [~@body]))))

(defmacro unary-fun [[x] & body]
  `(fn [~x]
     (if ~x
       (do ~@body)
       "Missing function argument(s)")))

(defn curry-fun
  ([f]
   (fn [x]
     (if x
       [(token :fun (curry-fun (partial f x)))]
       (f))))
  ([f n]
   (assert (> n 0))
   (if (= n 1)
     (unary-fun [x] (f x))
     (unary-fun [x]
                [(token :fun (curry-fun (partial f x) (dec n)))]))))

(defn html-constant [code]
  (constant-fun (token :html code)))

(defn html-wrapper [tag]
  (unary-fun [x]
             (concat [(token :html (str \< tag \>))]
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

(defn bullet-list [& rows]
  (concat [(token :html "<ul>")]
          (mapcat (fn [x]
                    (cons (token :html "<li>")
                          (.terms (center x))))
                  rows)
          [(token :html "</ul>")]))

(defn numbered-list [& rows]
  (concat [(token :html "<ol>")]
          (mapcat (fn [x]
                    (cons (token :html "<li>")
                          (.terms (center x))))
                  rows)
          [(token :html "</ol>")]))

(def fun-map {":par" (html-constant "<p>")
              ":section" (html-wrapper "h1")
              ":subsection" (html-wrapper "h2")
              ":subsubsection" (html-wrapper "h3")
              ":quotation" (html-wrapper "blockquote")
              ":bullet-list" (curry-fun bullet-list)
              ":numbered-list" (curry-fun numbered-list)
              ":link" (curry-fun html-link 2)
              ":img" (curry-fun html-image 2)
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
              ".identity" (unary-fun [x] (.terms (center x)))
              ".rand" (constant-fun (token :default (str (rand))))
              })

(defn fun-call-head [fname]
  (let [f (get fun-map fname)]
    (if (fn? f)
      (token :fun (with-meta f {:fun-name fname}))
      (token :error (str "Function not found – " fname)))))

(defn fun-call-seq
  "Returns a sequence of terms that represents a function call."
  [fname & args]
  (concat [(fun-call-head fname)]
          (for [arg args]
            (block (token [:ldelim :parenthesis])
                   arg
                   (token [:rdelim :parenthesis])))
          [(token :html)]))

(defn apply-fun [fun-token arg-token]
  (let [f (payload fun-token)
        retval (f arg-token)]
    (if (string? retval)
      [(token :error (str retval " – " (:fun-name (meta f))))]
      retval)))