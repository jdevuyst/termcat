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

(defrule evaluate-fun-calls
  [state t1 t2]
  tt
  [_ :fun [:block _]] (cons nil (fun/apply-fun t1 t2))
  [_ :fun _] (cons nil (fun/apply-fun t1 nil)))