(ns termcat.rewrite2
  (:require [clojure.core.reducers :as r]
            [clojure.core.match :refer (match)]
            [clojure.core.cache :as cache]
            [taoensso.timbre :as timbre]))

(timbre/refer-timbre)
(require '[taoensso.timbre.profiling :as profiling :refer (p)])

(def ^:dynamic !*cache*)

(def empty-cache (cache/basic-cache-factory {}))

(defmacro with-cache [cache & body]
  `(binding [!*cache* (atom ~cache)]
     (profile
       :info :Arithmetic
       (-> (do ~@body)
           (vector @!*cache*)))))

(defn memoize [f]
  (fn [& args]
    (p :memoize
       (if-let [result (p :cache-lookup (cache/lookup
                                          @!*cache*
                                          [f args]))]
         (do
           (p :cache-hit nil)
           ; (reset! !*cache* (cache/hit @!*cache* :apply-rule-1))
           result)
         (let [result (apply f args)]
           (p :cache-miss
              (reset! !*cache* (cache/miss
                                 @!*cache*
                                 [f args]
                                 result))
              result))))))

(def apply-rule-1
  (identity (p :apply-rule-1 (fn [rule state input]
                               (or (rule state input)
                                   [state input])))))

(defprotocol IWrapped
  (unwrap [orig])
  (rewrap [orig result]))

(extend-protocol IWrapped
  clojure.lang.IPersistentVector
  (unwrap [orig] orig)
  (rewrap [orig result] result))

(def apply-rule
  (memoize (fn
             ([rule orig-input] (apply-rule rule (rule) orig-input))
             ([rule state orig-input]
              (p :apply-rule
                 (loop [state state
                        input (unwrap orig-input)
                        output (transient [])]
                   (if (empty? input)
                     (rewrap orig-input (persistent! output))
                     (let [[new-state new-input] (apply-rule-1 rule state input)]
                       (if (p :apply-rule-test-eq
                              (= input new-input))
                         (recur new-state
                                (rest input)
                                (conj! output (first input)))
                         (recur new-state ; or state?
                                new-input
                                output))))))))))

(defn apply-rules [rules input]
  (r/reduce #(apply-rule %2 %1)
            input
            rules))

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
                   (p :recursive-apply-rule
                      (apply-rule f (scope rule state %) %))
                   %))))))

(defn make-recursive [rule pred scope]
  (letfn [(f ([] (rule))
             ([state input]
              (->> input
                   ; (map #(if (pred %)
                   ;         (p :recursive-apply-rule
                   ;            (apply-rule f (scope rule state %) %))
                   ;         %))
                   (apply-rule-recursively f rule pred scope state)
                   (apply-rule-1 rule state))))]
    f))

(defn memoize-truthy [f]
  (fn [& args]
    (if-let [result (p :cache-lookup (cache/lookup
                                       @!*cache*
                                       [f args]))]
      (do
        (p :truthy-hit nil)
        ; (reset! !*cache* (cache/hit @!*cache* :apply-rule-1))
        result)
      (let [result (apply f args)]
        (if result
          (p :truthy-store
             (reset! !*cache* (cache/miss
                                @!*cache*
                                [f args]
                                result))))
        (do
          (p
            :truthy-miss
            result))))))

; (defn fast= [x y]
;   (comment memoize-truthy
;     (fn [x y]
;       (p :run-fast= nil)
;              (assert (sequential? x))
;              (assert (sequential? y))
;              (or (and (empty? x)
;                       (empty? y))
;                  (and (= (first x)
;                          (first y))
;                       (fast= (rest x)
;                              (rest y))))))
;   (and (= (count x) (count y))
;        (x y)))

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
             ; (if (not (some #(not= (apply-rule-1 % orig-state (second result))
             ;                               result)
             ;                        prev-rules))
             ;   (recur (conj prev-rules (first next-rules))
             ;          (rest next-rules)
             ;          result)
             ;   (recur nil orig-rules [orig-state (second result)]))
             (if-not (p :compose-rules-test-eq
                        (= (second result) input))
               (recur nil orig-rules result) ; or [state (second result)]?
               (recur (conj prev-rules (first next-rules))
                      (rest next-rules)
                      result)))))))))

(defn pad [l] (concat l (comment repeat nil)))

(defmacro window [init-state proj [& arg-list] & body]
  (assert (or (nil? init-state) (map? init-state)))
  (assert (reduce #(and %1 (symbol? %2)) true arg-list))
  (assert (even? (count body)))
  (let [argc (-> arg-list count dec)]
    `(fn
       ([] ~init-state)
       ([state# input#]
        (let [[~@arg-list] (cons state# (take ~argc (pad input#)))]
          (if-let [r# (match (vec (cons state#
                                        (take ~argc (map ~proj (pad input#)))))
                             ~@body
                             :else nil)]
            (do
              (comment when (= :percent (~proj (first input#)))
                ;comment when (not= (take ~argc (pad input#)) (rest r#))
                (println "state" state#)
                (println "<=" (map ~proj (take ~argc input#)))
                (println "=>" (map ~proj (rest r#))))

              [(or (first r#) state#)
               (concat (rest r#)
                       (drop ~argc input#))])))))))

; (defn trace [x]
;   (println "Trace" x)
;   x)

; (defn remove-dups [input]
;   (if (= (first input) (second input))
;     (rest input)))

; (defn abstract-dups [input]
;   (if (= (first input) (second input))
;     (cons [(first input) (second input)]
;           (drop 2 input))))


; (time (println
;         (apply-rules [abstract-dups
;                       remove-dups
;                       ] [ 1 1 2 3 4 4 5 5 5 5  6 7])))

; (defn mul [input]
;   (if (and (<= 3 (count input))
;            (= '* (second input)))
;     (cons (* (first input) (nth input 2))
;           (drop 3 input))))

; (defn add [input]
;   (if (and (<= 3 (count input))
;            (= '+ (second input)))
;     (cons (+ (first input) (nth input 2))
;           (drop 3 input))))

; (time (println
;         (apply-rules [(compose-rules mul
;                                      add)
;                       ] [ 1 '+ 2 '* 3])))

; (defn count-elements
;   ([] {:count 0})
;   ([state input]
;    (if-not (empty? input)
;      [(update-in state [:count] inc)
;       input]
;      [state input])))

; (defn delete-odd-numbers
;   ([] {})
;   ([state input]
;    [state
;     (if (and (number? (first input))
;              (odd? (first input)))
;       (rest input)
;       input)]))

; (defn return-count
;   ([] {})
;   ([state input]
;    (cond (empty? input)
;          [state input]
;          (sequential? (first input))
;          [state input]
;          :else
;          [state (cons (:count state)
;                       (rest input))])))

; (comment time
;   (println
;     (with-cache
;       empty-cache
;       (apply-rules [
;                     (-> (compose-rules count-elements
;                                        ; delete-odd-numbers
;                                        return-count)
;                         (make-recursive sequential? lexical-scope))
;                     ]
;                    [10 11 12 13 [14 15 16 17 [18 [19 [20 21 [22 [23]]]]]]]))))