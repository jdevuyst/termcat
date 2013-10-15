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
        ([] {:init ~init-state
             :padding ~popc})
        ([~first-arg ~result-arg ~new-el-arg]
         (let [[~@rest-args] (conj (u/pad-n ~result-arg ~popc)
                                   ~new-el-arg)
               ~temp (or (match [~first-arg ~@rest-args-mapped]
                                ~@body)
                         [~first-arg ~@rest-args])]
           (assert (> (count ~temp) 0))
           (concat [(first ~temp) ~popc]
                   (for [~x (range 1 (count ~temp))]
                     (nth ~temp ~x)))))))))

(defprotocol IRewrite
  (rewrite [coll f]))

(extend-protocol IRewrite
  clojure.lang.IPersistentVector
  (rewrite [coll f]
           (let [{init :init padding :padding} (f)]
             (->> (into coll (repeat padding nil))
                  (r/reduce
                    (fn [result v]
                      (let [[state popc & vs] (f (get (meta result) :state)
                                                 result
                                                 v)]
                        (with-meta (into (u/pop-upto-n result
                                                       padding)
                                         vs)
                                   {:state state})))
                    (with-meta [] {:state init}))
                  (r/filter (complement nil?))
                  (r/reduce conj [])))))