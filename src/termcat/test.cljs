(ns termcat.rewrite
  (require [clojure.core.reducers :as r]
           [clojure.core.match :refer (match)]
           [termcat.util :as u]))

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
         [init-state rdecl] (if (map? (first rdecl))
                              [(first rdecl) (next rdecl)]
                              [nil rdecl])
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
         popc (- (count args) 2)
         result-arg (gensym 'result-arg)
         new-el-arg (gensym 'new-el-arg)
         temp (gensym 'temp)
         x (gensym 'x)]
     (assert (>= (count args) 2))
     `(defn ~fnname
        ~doc-str
        ([] {:init-state ~init-state
             :padding-right ~popc})
        ([~first-arg ~result-arg ~new-el-arg]
         (let [~new-el-arg (if (~auto-recur-test ~new-el-arg)
                             (rewrite ~new-el-arg ~fnname)
                             ~new-el-arg)
               [~@rest-args] (conj (u/pad-n ~result-arg ~popc)
                                   ~new-el-arg)
               ~temp (or (match [~first-arg ~@rest-args-mapped]
                                ~@body
                                :else nil)
                         [~first-arg ~@rest-args])]
           (assert (> (count ~temp) 0))
           [(first ~temp)
            (-> ~result-arg
                (u/pop-upto-n ~popc)
                (into (next ~temp)))]))))))

(defprotocol IRewrite
  (rewrite [coll rule]))

(extend-protocol IRewrite
  clojure.lang.IPersistentVector
  (rewrite [coll rule]
           (assert (= (keys (rule)) '(:init-state :padding-right)))
           (let [{init-state :init-state
                  padding-right :padding-right} (rule)]
             (->> (r/cat coll (vec (repeat padding-right nil))) ; right padding2
                  (r/reduce
                    (fn [result v]
                      (let [[state new-result] (rule (:state (meta result))
                                                     result
                                                     v)]
                        (with-meta new-result
                                   {:state state})))
                    (with-meta [] {:state init-state}))
                  (r/filter (complement nil?))
                  (r/reduce conj [])))))