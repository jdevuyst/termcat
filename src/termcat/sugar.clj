(ns termcat.sugar
  (:require [clojure.core.match :refer (match)]
            [termcat.util :refer :all]
            [termcat.token :refer (token toktype lexeme)]
            [termcat.html :refer (html)]
            [termcat.lambda :refer (resolve-fun)]))

(defn funcall [fname & args]
  (concat (resolve-fun fname)
          (for [arg args]
            [:bracketed (concat [(token :open-bracket)]
                                arg
                                [(token :close-bracket)])])))

(defn subst-emptylines [state result tok]
  (if (= (toktype tok) :emptyline)
    (concat [nil 0] (funcall ".par"))
    [nil 0 tok]))

(defn rewrite-hashlines [state result tok]
  (let [prevtok (last result)]
    (match [(cond (empty? state) nil
                  (nil? (:length state)) :at-start
                  :else :in-title)
            (toktype prevtok)
            (toktype tok)]
           [_ :emptyline :maybe-title] [{:title-level 1} 1 tok]
           [:at-start _ :maybe-title] [(update-in state [:title-level] inc)
                                       0
                                       tok]
           [:at-start _ :whitespace] [(assoc state :length 0) 0 tok]
           [:in-title _ :emptyline] (concat
                                      [nil (+ 1
                                              (:title-level state)
                                              (:length state))]
                                      (funcall ".title"
                                               [(token :default
                                                       (str (:title-level state)))]
                                               (last-n result
                                                       (:length state)))
                                      [tok])
           [:in-title _ _] [(update-in state [:length] inc) 0 tok]
           [_ _ _] [nil 0 tok])))

