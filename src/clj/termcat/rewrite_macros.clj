(ns termcat.rewrite-macros
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
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