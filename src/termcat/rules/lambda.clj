(ns termcat.rules.lambda
  (:require [termcat.term :refer :all]
            [termcat.rewrite :as rw]
            [termcat.rules.bind :as bind]))

(defn apply-fun [fun-token arg]
  (let [f (payload fun-token)
        retval (f fun-token arg)]
    (if (string? retval)
      [(token :error (str retval " – " (:fun-name (meta f))))]
      retval)))

(defn apply-lambda [lambda-term arg]
  (cond (-> lambda-term rw/unwrap first tt (not= :arg))
        (conj (rw/unwrap lambda-term) arg)

        (not arg)
        [(token :error "Missing (user) function argument(s)")]

        :else
        [(->> (block (ldelim :lambda)
                     (fragmentcat
                       [(token :bang)
                        (token :default "bind")
                        (block (ldelim :arg-name)
                               (-> lambda-term rw/unwrap first fragment)
                               (rdelim :arg-name))
                        arg]
                       (-> lambda-term rw/unwrap next))

                     (rdelim :lambda))
              (rw/apply-rule
                (rw/recursive-procedure
                    (rw/fixpoint
                      (rw/sequence
                        bind/introduce-bindings
                        bind/expand-bindings))
                    block?
                    rw/lexical-scope)))]))

(defn apply-function [fterm arg]
  (case (tt fterm)
    :fun (apply-fun fterm arg)
    [:block :lambda] (apply-lambda fterm arg)))

(defrule evaluate-fun-calls [state t1 t2]
  [_ (:or :fun [:block :lambda]) [:block _]]
  (cons nil (apply-function t1 t2))

  [_ (:or :fun [:block :lambda]) :hash]
  nil

  [_ (:or :fun [:block :lambda]) _]
  (-> (concat [nil]
              (apply-function t1 nil)
              [t2])))