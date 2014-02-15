(ns termcat.rules.html
  (:refer-clojure :exclude (flatten))
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [clojure.string :as string]
            [termcat.rewrite :as rw]
            [termcat.term :refer :all]
            [termcat.util.math :as math]))

(defn text-block? [x]
  (and (block? x)
       (not (:math (second (tt x))))))

(defrule introduce-nbsp-entities [state t1]
  [_ :tilde] [nil (token :html "&nbsp;")])

(defrule introduce-typographic-dashes [state t1]
  [_ :dash] (case (if (string? (payload t1))
                    (count (payload t1)))
              2 [nil (token :default \–)]
              3 [nil (token :default \—)]
              nil))

(defrule introduce-typographic-quotes {:in-math-tag false} [state t1]
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

(defrule introduce-typographic-full-stops [state t1 t2 t3]
  [_ (:or :default
          [:block _])
   :period
   :whitespace] (if (and (= (payload t2) \.)
                         (or (block? t1)
                             (re-matches #"[^\\.]*"
                                         (str (payload t1)))))
                  [nil
                   t1
                   (token :html "<span class='wide_punctuation_mark'>")
                   t2
                   (token :html "</span>")
                   t3]))

(defrule introduce-typographic-colons [state t1 t2 t3]
  [_ (:or :default
          [:block _])
   (:or :colon :bang :question-mark)
   :whitespace] [nil
                 t1
                 (token :html "<span class='wide_punctuation_mark'>")
                 t2
                 (token :html "</span>")
                 t3])

(defrule remove-error-tokens [state t1]
  [_ :error] [nil (math/math-block
                    (fragment (token :default
                                     (payload t1)))
                    :error)])

(defn wrap-math-block [t props]
  (let [tag-name (condp #(contains? %2 %1) props
                   :mo "mo"
                   :mi "mi"
                   :mn "mn"
                   (assert false))]
    (concat [(token :open-math)
             (token :html (str \< tag-name
                               (if (contains? props :script)
                                 " mathvariant=script")
                               (condp #(contains? %2 %1) props
                                 :prefix " form=prefix lspace=0em"
                                 :infix " form=infix"
                                 :postfix " form=postfix rspace=0em"
                                 nil)
                               (condp #(contains? %2 %1) props
                                 :wide-left " lspace=veryverythickmathspace"
                                 :normal-left " lspace=thickmathspace"
                                 nil)
                               (condp #(contains? %2 %1) props
                                 :wide-right " rspace=veryverythickmathspace"
                                 :normal-right " rspace=thickmathspace"
                                 nil)
                               \>))
             (token :already-math)]
            (rw/unwrap t)
            [(token :still-math)
             (token :html (str \< \/ tag-name \>))
             (token :close-math)])))

(defrule introduce-inner-math-tags [state t1]
  [_ [:block (_ :guard :text)]] nil
  [_ [:block (_ :guard :error)]] (concat [nil
                                          (token :open-math)
                                          (token :html "<merror>")
                                          (token :html "<mtext>")]
                                         (rw/unwrap t1)
                                         [(token :html "</mtext>")
                                          (token :html "</merror>")
                                          (token :close-math)])
  [_ [:block (_ :guard :msup)]] (concat [nil
                                         (token :open-math)
                                         (token :html "<msup>")
                                         (token :already-math)]
                                        (rw/unwrap t1)
                                        [(token :still-math)
                                         (token :html "</msup>")
                                         (token :close-math)])
  [_ [:block (_ :guard :msub)]] (concat [nil
                                         (token :open-math)
                                         (token :html "<msub>")
                                         (token :already-math)]
                                        (rw/unwrap t1)
                                        [(token :still-math)
                                         (token :html "</msub>")
                                         (token :close-math)])
  [_ [:block (_ :guard :msubsup)]] (concat [nil
                                            (token :open-math)
                                            (token :html "<msubsup>")
                                            (token :already-math)]
                                           (rw/unwrap t1)
                                           [(token :still-math)
                                            (token :html "</msubsup>")
                                            (token :close-math)])
  [_ [:block (_ :guard :mfrac)]] (concat [nil
                                          (token :open-math)
                                          (token :html "<mfrac>")
                                          (token :already-math)]
                                         (rw/unwrap t1)
                                         [(token :still-math)
                                          (token :html "</mfrac>")
                                          (token :close-math)])
  [_ [:block (_ :guard :mrow)]] (concat [nil
                                         (token :open-math)
                                         (token :html "<mrow>")
                                         (token :already-math)]
                                        (rw/unwrap t1)
                                        [(token :still-math)
                                         (token :html "</mrow>")
                                         (token :close-math)])
  [_ [:block (x :guard :math)]] (concat [nil
                                         (token :open-math)]
                                        (wrap-math-block t1 x)
                                        [(token :close-math)]))

(defrule remove-double-math-tokens [state t1 t2]
  [_ :already-math :already-math] [nil t1]
  [_ :still-math :still-math] [nil t1]
  [_ :close-math :close-math] [nil t1]
  [_ :open-math :open-math] [nil t1])

(defrule remove-canceling-math-tokens [state t1 t2]
  [_ :close-math :open-math] [nil]
  [_ :already-math :open-math] [nil]
  [_ :close-math :still-math] [nil])

(def introduce-mtext-tags
  (rw/window {:count 0 :in-text false} tt [state t1 t2]
             [{:in-text true} :still-math _]
             [(assoc state :in-text false)
              (token :html "</mtext>")
              t2]

             [{:in-text true} :open-math _]
             [(-> state
                  (assoc :in-text false)
                  (update-in [:count] inc))
              (token :html "</mtext>")
              t2]

             [_ :open-math _]
             [(update-in state [:count] inc) t1 t2]

             [_ :close-math (:or :still-math :open-math)]
             [(update-in state [:count] dec) t1 t2]

             [{:count 1} :close-math _]
             [(assoc state :count 0) t1 t2]

             [_ :close-math _]
             (concat [(-> state
                          (assoc :in-text true)
                          (update-in [:count] dec))
                      (token :html "<mtext>")]
                     (if-not (= :whitespace (tt t2))
                       [t2])))
  )

(defrule introduce-outer-math-tags [state t1 t2]
  [_ :close-math _] [nil (token :html "</math>") t2]
  [_ :open-math _] [nil (token :html "<math>") t2])

(defn escape [s]
  (cond (string? s) (string/join (for [c s]
                                   (case c
                                     \< "&lt;"
                                     \> "&gt;"
                                     \& "&amp;"
                                     \' "&apos;"
                                     \" "&quot;" c)))
        (char? s) (escape (str s))
        :else ""))

(defrule flatten [state t1]
  [_ [:block _]]
  (concat [nil
           (token :html (-> t1 left payload escape))]
          (rw/unwrap t1)
          [(token :html (-> t1 right payload escape))])
  )

(def separate-head-body
  (rw/window {:context :body
              :body []
              :head []}
             tt
             [state t1]
             [_ _] (match (-> t1 payload str string/lower-case)
                          "<head>" [(assoc state :context :head)]
                          "</head>" [(assoc state :context :body)]
                          :else [(update-in state [(:context state)] conj t1)])))

(defn add-boilerplate
  ([] nil)
  ([state input]
   [nil
    (concat [(token :html "<!DOCTYPE html>")
             (token :html "<html>")
             (token :html "<head>")
             (token :html "<meta charset='utf-8'>")]
            (:head state)
            [(token :html "<script type='text/x-mathjax-config'>")
             (token :html "MathJax.Hub.Config({ ")
             (token :html "MathML: { useMathMLspacing: true } });")
             (token :html "</script>")
             (token :html "<script async src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML'></script>")
             (token :html "</head>")
             (token :html "<body>")
             (token :start-body)]
            (:body state)
            [(token :end-body)
             (token :html "</body>")
             (token :html "</html>")])]))

(defrule remove-superfluous-whitespace [state t1 t2]
  [_ :emptyline :emptyline] [nil t1]
  [_ :whitespace (:or :whitespace :emptyline)] [nil t2]
  [_ (:or :whitespace :emptyline) :whitespace] [nil t1]
  [_ (:or :start-body nil) (:or :whitespace :emptyline)] [nil]
  [_ (:or :whitespace :emptyline) (:or :end-body nil)] [nil])

(defrule to-html-tokens [state t1]
  [_ :whitespace] (if (payload t1)
                    [nil (token :html \space)]
                    [nil])
  [_ :emptyline] [nil (token :html "<p>")]
  [_ :html] nil
  [_ nil] nil ; make next clause terminate
  [_ _] [nil (token :html (escape (payload t1)))])

(defn to-string [v]
  (->> v
       (r/map payload)
       (r/reduce str)))