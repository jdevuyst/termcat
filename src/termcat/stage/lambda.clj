(ns termcat.stage.lambda
  (:require [clojure.core.match :refer (match)]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]))

(defn apply-fun [fun-token arg-token]
  (let [f (payload fun-token)
        retval (f fun-token arg-token)]
    (if (string? retval)
      [(token :error (str retval " – " (:fun-name (meta f))))]
      retval)))

(defrule evaluate-fun-calls
  [state t1 t2]
  tt
  block?
  [_ :fun [:block _]] (cons nil (apply-fun t1 t2))
  [_ :fun (:or :whitespace :newline :emptyline)] ; not on nil!
  (-> (concat [nil]
              (apply-fun t1 nil)
              [t2])))