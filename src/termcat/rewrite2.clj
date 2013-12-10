(ns termcat.rewrite2
  (:refer-clojure :exclude [memoize])
  (:require [clojure.core.reducers :as r]
            [clojure.core.match :refer (match)]
            [clojure.core.cache :as cache]))

(def ^:dynamic !*cache*)

(def empty-cache (cache/basic-cache-factory {}))

(defmacro with-cache [cache & body]
  `(binding [!*cache* (atom ~cache)]
     [(do ~@body)
      @!*cache*]))

(defn memoize [f]
  (fn [& args]
    (if-let [result (cache/lookup @!*cache*
                                  [f args])]
      (do
        ; (reset! !*cache* (cache/hit @!*cache* :apply-rule-1))
        result)
      (let [result (apply f args)]
        (reset! !*cache* (cache/miss @!*cache*
                                     [f args]
                                     result))
        result))))

(def apply-rule-1
  (fn [rule state input]
    (or (rule state input)
        [state input])))

(defprotocol IWrapped
  (unwrap [orig])
  (rewrap [orig result]))

(extend-protocol IWrapped
  clojure.lang.IPersistentVector
  (unwrap [orig] orig)
  (rewrap [orig result] result))

(defn- pad-1 [v]
  (-> (cons nil (conj v nil))))

(defn- trim
  ([v] (trim v 0 (-> v count dec)))
  ([v lidx ridx]
   (let [lnil? (nil? (nth v lidx))
         rnil? (nil? (nth v ridx))]
     (cond
       (> lidx ridx)
       []

       (or lnil? rnil?)
       (recur v
              (if lnil? (inc lidx) lidx)
              (if rnil? (dec ridx) ridx))

       :else
       (subvec v lidx (inc ridx))))))

(def apply-rule
  (memoize
    (fn
      ([rule orig-input] (apply-rule rule (rule) orig-input))
      ([rule state orig-input]
       (loop [state state
              input (-> orig-input unwrap pad-1)
              output (transient [])]
         (if (empty? input)
           (rewrap orig-input
                   (-> output persistent! trim))
           (let [[new-state new-input] (apply-rule-1 rule state input)]
             (recur new-state
                    (rest new-input)
                    (conj! output (first new-input))))))))))

(defn apply-rules [rules input]
  (r/reduce #(apply-rule %2 %1)
            input
            rules))

(defn make-fixpoint [rule]
  (fn
    ([] (rule))
    ([state input]
     (let [[new-state new-input :as result] (apply-rule-1 rule state input)]
       (if (= input new-input)
         result
         (recur new-state new-input))))))

(defn abstract-state [rule]
  (fn
    ([] {rule (rule)})
    ([state input]
     (if-let [r (rule (get state rule) input)]
       [(assoc state rule (first r))
        (second r)]))))

(defn narrow-scope [rule state term]
  (rule))

(defn lexical-scope [rule state term]
  state)

(def apply-rule-recursively
  (identity
    (fn [f rule pred scope state input]
      (->> input
           (map #(if (pred %)
                   (apply-rule f (scope rule state %) %)
                   %))))))

(defn make-recursive [rule pred scope]
  (letfn [(f ([] (rule))
             ([state input]
              (->> input
                   (apply-rule-recursively f rule pred scope state)
                   (apply-rule-1 rule state))))]
    f))

(defn memoize-truthy [f]
  (fn [& args]
    (if-let [result (cache/lookup @!*cache*
                                  [f args])]
      (do
        nil
        ; (reset! !*cache* (cache/hit @!*cache* :apply-rule-1))
        result)
      (let [result (apply f args)]
        (if result
          (reset! !*cache* (cache/miss @!*cache*
                                       [f args]
                                       result)))
        result))))

(defn compose-rules [& orig-rules]
  (let [init-state (->> orig-rules
                        (r/mapcat #(%))
                        (r/reduce assoc! (transient {}))
                        persistent!)]
    (fn
      ([] init-state)
      ([orig-state orig-input]
       (loop [prev-rules nil
              next-rules orig-rules
              [state input] [orig-state orig-input]]
         (if (empty? next-rules)
           [state input]
           (let [result (apply-rule-1 (first next-rules) state input)]
             (if-not (= (second result) input)
               result
               (recur (conj prev-rules (first next-rules))
                      (rest next-rules)
                      result)))))))))

(defmacro window [init-state proj [& arg-list] & body]
  (assert (or (nil? init-state) (map? init-state)))
  (assert (reduce #(and %1 (symbol? %2)) true arg-list))
  (assert (even? (count body)))
  (let [argc (-> arg-list count dec)]
    `(fn
       ([] ~init-state)
       ([state# input#]
        (let [padded-input# (concat input# (repeat nil))
              [~@arg-list] (cons state# (take ~argc padded-input#))]
          (if-let [r# (match (vec (cons state#
                                        (take ~argc (map ~proj padded-input#))))
                             ~@body
                             :else nil)]
            [(or (first r#) state#)
             (concat (rest r#)
                     (drop ~argc input#))]))))))