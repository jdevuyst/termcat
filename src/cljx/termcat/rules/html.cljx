(ns termcat.rules.html
  (:refer-clojure :exclude (flatten))
  #+cljs (:require-macros [cljs.core.match.macros :refer (match)]
                          [termcat.core-macros-cljs :refer (defrule window)])
  (:require #+cljs [cljs.core.match]
            #+clj [clojure.core.match :refer (match)]
            #+clj [termcat.core-macros :refer (defrule window)]
            [clojure.core.reducers :as r]
            [clojure.string :as string]
            [termcat.rewrite :as rw]
            [termcat.term :as t]
            [termcat.util.math :as math]))

(defn text-block? [x]
  (and (t/block? x)
       (not (:math (second (t/tt x))))))

(defrule introduce-nbsp-entities [state t1]
  [_ :tilde] [nil (t/token :html "&nbsp;")])

(defrule introduce-typographic-dashes [state t1]
  [_ :dash] (case (if (string? (t/payload t1))
                    (count (t/payload t1)))
              2 [nil (t/token :default \–)]
              3 [nil (t/token :default \—)]
              nil))

(defrule introduce-typographic-quotes {:in-math-tag false} [state t1]
  [_ :left-quote] (let [length (count (str (t/payload t1)))
                        doublec (int (/ length 2))
                        also-single (odd? (mod length 2))]
                    (concat [nil]
                            (repeat doublec (t/token :default \“))
                            (if also-single [(t/token :default \‘)])))
  [_ :right-quote] (let [length (count (str (t/payload t1)))
                         doublec (int (/ length 2))
                         also-single (odd? (mod length 2))]
                     (concat [nil]
                             (if also-single [(t/token :default \’)])
                             (repeat doublec (t/token :default \”)))))

(defrule introduce-typographic-full-stops [state t1 t2 t3]
  [_ (:or :default
          [:block _])
   :period
   :whitespace] (if (and (= (t/payload t2) \.)
                         (or (t/block? t1)
                             (re-matches #"[^\\.]*"
                                         (str (t/payload t1)))))
                  [nil
                   t1
                   (t/token :html "<span class='wide_punctuation_mark'>")
                   t2
                   (t/token :html "</span>")
                   t3]))

(defrule introduce-typographic-colons [state t1 t2 t3]
  [_ (:or :default
          [:block _])
   (:or :colon :bang :question-mark)
   :whitespace] [nil
                 t1
                 (t/token :html "<span class='wide_punctuation_mark'>")
                 t2
                 (t/token :html "</span>")
                 t3])

(defrule remove-error-tokens [state t1]
  [_ :error] [nil (math/math-block
                    (t/fragment (t/token :default
                                         (t/payload t1)))
                    :error)])

(defn wrap-math-block [t props]
  (let [tag-name (condp #(contains? %2 %1) props
                   :mo "mo"
                   :mi "mi"
                   :mn "mn"
                   (assert false))]
    (concat [(t/token :open-math)
             (t/token :html (str \< tag-name
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
             (t/token :already-math)]
            (rw/unwrap t)
            [(t/token :still-math)
             (t/token :html (str \< \/ tag-name \>))
             (t/token :close-math)])))

(defrule introduce-inner-math-tags [state t1]
  [_ [:block (_ :guard :text)]] nil
  [_ [:block (_ :guard :error)]] (concat [nil
                                          (t/token :open-math)
                                          (t/token :html "<merror>")
                                          (t/token :html "<mtext>")]
                                         (rw/unwrap t1)
                                         [(t/token :html "</mtext>")
                                          (t/token :html "</merror>")
                                          (t/token :close-math)])
  [_ [:block (_ :guard :msup)]] (concat [nil
                                         (t/token :open-math)
                                         (t/token :html "<msup>")
                                         (t/token :already-math)]
                                        (rw/unwrap t1)
                                        [(t/token :still-math)
                                         (t/token :html "</msup>")
                                         (t/token :close-math)])
  [_ [:block (_ :guard :msub)]] (concat [nil
                                         (t/token :open-math)
                                         (t/token :html "<msub>")
                                         (t/token :already-math)]
                                        (rw/unwrap t1)
                                        [(t/token :still-math)
                                         (t/token :html "</msub>")
                                         (t/token :close-math)])
  [_ [:block (_ :guard :msubsup)]] (concat [nil
                                            (t/token :open-math)
                                            (t/token :html "<msubsup>")
                                            (t/token :already-math)]
                                           (rw/unwrap t1)
                                           [(t/token :still-math)
                                            (t/token :html "</msubsup>")
                                            (t/token :close-math)])
  [_ [:block (_ :guard :mfrac)]] (concat [nil
                                          (t/token :open-math)
                                          (t/token :html "<mfrac>")
                                          (t/token :already-math)]
                                         (rw/unwrap t1)
                                         [(t/token :still-math)
                                          (t/token :html "</mfrac>")
                                          (t/token :close-math)])
  [_ [:block (_ :guard :mrow)]] (concat [nil
                                         (t/token :open-math)
                                         (t/token :html "<mrow>")
                                         (t/token :already-math)]
                                        (rw/unwrap t1)
                                        [(t/token :still-math)
                                         (t/token :html "</mrow>")
                                         (t/token :close-math)])
  [_ [:block (x :guard :math)]] (concat [nil
                                         (t/token :open-math)]
                                        (wrap-math-block t1 x)
                                        [(t/token :close-math)]))

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
  (window {:count 0 :in-text false} t/tt [state t1 t2]
          [{:in-text true} :still-math _]
          [(assoc state :in-text false)
           (t/token :html "</mtext>")
           t2]

          [{:in-text true} :open-math _]
          [(-> state
               (assoc :in-text false)
               (update-in [:count] inc))
           (t/token :html "</mtext>")
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
                   (t/token :html "<mtext>")]
                  (if-not (= :whitespace (t/tt t2))
                    [t2])))
  )

