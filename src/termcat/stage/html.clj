(ns termcat.stage.html
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [clojure.set :as set]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]))

(defn text-block? [x]
  (and (block? x)
       (not (:math (second (tt x))))))

(defrule introduce-typographic-dashes
  [state t1]
  tt
  block?
  [_ :dash] (case (if (string? (payload t1))
                    (count (payload t1)))
              2 [nil (token :default \–)]
              3 [nil (token :default \—)]
              nil))

(defrule introduce-typographic-quotes
  (constant-state {:in-math-tag false})
  [state t1]
  tt
  text-block?
  [_ :left-quote] (let [length (count (str (payload t1)))
                        doublec (int (/ length 2))
                        also-single (odd? (mod length 2))]
                    (concat [nil]
                            (repeat doublec (token :default \“))
                            (if also-single [(token :default \‘)])))
  [_ :right-quote] (let [length (count (str (payload t1)))
                         doublec (int (/ length 2))
                         also-single (odd? (mod length 2))]
                     (concat [nil]
                             (if also-single [(token :default \’)])
                             (repeat doublec (token :default \”)))))

(defrule introduce-typographic-full-stops
  [state t1 t2 t3]
  tt
  text-block?
  [_ (:or :default
          [:block _])
   :maybe-fun
   :whitespace] (if (and (= (payload t2) \.)
                         (or (block? t1)
                             (re-matches #"[^\\.]*"
                                         (payload t1))))
                  [nil
                   t1
                   (token :html "<span class='full_stop'>")
                   t2
                   (token :html "</span>")
                   t3]))

(defrule introduce-typographic-colons
  [state t1 t2 t3]
  tt
  text-block?
  [_ (:or :default
          [:block _])
   :maybe-fun
   :whitespace] (if (= (payload t2) \:)
                  [nil
                   t1
                   (token :html "<span class='colon'>")
                   t2
                   (token :html "</span>")
                   t3]))

(defn wrap-math-block [t props]
  (let [tag-name (condp #(contains? %2 %1) props
                   :mo "mo"
                   :mi "mi"
                   :mn "mn"
                   (assert false))]
    (concat [(token :html (str \< tag-name
                               (if (contains? props :script)
                                 " mathvariant=script")
                               (condp #(contains? %2 %1) props
                                 :prefix " form=prefix"
                                 :infix " form=infix"
                                 :postfix " form=postfix"
                                 nil)
                               (condp #(contains? %2 %1) props
                                 :wide-left " lspace=veryverythickmathspace"
                                 :normal-left " lspace=thickmathspace"
                                 nil)
                               (condp #(contains? %2 %1) props
                                 :wide-right " rspace=veryverythickmathspace"
                                 :normal-right " rspace=thickmathspace"
                                 nil)
                               \>))]
            (.terms (center t))
            [(token :html (str \< \/ tag-name \>))])))

(defrule introduce-math-tags
  [state t1 t2]
  tt
  block?
  [_ _ [:block (_ :guard :msup)]] (concat [nil
                                           t1
                                           (token :open-math)
                                           (token :html "<msup>")
                                           (token :already-math)]
                                          (.terms (center t2))
                                          [(token :still-math)
                                           (token :html "</msup>")
                                           (token :close-math)])
  [_ _ [:block (_ :guard :msub)]] (concat [nil
                                           t1
                                           (token :open-math)
                                           (token :html "<msub>")
                                           (token :already-math)]
                                          (.terms (center t2))
                                          [(token :still-math)
                                           (token :html "</msub>")
                                           (token :close-math)])
  [_ _ [:block (_ :guard :mfrac)]] (concat [nil
                                            t1
                                            (token :open-math)
                                            (token :html "<mfrac>")
                                            (token :already-math)]
                                           (.terms (center t2))
                                           [(token :still-math)
                                            (token :html "</mfrac>")
                                            (token :close-math)])
  [_ _ [:block (_ :guard :mrow)]] (concat [nil
                                           t1
                                           (token :open-math)
                                           (token :html "<mrow>")
                                           (token :already-math)]
                                          (.terms (center t2))
                                          [(token :still-math)
                                           (token :html "</mrow>")
                                           (token :close-math)])
  [_ _ [:block (x :guard :math)]] (concat [nil
                                           t1
                                           (token :open-math)]
                                          (wrap-math-block t2 x)
                                          [(token :close-math)]))

(defrule remove-math-tags
  [state t1 t2]
  tt
  block?
  [_ :close-math :open-math] [nil]
  [_ :already-math :open-math] [nil]
  [_ :already-math _] (assert false)
  [_ :close-math :still-math] [nil]
  [_ _ :still-math] (assert false)
  [_ :close-math _] [nil (token :html "</math>") t2]
  [_ _ :open-math] [nil t1 (token :html "<math>")])

(defn escape [s]
  (cond (string? s) (apply str (for [c s]
                                 (case c
                                   \< "&lt;"
                                   \> "&gt;"
                                   \& "&amp;"
                                   \' "&apos;"
                                   \" "&quot;" c)))
        (char? s) (escape (str s))
        :else ""))

(defrule to-html-tokens
  [state t1]
  tt
  block?
  [_ [:block _]] (concat [nil
                          (token :html (escape (payload (left t1))))]
                         (.terms (center t1))
                         [(token :html (escape (payload (right t1))))])
  [_ :error] [nil
              (token :html "<span class='termcat_error'>")
              (token :html (escape (payload t1)))
              (token :html "</span>")]
  [_ :whitespace] [nil (token :html \space)]
  [_ :html] [nil t1]
  [_ _] [nil (token :html (escape (payload t1)))])

(defrule introduce-boilerplate
  [state t1 t2]
  tt
  (constantly false)
  [_ nil _] [nil
             (token :html "<!DOCTYPE html>")
             (token :html "<html>")
             (token :html "<head>")
             (token :html "<meta charset='utf-8'>")
             (token :html "<title>")
             (token :html "A Termcat Document")
             (token :html "</title>")
             (token :html "<style>")
             (token :html ".termcat_error {")
             (token :html "background: red; ")
             (token :html "color: white; ")
             (token :html "margin-left: .33ex; ")
             (token :html "margin-right: .33ex }")
             (token :html ".full_stop, .colon {")
             (token :html "padding-right: .5em }")
             (token :html "</style>")
             (token :html "<script async src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML'></script>")
             (token :html "</head>")
             (token :html "<body>")
             t2]
  [_ _ nil] [nil
             t1
             (token :html "</body>")
             (token :html "</html>")])

(defn to-string [frag]
  (->> frag
       .terms
       (r/map payload)
       (r/reduce str)))