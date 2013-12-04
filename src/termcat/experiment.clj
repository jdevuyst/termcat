(ns termcat.experiment
  (:require [termcat.rewrite2 :as rw]
            [termcat.rewrite :refer (defrule)]
            [termcat.term :refer :all]))

(def t (block (ldelim :delim)
              (fragment (token :error "a")
                        (token :default "b")
                        (block (ldelim :delim2)
                               (fragment (token :default "c")
                                         (token :default "d")
                                         (token :default "e"))
                               (rdelim :delim2))
                        (token :default "f"))
              (rdelim :delim)))

(defn f
  ([] {})
  ([state input]
     (println :first (first input))
   (if (token? (first input))
     [state (cons (->> input
                       first
                       payload
                       .toUpperCase
                       (token :default))
                (next input))])))

(println (macroexpand
'(defrule g
  [state t1 t2]
  tt
  block?
  [_ :error _] [nil (token :default (payload t2))])))

(defrule g
  [state t1 t2]
  tt
  block?
  [_ :error _] [nil (token :moo (payload t2))])

(println
  (rw/with-cache
    rw/empty-cache
    (rw/apply-rules
      [;(rw/make-recursive f block? rw/lexical-scope)
       g
       ]
      t)))