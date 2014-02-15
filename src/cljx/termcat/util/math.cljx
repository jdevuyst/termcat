(ns termcat.util.math
  #+cljs (:require-macros [cljs.core.match.macros :refer (match)])
  (:require #+clj [clojure.core.match :refer (match)]
            #+cljs [cljs.core.match]
            [#+clj clojure.edn #+cljs cljs.reader :as edn]
            [clojure.core.reducers :as r]
            [termcat.rewrite :as rw]
            [termcat.term :as t]))

(defn number-string? [s]
  (try
    (number? (edn/read-string s))
    (catch java.lang.Exception x false)))

(defn math-opts [t]
  (match (t/tt t)
         [:block (x :guard :math)] x
         :else false))

(defn math-block [frag & keys]
  (let [tag (into #{:math} keys)]
    (t/block (t/ldelim tag)
             frag
             (t/rdelim tag))))

(defn math-cast
  ([t] (math-cast t nil))
  ([t opts]
   (match (t/tt t)
          :dash [(math-block (t/fragment t) :mo :prefix)]
          :fun [t]
          :text [t]
          :right-quote [t]
          [:block (_ :guard :math)] [t]
          [:block _] (if-let [cur-opts (math-opts t)]
                       [(t/block (t/ldelim (into cur-opts opts))
                                 (t/center t)
                                 (t/rdelim (into cur-opts opts)))]
                       (concat (if (t/payload (t/left t))
                                 [(-> t
                                      t/left
                                      t/fragment
                                      (math-block :mo))])
                               (if (rw/unwrap t)
                                 (math-cast (first (rw/unwrap t))
                                            opts))
                               (next (rw/unwrap t))
                               (if (t/payload (t/right t))
                                 [(-> t
                                      t/right
                                      t/fragment
                                      (math-block :mo))])))
          :else (let [s (str (t/payload t))]
                  (if (number-string? s)
                    (-> t
                        t/fragment
                        (math-block :mn)
                        vector)
                    (->> s
                         (r/map (partial t/token :default))
                         (r/map t/fragment)
                         (r/map #(apply math-block % :mi opts))
                         r/foldcat))))))

(defn math-block? [t]
  (match (t/tt t)
         [:block (_ :guard :math)] true
         :else false))

(defn math-row-cast [t]
  (-> (if (and (t/block? t)
               (not (math-block? t)))
        (t/block (t/ldelim :math-row-cast)
                 (t/center t)
                 (t/rdelim :math-row-cast))
        t)
      math-cast
      t/fragmentcat
      (math-block :mrow)))

(defn merge-rows [sep & ts]
  (as-> ts $
        (map
          #(match (t/tt %)
                  [:block (_ :guard :mrow)] (rw/unwrap %)
                  :else [%]) $)
        ; (interpose [sep] $) ; broken. puts sep between parentheses and identifiers
        (apply concat $)
        (t/fragmentcat $)
        (math-block $ :mrow)))
