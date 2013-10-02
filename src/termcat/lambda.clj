(ns termcat.lambda
  (:require [clojure.core.match :refer (match)]
            [termcat.util :refer :all]
            [termcat.token :refer :all]))

(defn resolve-name [prefix id]
  (case (str prefix id)
    ".identity" identity
    ".rand" (constantly (token :default (str (rand))))
    (constantly (token :default
                       (str "[No such thing as " prefix id "]")))))

(defn thunk [prefix id]
  [:thunk prefix id (resolve-name prefix id)])

(defn abstract-thunks [state result tok]
  (let [[prevprevprevtok prevprevtok prevtok] (last-n result 3)]
    (match [(toktype prevprevprevtok)
            (toktype prevprevtok)
            (toktype prevtok)
            (toktype tok)]
           [:default _ _ _] [nil 0 tok]
           [_ _ _ :default] [nil 0 tok]
           [_ :maybe-thunk :default _] [nil
                                        2
                                        (thunk (lexeme prevprevtok)
                                               (lexeme prevtok))
                                        tok]
           :else [nil 0 tok])))

(defn apply-funs [state result tok]
  (let [prevtok (last result)]
    (match [(toktype prevtok) (toktype tok)]
           [:thunk :bracketed] [nil
                                1
                                ((last prevtok) tok)]
           :else [nil 0 tok])))