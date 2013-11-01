(ns termcat.rewrite
  (require [clojure.core.reducers :as r]
           [clojure.core.match :refer (match)]
           [termcat.util :as u]))

(defn constant-state [m]
  (fn
    ([] m)
    ([x] m)
    ([x y] x)))

(defmacro defrule
  ; refactor:
  ; - use function shift for getting elements from rdecl
  ; - use syntax symb# for variable names
  ; - use tt/block? as defaults for arg-mapf/auto-recur-test
  ([fnname & rdecl]
   (assert (symbol? fnname))
   (let [[doc-str rdecl] (if (string? (first rdecl))
                           [(first rdecl) (next rdecl)]
                           ["" rdecl])
         [state-fn rdecl] (if (vector? (first rdecl))
                            [(fn
                               ([] nil)
                               ([x] nil)
                               ([x y] x))
                             rdecl]
                            [(first rdecl) (next rdecl)])
         [[& args] rdecl] [(first rdecl) (next rdecl)]
         [arg-mapf rdecl] [(first rdecl) (next rdecl)]
         [auto-recur-test rdecl] [(first rdecl) (next rdecl)]
         auto-recur-test (if (nil? auto-recur-test)
                           '(constantly false)
                           auto-recur-test)
         first-arg (first args)
         rest-args (next args)
         rest-args-mapped (map (fn [x] (list arg-mapf x))
                               rest-args)
         body rdecl
         popc (- (count args) 2)]
     (assert (>= (count args) 2))
     `(defn ~fnname
        ~doc-str
        ([] {:state-fn ~state-fn
             :padding-right ~popc})
        ([~first-arg result-arg# new-el-arg#]
         (let [[~first-arg new-el-arg#] (if (~auto-recur-test new-el-arg#)
                                          (let [r# (rewrite new-el-arg#
                                                            (fn
                                                              ([] {:state-fn (fn ([] (~state-fn ~first-arg)))
                                                                   :padding-right ~popc})
                                                              ([& xs#] (apply ~fnname xs#))))]
                                            [(~state-fn ~first-arg (:state (meta r#)))
                                             r#])
                                          [~first-arg new-el-arg#])
               [~@rest-args] (conj (u/pad-n result-arg# ~popc)
                                   new-el-arg#)
               temp# (or (match [~first-arg ~@rest-args-mapped]
                                ~@body
                                :else nil)
                         [~first-arg ~@rest-args])]
           (assert (> (count temp#) 0))
           [(first temp#)
            (-> result-arg#
                (u/pop-upto-n ~popc)
                (into (next temp#)))]))))))

(defprotocol IRewrite
  (rewrite [coll rule]))

(extend-protocol IRewrite
  clojure.lang.IPersistentVector
  (rewrite [coll rule]
           (assert (= (set (keys (rule))) #{:state-fn :padding-right}))
           (let [{state-fn :state-fn
                  padding-right :padding-right} (rule)
                 [new-state new-acc] (->> (r/cat coll (vec (repeat padding-right nil))) ; right padding2
                                          (r/reduce (fn [[state acc] v]
                                                      (rule state acc v))
                                                    [(state-fn) []]))]
             (with-meta (->> new-acc
                             (r/filter (complement nil?))
                             (r/reduce conj []))
                        {:state new-state}))))