(defrule introduce-outer-math-tags [state t1 t2]
  [_ :close-math _] [nil (t/token :html "</math>") t2]
  [_ :open-math _] [nil (t/token :html "<math>") t2])

(defn escape [s]
  (cond (string? s) (string/join (for [c s]
                                   (case c
                                     \< "&lt;"
                                     \> "&gt;"
                                     \& "&amp;"
                                     \' "&apos;"
                                     \" "&quot;"
                                     c)))
        #+clj (char? s) #+clj (escape (str s))
        :else ""))

(defrule flatten [state t1]
  [_ [:block _]]
  (concat [nil
           (t/token :html (-> t1 t/left t/payload escape))]
          (rw/unwrap t1)
          [(t/token :html (-> t1 t/right t/payload escape))]))

(def separate-head-body
  (window {:context :body
           :body []
           :head []}
          t/tt
          [state t1]
          [_ _] (match (-> t1 t/payload str string/lower-case)
                       "<head>" [(assoc state :context :head)]
                       "</head>" [(assoc state :context :body)]
                       :else [(update-in state [(:context state)] conj t1)])))

(defn add-boilerplate
  ([] nil)
  ([state input]
   [nil
    (concat [(t/token :html "<!DOCTYPE html>")
             (t/token :html "<html>")
             (t/token :html "<head>")
             (t/token :html "<meta charset='utf-8'>")]
            (:head state)
            [(t/token :html "<script type='text/x-mathjax-config'>")
             (t/token :html "MathJax.Hub.Config({ ")
             (t/token :html "MathML: { useMathMLspacing: true } });")
             (t/token :html "</script>")
             (t/token :html "<script async src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML'></script>")
             (t/token :html "</head>")
             (t/token :html "<body>")
             (t/token :start-body)]
            (:body state)
            [(t/token :end-body)
             (t/token :html "</body>")
             (t/token :html "</html>")])]))

(defrule remove-superfluous-whitespace [state t1 t2]
  [_ :emptyline :emptyline] [nil t1]
  [_ :whitespace (:or :whitespace :emptyline)] [nil t2]
  [_ (:or :whitespace :emptyline) :whitespace] [nil t1]
  [_ (:or :start-body nil) (:or :whitespace :emptyline)] [nil]
  [_ (:or :whitespace :emptyline) (:or :end-body nil)] [nil])

(defrule to-html-tokens [state t1]
  [_ :whitespace] (if (t/payload t1)
                    [nil (t/token :html \space)]
                    [nil])
  [_ :emptyline] [nil (t/token :html "<p>")]
  [_ :html] nil
  [_ nil] nil ; make next clause terminate
  [_ _] [nil (t/token :html (escape (t/payload t1)))])

(defn to-string [v]
  (->> v
       (r/map t/payload)
       (r/reduce str)))