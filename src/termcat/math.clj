(ns termcat.math
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [clojure.edn :as edn]
            [termcat.term :refer :all]
            [termcat.util :as u]
            [clojure.pprint]))

(defn number-string? [s]
  (try
    (number? (edn/read-string s))
    (catch java.lang.Exception x false)))

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
   (match (tt t)
          :dash [(math-block (fragment t) :mo)]
          :fun [t]
          :text [t]
          :right-quote [t]
          [:block (_ :guard :math)] [t]
          [:block _] (if-let [cur-opts (math-opts t)]
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
          :else (let [s (str (payload t))]
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

(defn math-block? [t]
  (match (tt t)
         [:block (_ :guard :math)] true
         :else false))

(defn math-row-cast [t]
  (-> (if (and (block? t)
               (not (math-block? t)))
        (block (ldelim :math-row-cast)
               (center t)
               (rdelim :math-row-cast))
        t)
      math-cast
      fragmentcat
      (math-block :mrow)))

(defn merge-rows [& ts]
  (as-> ts $
        (mapcat
          #(match (tt %)
                  [:block (_ :guard :mrow)] (.terms (center %))
                  :else [%]) $)
        (fragmentcat $)
        (math-block $ :mrow)))
