(ns termcat.bracket
  (:require [clojure.core.match :refer (match)]
            [termcat.util :refer :all]
            [termcat.token :refer (toktype lexeme)]))

(defn bracketed-term [toks]
  [:bracketed toks])

;(def bracket-map {\( \) \[ \] \{ \} :indent :unindent})
;
;(def open-bracket-set (into #{} (keys bracket-map)))
;
;(def close-bracket-set (into #{} (vals bracket-map)))

(defn abstract-brackets
  ([] {:distance 0})
  ([state result tok]
   (condp contains? (toktype tok)
     #{:indent
       :bullet
       :bracket} [{:distance 1
                   :stack (conj (:stack state)
                                (inc (:distance state)))}
                  0
                  tok]
     #{:unindent
       :unbullet
       :unbracket} [{:distance (peek (:stack state))
                     :stack (pop (:stack state))}
                    (:distance state)
                    (bracketed-term (last-n (conj result tok)
                                            (inc (:distance state))))]
     [(update-in state [:distance] inc)
      0
      tok])))