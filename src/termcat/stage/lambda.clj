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
   (letfn [(eval-list [x]
                      (if x
                        (try (apply (first x) (next x))
                          (catch clojure.lang.ArityException x
                            [(token :error "arity error")]))))]
     (cond (= (tt term) :fun) [{:call-list [(payload term)]}
                               (into result (eval-list (:call-list state)))]
           (and (:call-list state)
                (block? term)) [{:call-list (conj (:call-list state) term)}
                                result]
           :else [nil (-> result
                          (into (eval-list (:call-list state)))
                          (conj term))]))))