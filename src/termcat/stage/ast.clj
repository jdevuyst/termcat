(ns termcat.stage.ast
  (:require [clojure.core.reducers :as r]
            [clojure.core.match :refer (match)]
            [termcat.util :as u]
            [termcat.rewrite :refer :all]
            [termcat.term :refer :all]))

(defn abstract-blocks
  ([] {:init-state {:distance 0 :stack nil}
       :padding-right 1})
  ([state result tok]
   (cond
     (ldelim? tok) [{:distance 1
                     :stack (conj (:stack state)
                                  (inc (:distance state)))}
                    (conj result tok)]
     (rdelim? tok) (let [ldelim (get result (- (count result)
                                               (:distance state)))]
                     (if (delim-pair? ldelim tok)
                       [{:distance (peek (:stack state))
                         :stack (pop (:stack state))}
                        (conj (u/pop-n result (:distance state))
                              (block ldelim
                                     (fragmentcat (u/last-n result
                                                            (dec (:distance state))))
                                     tok))]
                       [(update-in state [:distance] inc)
                        (conj result tok)]))
     :else [(update-in state [:distance] inc)
            (conj result tok)])))

(defrule introduce-delim-errors
  [state t1]
  tt
  block?
  [_ [(:or :ldelim :rdelim) _]] [nil (token :error (payload t1))])

(defrule fix-bullet-continuations
  [state t1 t2]
  tt
  block?
  [_ [:block :bullet] [:block :indent]] [nil (merge-blocks t1 t2)])

(defrule convert-newlines-to-whitespace
  [state t1]
  tt
  block?
  [_ :newline] [nil (token :whitespace)])

(defrule remove-superfluous-whitespace
  [state t1 t2]
  tt
  block?
  [_ (:or nil
          :emptyline
          [:block :indent]
          [:block :bullet]) :whitespace] [nil t1]
  [_ :whitespace (:or nil
                      :emptyline
                      [:block :indent]
                      [:block :bullet])] [nil t2])