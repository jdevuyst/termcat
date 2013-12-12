(ns termcat.rewrite
  (:refer-clojure :exclude [memoize sequence])
  (:require [clojure.core.reducers :as r]
            [clojure.core.match :refer (match)]))

(defprotocol IWrapped
  (unwrap [orig])
  (rewrap [orig result]))

(extend-protocol IWrapped
  clojure.lang.IPersistentVector
  (unwrap [orig] orig)
  (rewrap [orig result] result))

(def ^:dynamic !*cache*)

(defn cache [] (atom {}))

(defmacro with-cache [cache & body]
  `(binding [!*cache* ~cache]
     ~@body))

(defn memoize [f]
  (fn [& args]
    (if-let [result (get @!*cache* [f args])]
      result
      (let [result (apply f args)]
        (reset! !*cache* (assoc @!*cache* [f args] result))
        result))))

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

(defn apply-rule* [rule state input]
  (or (rule state input)
      [state input]))

(defn apply-rule
  ([rule input] (apply-rule rule (rule) input))
  ([rule state input]
   (let [[state2 input2] (->> input
                              unwrap
                              (apply-rule* rule state))]
     (with-meta (rewrap input input2)
                {:state state2}))))

(def apply-rule (memoize apply-rule))

(defn disjunction [& orig-rules]
  (let [init-state (->> orig-rules
                        (r/mapcat #(%))
                        (r/reduce assoc! (transient {}))
                        persistent!)]
    (fn
      ([] init-state)
      ([orig-state orig-input]
       (loop [next-rules orig-rules
              [state input] [orig-state orig-input]]
         (if (empty? next-rules)
           [state input]
           (let [result (apply-rule* (first next-rules) state input)]
             (if-not (= (second result) input)
               result
               (recur (rest next-rules) result)))))))))

(defn sequence [& orig-rules]
  (let [init-state (->> orig-rules
                        (r/mapcat #(%))
                        (r/reduce assoc! (transient {}))
                        persistent!)]
    (fn
      ([] init-state)
      ([orig-state orig-input]
       (loop [next-rules orig-rules
              [state input] [orig-state orig-input]]
         (if (empty? next-rules)
           [state input]
           (recur (rest next-rules)
                  (apply-rule* (first next-rules) state input))))))))

(defn fixpoint [rule]
  (fn
    ([] (rule))
    ([state input]
     (let [[new-state new-input :as result] (apply-rule* rule state input)]
       (if (= input new-input)
         result
         (recur new-state new-input))))))

(defn recursion [rule pred]
  (letfn [(f ([] (rule))
             ([state input]
              (->> input
                   (r/map #(if (pred %)
                             (apply-rule f %)
                             %))
                   (r/reduce conj! (transient []))
                   persistent!
                   (apply-rule* rule state))))]
    f))

(defn abstraction [rule]
  (fn
    ([] {rule (rule)})
    ([state input]
     (if-let [r (rule (get state rule) input)]
       [(assoc state rule (first r))
        (second r)]))))

(defn procedure [rule]
  (fn
    ([] (rule))
    ([orig-state orig-input]
     (loop [state orig-state
            input (pad-1 orig-input)
            output (transient [])]
       (if (empty? input)
         [state (-> output persistent! trim)]
         (let [[new-state new-input] (apply-rule* rule state input)]
           (recur new-state
                  (rest new-input)
                  (conj! output (first new-input)))))))))

(defn lexical-scope
  ([prev-level-state] prev-level-state)
  ([left-state returned-state] left-state))

(defn flat-scope
  ([prev-level-state] prev-level-state)
  ([left-state returned-state] returned-state))

(defn recursive-procedure [rule pred scope]
  (letfn [(f ([] (rule))
             ([orig-state orig-input]
              (loop [state orig-state
                     input (pad-1 orig-input)
                     output (transient [])]
                (if (empty? input)
                  [state (-> output persistent! trim)]
                  (let [el1 (first input)
                        input (if (pred el1)
                                (cons (apply-rule f (scope state) el1)
                                      (rest input))
                                input)
                        [new-state new-input] (apply-rule* rule state input)]
                    (recur new-state
                           (rest new-input)
                           (conj! output (first new-input))))))))]
    f))

(defn reduction [rule]
  (fn
    ([] (rule))
    ([state input]
     (r/reduce rule [state []] input))))

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
          (if-let [r# (match (->> padded-input#
                                  (r/map ~proj)
                                  (r/take ~argc)
                                  (r/reduce conj [state#]))
                             ~@body
                             :else nil)]
            [(or (first r#) state#)
             (concat (rest r#)
                     (drop ~argc input#))]))))))