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
         rest-args-mapped (map (fn [x] (list fname x))
                               (next args))
         body rdecl
         argc (dec (count args))]
     (assert (>= (count args) 2))
     `(defn ~fnname
             ~doc-str
             ([] {:init ~init-state :length ~argc})
             ([~@args]
              (match [~first-arg ~@rest-args-mapped]
                     ~@body))))))

(defprotocol IRewrite
  (rewrite [coll f]))

(extend-protocol IRewrite
  clojure.lang.IPersistentVector
  (rewrite [coll f]
           (let [{init :init length :length} (f)
                 popc (if length (dec length) 0)]
             (->> (into coll (repeat popc nil))
                  (r/reduce
                    (fn [result v]
                      (let [args (cons (get (meta result) :state)
                                       (conj (u/pad-n result
                                                      popc)
                                             v))
                            [state & xs] (or (apply f args) args)]
                        (with-meta (into (u/pop-upto-n result
                                                       popc)
                                         xs)
                                   {:state state})))
                    (with-meta [] {:state init}))
                  (r/filter (complement nil?))
                  (r/reduce conj [])))))