(ns termcat.rewrite
  (require [clojure.core.reducers :as r]
           [clojure.core.match :refer (match)]
           [termcat.util :as u]
           [termcat.rewrite2 :as rw2]))

(defn constant-state [m]
  (fn
    ([] m)
    ([x] m)
    ([x y] x)))

(defmacro defrule [fnname & rdecl]
  ; currently only supports lexical scope
  (assert (symbol? fnname))
  (let [[doc-str rdecl] (if (string? (first rdecl))
                          [(first rdecl) (next rdecl)]
                          ["" rdecl])
        [init-state rdecl] (cond
                             (vector? (first rdecl))
                             [nil rdecl]
                             (= (ffirst rdecl)
                                'constant-state) ; HACK!
                             [(first (rest (first rdecl)))
                              (next rdecl)]
                             :else
                             [{:state :error} (next rdecl)])
        [[& args] rdecl] [(first rdecl) (next rdecl)]
        [arg-mapf rdecl] [(first rdecl) (next rdecl)]
        [auto-recur-test rdecl] [(first rdecl) (next rdecl)]
        auto-recur-test (if (nil? auto-recur-test)
                          '(constantly false)
                          auto-recur-test)
        body rdecl]
    (assert (>= (count args) 2))
    `(def ~fnname ~doc-str
       (-> (rw2/window ~init-state
                       ~arg-mapf
                       [~@args]
                       ~@body)
           rw2/abstract-state
           (rw2/make-recursive ~auto-recur-test
                               ~rw2/lexical-scope)
           ))))

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