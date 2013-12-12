(ns termcat.util.lambda
  (:require [clojure.string :as string]
            [termcat.term :refer :all]))

(defn tval [t pred]
  (-> t
      center
      ednval
      (as-> $ (if (pred $)
                $
                (do
                  (println "Wrong type.")
                  (println "\tSource:"
                           (->> t
                                center
                                .terms
                                (map payload)
                                (map str)
                                string/join))
                  (println "\tEDN value:" $)
                  (println "\tPredicate:" pred)
                  (throw (java.lang.Exception.
                           "Wrong type")))))))

(defmacro protect [& expr]
  `(try ~@expr
     (catch java.lang.Exception x#
       [(token :error (.getMessage x#))])))

(defmacro constant-fun [& body]
  (let [x (gensym 'constant-fun-x)]
    `(fn [self# ~x]
       (if ~x
         [~@body ~x]
         [~@body]))))

(defmacro unary-fun [[x] & body]
  `(fn [self# ~x]
     (if ~x
       (do ~@body)
       [(token :error "Missing function argument(s)")])))

(defn curry-fun
  ([f]
   (fn [self x]
     (if x
       [(token :fun (curry-fun (partial f x)))]
       (f))))
  ([f n]
   (assert (pos? n))
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
  (concat [(token :html "<a href='")
           (token :whitespace)]
          (.terms (center url))
          [(token :whitespace)
           (token :html "'>")
           (token :whitespace)]
          (.terms (center text))
          [(token :whitespace)
           (token :html "</a>")]))

(defn html-image [alt-text url]
  (concat [(token :html "<img src='")
           (token :whitespace)]
          (.terms (center url))
          [(token :whitespace)
           (token :html "' alt='")
           (token :whitespace)]
          (.terms (center alt-text))
          [(token :whitespace)
           (token :html "'>")]))

(defn bullet-list [& rows]
  (concat [(token :html "<ul>")]
          (mapcat (fn [x]
                    (concat [(token :html "<li>")
                             (token :whitespace)]
                            (.terms (center x))
                            [(token :whitespace)]))
                  rows)
          [(token :html "</ul>")]))

(defn numbered-list [& rows]
  (concat [(token :html "<ol>")]
          (mapcat (fn [x]
                    (concat [(token :html "<li>")
                             (token :whitespace)]
                            (.terms (center x))
                            [(token :whitespace)]))
                  rows)
          [(token :html "</ol>")]))

(defn map-fn [lambda & args]
  (let [x (mapcat (fn [x y] (concat [(token :whitespace)] x [y]))
                  (repeat (.terms (center lambda)))
                  args)]
    x))

(defn reduce-fn [lambda result]
  [(token :fun (fn [self new-el]
                 (if (nil? new-el)
                   [result]
                   [(token :fun (curry-fun reduce-fn 2))
                    lambda
                    (block (ldelim :reduce-fn)
                           (fragmentcat (-> lambda center .terms)
                                        [result new-el])
                           (rdelim :reduce-fn))])))])

(defn block-source [block-t]
  (let [lpos (-> block-t left meta :lpos)
        rpos (-> block-t right meta :rpos)
        src (-> block-t left meta :src)]
    (if (and lpos rpos)
      (token :default (subs src (inc lpos) rpos))
      (token :error "Source code not found"))))

(defn lit [src]
  [(block-source src)])

(defn litfork [src]
  [(block (ldelim :litfork)
          (fragment (block-source src))
          (rdelim :litfork))
   src])

(defn nth-fn [n]
  [(token :fun
          (curry-fun (fn [& args]
                       (protect (-> n
                                    (as-> $
                                          (tval $ integer?)
                                          (nth args $))
                                    center
                                    .terms)))))])

(defn apply-fn [f arg]
  (concat (mapcat #(-> % center .terms)
                  [f arg])
          [(token :whitespace)]))

(defn plus [x y]
  (protect (->> (+ (tval x number?)
                   (tval y number?))
                str
                (token :default)
                vector)))

(defn greater-than [x y]
  (protect (->> (> (tval x number?)
                   (tval y number?))
                str
                (token :default)
                vector)))

(defn range-fn [start end]
  (protect (->> (range (tval start integer?) (tval end integer?))
                (map str)
                (map #(block (ldelim :range)
                             (fragment (token :default %))
                             (rdelim :range))))))

(defn if-fn [t1 t2 t3]
  (protect (->> (if (tval t1 #(or (= % true)
                                  (= % false)))
                  t2
                  t3)
                center
                .terms)))

(def fun-map {".identity" (unary-fun [x] (.terms (center x)))
              ".rand" (constant-fun (token :default (str (rand))))
              ":par" (html-constant "<p>")
              ":h1" (html-wrapper "h1")
              ":h2" (html-wrapper "h2")
              ":h3" (html-wrapper "h3")
              ":h4" (html-wrapper "h4")
              ":h5" (html-wrapper "h5")
              ":h6" (html-wrapper "h6")
              ":quotation" (html-wrapper "blockquote")
              ":bullet-list" (curry-fun bullet-list)
              ":numbered-list" (curry-fun numbered-list)
              ":link" (curry-fun html-link 2)
              ":img" (curry-fun html-image 2)
              ":emph" (html-wrapper "em")
              ":strong" (html-wrapper "strong")
              ":underline" (html-wrapper "u")
              ".map" (curry-fun map-fn)
              ".reduce" (curry-fun reduce-fn 2)
              ".lit" (curry-fun lit 1)
              ".litfork" (curry-fun litfork 1)
              ".nth" (curry-fun nth-fn 1)
              ".apply" (curry-fun apply-fn 2)
              ".eq?" (curry-fun (comp vector #(token :default %) str =) 2)
              ".add" (curry-fun plus 2)
              ".gt?" (curry-fun greater-than 2)
              ".range" (curry-fun range-fn 2)
              ".if" (curry-fun if-fn 3)
              ; ".reduce" (curry-fun reduce-fn)
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
              ; ":msup" (math-wrapper :msup)
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