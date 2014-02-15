(ns termcat.util.lambda
  (:require-macros [termcat.util.lambda-macros :refer (protect constant-fun unary-fun)])
  (:require [clojure.string :as string]
            [termcat.rewrite :as rw]
            [termcat.term :as t]
            [termcat.util.math :as math]))

(defn tval [t pred]
  (-> t
      t/center
      t/ednval
      (as-> $ (if (pred $)
                $
                (throw (java.lang.Exception.
                         "Wrong type"))))))

(defn curry-fun
  ([f]
   (fn [self x]
     (if x
       [(t/token :fun (curry-fun (partial f x)))]
       (f))))
  ([f n]
   (assert (pos? n))
   (if (= n 1)
     (unary-fun [x] (f x))
     (unary-fun [x]
                [(t/token :fun (curry-fun (partial f x) (dec n)))]))))

(defn html-constant [code]
  (constant-fun (t/token :html code)))

(defn html-wrapper [tag]
  (unary-fun [x]
             (concat [(t/token :html (str \< tag \>))]
                     (rw/unwrap x)
                     [(t/token :html (str \< \/ tag \>))])))

(defn html-link [text url]
  [(t/token :html "<a href='")
   (math/math-block (t/center url) :text)
   (t/token :html "'>")
   (math/math-block (t/center text) :text)
   (t/token :html "</a>")])

(defn html-image [alt-text url]
  [(t/token :html "<img src='")
   (math/math-block (t/center url) :text)
   (t/token :html "' alt='")
   (math/math-block (t/center alt-text) :text)
   (t/token :html "'>")])

(defn bullet-list [& rows]
  (concat [(t/token :html "<ul>")]
          (mapcat (fn [x]
                    (concat [(t/token :html "<li>")
                             (t/token :whitespace)]
                            (rw/unwrap x)
                            [(t/token :whitespace)]))
                  rows)
          [(t/token :html "</ul>")]))

(defn numbered-list [& rows]
  (concat [(t/token :html "<ol>")]
          (mapcat (fn [x]
                    (concat [(t/token :html "<li>")
                             (t/token :whitespace)]
                            (rw/unwrap x)
                            [(t/token :whitespace)]))
                  rows)
          [(t/token :html "</ol>")]))

(defn map-fn [lambda & args]
  (let [x (mapcat (fn [x y] (concat [(t/token :whitespace)] x [y]))
                  (repeat (rw/unwrap lambda))
                  args)]
    x))

(defn reduce-fn [lambda result]
  [(t/token :fun (fn [self new-el]
                   (if (nil? new-el)
                     [result]
                     [(t/token :fun (curry-fun reduce-fn 2))
                      lambda
                      (t/block (t/ldelim :reduce-fn)
                               (t/fragmentcat (rw/unwrap lambda)
                                              [result new-el])
                               (t/rdelim :reduce-fn))])))])

(defn block-source [block-t]
  (let [lpos (-> block-t t/left meta :lpos)
        rpos (-> block-t t/right meta :rpos)
        src (-> block-t t/left meta :src)]
    (if (and lpos rpos)
      (t/token :default (subs src (inc lpos) rpos))
      (t/token :error "Source code not found"))))

(defn lit [src]
  [(block-source src)])

(defn litfork [src]
  [(t/block (t/ldelim :litfork)
            (t/fragment (block-source src))
            (t/rdelim :litfork))
   src])

(defn nth-fn [n]
  [(t/token :fun
            (curry-fun (fn [& args]
                         (protect (->> (tval n integer?)
                                       (nth args)
                                       rw/unwrap)))))])

(defn apply-fn [f arg]
  (concat (mapcat rw/unwrap [f arg])
          [(t/token :whitespace)]))

(defn plus [x y]
  (protect (->> (+ (tval x number?)
                   (tval y number?))
                str
                (t/token :default)
                vector)))

(defn greater-than [x y]
  (protect (->> (> (tval x number?)
                   (tval y number?))
                str
                (t/token :default)
                vector)))

(defn range-fn [start end]
  (protect (->> (range (tval start integer?) (tval end integer?))
                (map str)
                (map #(t/block (t/ldelim :range)
                               (t/fragment (t/token :default %))
                               (t/rdelim :range))))))

(defn eq-fn [t1 t2]
  (let [v1 (tval t1 (constantly true))
        v2 (tval t2 (constantly true))]
    (->> (and (not= nil v1)
              (= v1 v2))
         str
         (t/token :default)
         vector)))

(def fun-map {".identity" (unary-fun [x] (rw/unwrap x))
              ; ".rand" (constant-fun (t/token :default (str (rand))))
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
              ".eq" (curry-fun eq-fn 2)
              ".add" (curry-fun plus 2)
              ".gt" (curry-fun greater-than 2)
              ".range" (curry-fun range-fn 2)
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
      (t/token :fun (with-meta f {:fun-name fname}))
      (t/token :error (str "Function not found – " fname)))))

(defn fun-call-seq
  "Returns a sequence of terms that represents a function call.

  args is a sequence of fragments."
[fname & args]
(concat [(fun-call-head fname)]
        (for [arg args]
          (t/block (t/token [:ldelim :fun-call-seq])
                   arg
                   (t/token [:rdelim :fun-call-seq])))))