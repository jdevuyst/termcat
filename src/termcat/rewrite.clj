(ns termcat.rewrite
  (require [clojure.core.reducers :as r]
           [clojure.core.match :refer (match)]
           [termcat.util :as u]))

(defmacro defrule
  ([fnname & rdecl]
   (assert (symbol? fnname))
   (let [[doc-str rdecl] (if (string? (first rdecl))
                           [(first rdecl) (next rdecl)]
                           ["" rdecl])
         [init-state rdecl] (if (map? (first rdecl))
                              [(first rdecl) (next rdecl)]
                              [nil rdecl])
         [[& args] rdecl] [(first rdecl) (next rdecl)]
         [fname rdecl] [(first rdecl) (next rdecl)]
         first-arg (first args)
         rest-args (next args)
         rest-args-mapped (map (fn [x] (list fname x))
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
         (let [[~@rest-args] (conj (u/pad-n ~result-arg ~popc)
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
  (rewrite [coll f]))

(extend-protocol IRewrite
  clojure.lang.IPersistentVector
  (rewrite [coll f]
           (assert (= (keys (f)) '(:init-state :padding-right)))
           (let [{init-state :init-state padding-right :padding-right} (f)]
             (->> (into coll (repeat padding-right nil)) ; right padding
                  (r/reduce
                    (fn [result v]
                      (let [[state new-result] (f (get (meta result) :state)
                                                  result
                                                  v)]
                        (with-meta new-result
                                   {:state state})))
                    (with-meta [] {:state init-state}))
                  (r/filter (complement nil?))
                  (r/reduce conj [])))))