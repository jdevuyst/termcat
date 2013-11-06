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

; (defn box [x]
;   [(transparent-block (center x))])

(defn html-constant [code]
  (constant-fun (token :html code)))

(defn html-wrapper [tag]
  (unary-fun [x]
             (concat [(token :html (str \< tag \>))]
                     (.terms (center x))
                     [(token :html (str \< \/ tag \>))])))

(defn html-link [text url]
  (concat [(token :html "<a href='")]
          (.terms (center url))
          [(token :html "'>")]
          (.terms (center text))
          [(token :html "</a>")]))

(defn html-image [alt-text url]
  (concat [(token :html "<img src='")]
          (.terms (center url))
          [(token :html "' alt='")]
          (.terms (center alt-text))
          [(token :html "'>")]))

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

; (defn math-wrapper [& keys]
;   (let [tag (into #{:math} keys)]
;     (unary-fun [x]
;                [(block (ldelim tag)
;                        (center x)
;                        (rdelim tag))])))

(def fun-map {;":box" box
              ":par" (html-constant "<p>")
              ":nbsp" (html-constant "&nbsp;")
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
              ; ":union" (constant-fun (token [:math :op] "⋃"))
              ; ":intersection" (constant-fun (token [:math :op] "⋂"))
              ; ":times" (constant-fun (token [:math :op] "×"))
              ; ":in" (constant-fun (token [:math :op] "∈"))
              ; ":nin" (constant-fun (token [:math :op] "∉"))
              ; ":subset" (constant-fun (token [:math :op] "⊂"))
              ; ":subseteq" (constant-fun (token [:math :op] "⊆"))
              ; ":nsubset" (constant-fun (token [:math :op] "⊄"))
              ; ":nsubseteq" (constant-fun (token [:math :op] "⊈"))
              ; ":supset" (constant-fun (token [:math :op] "⊃"))
              ; ":supseteq" (constant-fun (token [:math :op] "⊇"))
              ; ":nsupset" (constant-fun (token [:math :op] "⊅"))
              ; ":nsupseteq" (constant-fun (token [:math :op] "⊉"))
              ; ":math" math-cast
              ; ":mi" (math-wrapper :mi)
              ; ":mo" (math-wrapper :mo)
              ; ":mo-infix" (math-wrapper :mo :infix :normal-width)
              ; ":mo-infix-wide" (math-wrapper :mo :infix :wide)
              ; ":mo-prefix" (math-wrapper :mo :prefix :normal-width)
              ; ":mo-prefix-wide" (math-wrapper :mo :prefix :wide)
              ; ":mo-postfix" (math-wrapper :mo :postfix :normal-width)
              ; ":mo-postfix-wide" (math-wrapper :mo :postfix :wide)
              ;":msup" (math-wrapper :msup)
              ".identity" (unary-fun [x] (.terms (center x)))
              ".rand" (constant-fun (token :default (str (rand))))
              })

(defn fun-call-head [fname]
  (let [f (get fun-map fname)]
    (if (fn? f)
      (token :fun (with-meta f {:fun-name fname}))
      (token :error (str "Function not found – " fname)))))

(defn fun-call-seq
  "Returns a sequence of terms that represents a function call.

  args is a sequence of fragments."
[fname & args]
(concat [(fun-call-head fname)]
        (for [arg args]
          (block (token [:ldelim :fun-call-seq])
                 arg
                 (token [:rdelim :fun-call-seq])))))

(defn apply-fun [fun-token arg-token]
  (let [f (payload fun-token)
        retval (f arg-token)]
    (if (string? retval)
      [(token :error (str retval " – " (:fun-name (meta f))))]
      retval)))