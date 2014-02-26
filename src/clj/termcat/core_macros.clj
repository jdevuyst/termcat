(ns termcat.core-macros
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [termcat.term :as t]
            [termcat.rewrite :as rw]))

(defmacro with-cache [cache & body]
  `(binding [rw/!*cache* ~cache]
     ~@body))

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
             (concat (next r#)
                     (drop ~argc input#))]))))))

(defmacro defrule [fnname & rdecl]
  (assert (symbol? fnname))
  (let [[doc-str rdecl] (if (string? (first rdecl))
                          [(first rdecl) (next rdecl)]
                          ["" rdecl])
        [init-state rdecl] (if (vector? (first rdecl))
                             [nil rdecl]
                             [(first rdecl) (next rdecl)])
        [[& args] body] [(first rdecl) (next rdecl)]]
    (assert (>= (count args) 2))
    `(def ~fnname ~doc-str
       (-> (window ~init-state
                   t/tt
                   [~@args]
                   ~@body)
           rw/abstraction))))