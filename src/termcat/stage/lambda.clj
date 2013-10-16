(ns termcat.stage.lambda
  (:require [clojure.core.match :refer (match)]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]
            [termcat.fun :as fun]))

(defrule introduce-fun-calls
  [state t1 t2]
  tt
  [_ :maybe-fun :default] [nil (fun/fun-call-head (str (payload t1)
                                                       (payload t2)))])

(defn evaluate-fun-calls
  ([] {:init-state nil
       :padding-right 1})
  ([state result term]
   (let [call-l (:call-list state)
         eval-list (fn [x]
                     (if x
                       (try (apply (first x) (next x))
                         (catch clojure.lang.ArityException x
                           [(token :error "arity error")]))))]
     (cond (= (tt term) :fun) [{:call-list [(payload term)]}
                               (into result (eval-list call-l))]
           (and call-l
                (block? term)
                (or (= (count call-l) 1)
                    (= (dt (left term))
                       (dt (left (second call-l)))))) [{:call-list (conj call-l term)}
                                                       result]
           :else [nil (-> result
                          (into (eval-list call-l))
                          (conj term))]))))