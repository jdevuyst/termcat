(ns termcat.stage.ast
  (:require [clojure.core.reducers :as r]
            [clojure.core.match :refer (match)]
            [termcat.util :as u]
            [termcat.rewrite :refer :all]
            [termcat.term :refer :all]))

(defn abstract-blocks
  ([] {:distance 0
       :stack nil})
  ([result tok]
   (let [state (meta result)]
     (cond
       (ldelim? tok) (with-meta
                       (conj result tok)
                       {:distance 1
                        :stack (conj (:stack state)
                                     (inc (:distance state)))})
       (rdelim? tok) (let [ldelim (get result (- (count result)
                                                 (:distance state)))]
                       (if (delim-pair? ldelim tok)
                         (with-meta
                           (conj (u/pop-n result (:distance state))
                                 (block ldelim
                                        (fragmentcat (u/last-n result
                                                               (dec (:distance state))))
                                        tok))
                           {:distance (peek (:stack state))
                            :stack (pop (:stack state))})
                         (vary-meta (-> result
                                        (conj (token :error "Delimiter mismatch:"))
                                        (conj tok))
                                    update-in [:distance] (partial + 2))))
       :else (vary-meta (conj result tok)
                        update-in [:distance] inc)))))

(defrule fix-bullet-continuations
  [state t1 t2]
  tt
  [_ [:block :bullet] [:block :indent]] [nil (merge-blocks t1 t2)]
  :else nil)

(defrule convert-newlines-to-whitespace
  [state t1]
  tt
  [_ :newline] [nil (token :whitespace)]
  :else nil)

(defrule remove-superfluous-whitespace
  [state t1 t2]
  tt
  [_ nil (:or :emptyline
              :whitespace)] [nil]
  [_ (:or :emptyline
          :whitespace) nil] [nil]
  :else nil)

(defn s-reduce [fragments f]
  ; This needs to be abstracted better!
  (fragmentcat (r/reduce f
                         (with-meta [] (f))
                         (.terms fragments))))