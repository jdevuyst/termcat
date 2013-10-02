(ns termcat.util
  (:require [clojure.core.reducers :as r]))

(defn last-n [coll n]
  (for [x (range (- (count coll) n) (count coll))]
    (get coll x)))

(defn pop-n [coll n]
  (assert (>= n 0))
  (if (= n 0)
    coll
    (recur (pop coll) (dec n))))

(defn s-reduce [f coll]
  (r/reduce (fn [result v]
              (let [[state popc & vs] (f (meta result) result v)]
                (vary-meta (into (pop-n result popc) vs)
                           merge
                           state)))
            (with-meta [] (try (f)
                            (catch clojure.lang.ArityException x {})))
            coll))

(defn rs-reduce [f rf coll]
  (s-reduce (fn [state result v]
              (f state
                 result
                 (if-let [coll2 (rf v)]
                   [:bracketed (rs-reduce f rf coll2)]
                   v)))
            coll))

; args: state result v
;  ret: state-extention pop-n & vs