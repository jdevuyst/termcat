(ns termcat.math
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [clojure.edn :as edn]
            [termcat.term :refer :all]
            [termcat.util :as u]))

(defn number-string? [s]
  (try
    (number? (edn/read-string s))
    (catch java.lang.NumberFormatException x false)))

(defn math-opts [t]
  (match (tt t)
         [:block (x :guard :math)] x
         :else false))

(defn math-block [frag & keys]
  (let [tag (into #{:math} keys)]
    (block (ldelim tag)
           frag
           (rdelim tag))))

(defn math-cast
  ([t] (math-cast t nil))
  ([t opts]
   (if (block? t)
     (if-let [cur-opts (math-opts t)]
       [(block (ldelim (into cur-opts opts))
               (center t)
               (rdelim (into cur-opts opts)))]
       (concat (if (payload (left t))
                 [(-> t
                      left
                      fragment
                      (math-block :mo))])
               (if (.terms (center t))
                 (math-cast (first (.terms (center t)))
                            opts))
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
              (r/map #(apply math-block % :mi opts))
              r/foldcat))))))