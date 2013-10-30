(ns termcat.math
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [clojure.edn :as edn]
            [termcat.term :refer :all]
            [termcat.util :as u]))

(defn number-string? [s]
  (number? (edn/read-string s)))

(defn math-term? [t]
  (match (tt t)
         [:block (_ :guard :math)] true
         :else false))

(defn math-block [frag & keys]
  (let [tag (into #{:math} keys)]
    (block (ldelim tag)
           frag
           (rdelim tag))))

(defn math-cast [t]
  (if (block? t)
      (if (math-term? t)
        [t]
        (concat (if (payload (left t))
                  [(-> t
                       left
                       fragment
                       (math-block :mo))])
                (if (.terms (center t))
                  (math-cast (first (.terms (center t)))))
                (next (.terms (center t)))
                (if (payload (right t))
                  [(-> t
                       right
                       fragment
                       (math-block :mo))])))
    (let [s (str (payload t))]
      (if (number-string? s)
        (-> t
            fragment
            (math-block :mn)
            vector)
        (->> s
             (r/map (partial token :default))
             (r/map fragment)
             (r/map #(math-block % :mi))
             r/foldcat)))))