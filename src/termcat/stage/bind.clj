(ns termcat.stage.bind
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]
            [termcat.fun :as fun]))

(defrule introduce-fun-calls
  [state t1 t2]
  tt
  block?
  [_ :maybe-fun :default] [nil (fun/fun-call-head (str (payload t1)
                                                       (payload t2)))])

(defrule introduce-bindings
  (fn
    ([] nil)
    ([x] x)
    ([x y] x))
  [state t1 t2 t3 t4]
  tt
  block?
  [_
   :bang
   :default
   [:block _]
   [:block _]] (if (= (payload t2) "bind")
                 (case (count (.terms (center t3)))
                   0 [state
                      (token :error "Binding identifier missing")]
                   1 [(assoc
                        state
                        (-> t3
                            center
                            .terms
                            first
                            payload)
                        (-> t4
                            center
                            .terms))]
                   [state (token :error "Malformed binding identifier")]))
  [_ _ _ [:block _] _] nil
  [_
   _
   (:or nil
        :whitespace
        :newline
        :emptyline)
   _
   (:or nil
        :whitespace
        :newline
        :emptyline)] (if-let [ts (get state (payload t3))]
                       (concat [state t1 t2]
                               ts
                               [t4]))
  [_
   _
   _
   (:or nil
        :whitespace
        :newline
        :emptyline)
   (:or nil
        :whitespace
        :newline
        :emptyline)] (if-let [strongest-type (if (= (tt t3) (tt t4))
                                               (tt t3)
                                               (condp #(contains? %2 %1) (hash-set (tt t3) (tt t4))
                                                 :emptyline :emptyline
                                                 :newline :newline
                                                 nil nil ; skip
                                                 :whitespace :whitespace))]
                       [state t1 t2 (token strongest-type
                                           (str (payload t3)
                                                (payload t4)))]))

(defn create-lambda [arg-name fn-body]
  (token :fun
         (fun/unary-fun
           [arg-val]
           (.terms (rewrite (fragmentcat
                              [(token :bang \!)
                               (token :default "bind")
                               (block (ldelim :create-lambda)
                                      (fragment arg-name)
                                      (rdelim :create-lambda))
                               arg-val]
                              (.terms (center fn-body)))
                            introduce-bindings)))))

(defrule introduce-lambdas
  [state t1 t2 t3 t4]
  tt
  block?
  [_ (:or :whitespace nil) :hash :default [:block _]]
  (if (= (payload t2) \#)
    [nil t1 (create-lambda t3 t4)]))