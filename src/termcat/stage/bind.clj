(ns termcat.stage.bind
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]))

(defrule introduce-bindings
  (fn
    ([] nil)
    ([x] x)
    ([x y] x))
  [state t1 t2 t3 t4]
  tt
  block?
  [_
   :maybe-fun
   :default
   [:block _]
   [:block _]] (if (and (= (payload t1) \!)
                        (= (payload t2) "bind"))
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
                               [t4])))