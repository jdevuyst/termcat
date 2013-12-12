(ns termcat.rules.lambda
  (:require [termcat.term :refer :all]))

(defn apply-fun [fun-token arg-token]
  (let [f (payload fun-token)
        retval (f fun-token arg-token)]
    (if (string? retval)
      [(token :error (str retval " – " (:fun-name (meta f))))]
      retval)))

(defrule evaluate-fun-calls
  [state t1 t2]
  [_ :fun [:block _]] (cons nil (apply-fun t1 t2))
  [_ :fun nil] nil ; Moving the function around may add new args
  [_ :fun _] (-> (concat [nil]
                         (apply-fun t1 nil)
                         [t2])))