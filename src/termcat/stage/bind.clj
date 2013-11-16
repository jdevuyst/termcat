(ns termcat.stage.bind
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]
            [termcat.fun :as fun]))

(defrule introduce-fun-calls
  [state t1 t2 t3]
  tt
  block?
  [_
   (:or nil :whitespace :newline :emptyline)
   (:or :maybe-fun
        :colon)
   :default]
  [nil t1 (fun/fun-call-head (str (payload t2)
                                  (payload t3)))])

(defrule introduce-bindings
  (fn
    ([] nil)
    ([x] x)
    ([x y] x))
  [state t1 t2 t3 t4 t5]
  tt
  block?
  [_ (:or nil
          :whitespace
          :newline
          :emptyline
          [:block _]) :bang :default [:block _] [:block _]]
  (if (= (payload t3) "bind")
    (let [ts (-> t4
                 center
                 .terms)
          name (as-> (first ts) $
                     (if $ (payload $)))]
      (if (and (= 1 (count ts))
               (or (char? name) (string? name)))
        [(assoc state name (.terms (center t5)))
         t1]
        (token :error
               [state t1
                (apply str
                       "bind: not a valid name — "
                       ts)]))))


  [_ _ _ _ [:block _] _]
  nil

  [_ _ _ :comma _ _]
  (if-let [ts (get state (payload t4))]
    (concat [state t1 t2]
            ts
            [t5]))

  [_ _ _ _ :default [:block _]]
  (if-let [ts (get state (payload t4))]
    (if (= :fun (tt (first ts)))
      (concat [state t1 t2 t3]
              ts
              [t5])))

  [_ _ _ _ :default _]
  (if-let [ts (get state (payload t4))]
    (if-not (= :fun (tt (first ts)))
      (concat [state t1 t2 t3]
              ts
              [t5])))

  [_ _ _ (:or nil
              :whitespace
              :newline
              :emptyline) _ (:or nil
                                 :whitespace
                                 :newline
                                 :emptyline)]
  (if-let [ts (get state (payload t4))]
    (if-not (= :fun (tt (first ts)))
      (concat [state t1 t2 t3]
              ts
              [t5]))))

(defn call-lambda [arg-name fn-body arg-val]
  (-> [(token :bang \!)
       (-> arg-name
           center
           .terms
           first)
       arg-val
       (token :bang \!)
       (token :default "recur")
       (block (ldelim :create-lambda)
              (fragment (token :fun (fun/curry-fun call-lambda 3))
                        arg-name
                        fn-body)
              (rdelim :create-lambda))]
      (fragmentcat (.terms (center fn-body)))
      (rewrite introduce-bindings)
      .terms))

(defrule introduce-lambdas
  [state t1 t2 t3]
  tt
  block?
  [_ _ [:block _] _] nil
  [_ :hash _ [:block _]]
  (if (= (payload t1) \#)
    [nil
     (token :fun (fun/curry-fun call-lambda 3))
     (block (ldelim :introduce-lambdas)
            (fragment t2)
            (rdelim :introduce-lambdas))
     t3]))

(defrule remove-superfluous-whitespace
  [state t1 t2]
  tt
  block?
  [_ (:or nil
          :whitespace
          :newline
          :emptyline) (:or nil
                           :whitespace
                           :newline
                           :emptyline)]
  (if-let [strongest-type (condp #(contains? %2 %1) (hash-set (tt t1) (tt t2))
                            :emptyline :emptyline
                            :newline :newline
                            nil nil ; skip
                            :whitespace :whitespace)]
    [nil t1 t2 (token strongest-type
                      (str (payload t1) (payload t2)))]))