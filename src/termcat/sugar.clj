(ns termcat.sugar
  (:require [clojure.core.match :refer (match)]
            [termcat.util :refer :all]
            [termcat.token :refer (token toktype lexeme)]
            [termcat.html :refer (html)]
            [termcat.bracket :as br]
            [termcat.lambda :refer (resolve-fun)]))

(defn funcall [fname & args]
  (concat (resolve-fun fname)
          (for [arg args]
            [:bracketed (concat [(token :open-bracket)]
                                arg
                                [(token :close-bracket)])])))

(defn subst-emptylines [state result tok]
  (if (= (toktype tok) :emptyline)
    (concat [nil 0] (funcall ":par"))
    [nil 0 tok]))

(defn subst-hashlines [state result tok]
  (let [prevtok (last result)]
    (match [(cond (empty? state) nil
                  (nil? (:length state)) :at-start
                  :else :in-title)
            (toktype prevtok)
            (toktype tok)]
           [_ nil :maybe-title] [{:title-level 1} 0 tok]
           [_ :emptyline :maybe-title] [{:title-level 1} 1 tok]
           [:at-start _ :maybe-title] [(update-in state [:title-level] inc)
                                       0
                                       tok]
           [:at-start _ :whitespace] [(assoc state :length 0) 0 tok]
           [:in-title _ :emptyline] (concat
                                      [nil (+ 1
                                              (:title-level state)
                                              (:length state))]
                                      (funcall ":title"
                                               [(token :default
                                                       (str (:title-level state)))]
                                               (last-n result
                                                       (:length state)))
                                      [tok])
           [:in-title _ _] [(update-in state [:length] inc) 0 tok]
           [_ _ _] [nil 0 tok])))

(defn blocktype [term]
  (cond (and (= (toktype term) :bracketed)
             (= (toktype (first (second term))) :indent)) :block
        (and (= (toktype term) :bracketed)
             (= (toktype (first (second term))) :bullet)) :bullet-item
        :else (toktype term)))

(defn merge-bracketed [b1 b2]
  (assert (= :bracketed (toktype b1) (toktype b2)))
  (println :merge)
  (println :b1 (pop (lexeme b1)))
  (println :b2 (rest (pop (lexeme b2))))
  (br/bracketed-term (apply vector (concat (pop (lexeme b1) )
                                           (rest (pop (lexeme b2)))
                                           [(peek (lexeme b1))]))))

(defn subst-bullet-continuations [state result tok]
  (if (= "consist" (lexeme tok))
    (println (last-n result 4)))

  (let [prevtok (last result)]
    (match [(blocktype (last result))
            (blocktype tok)]
           [:bullet-item :block] [nil 1 (merge-bracketed prevtok tok)]
           :else [nil 0 tok])))

(defn subst-bullets [state result tok]
  (match [(nil? state) (blocktype tok)]
         [true :bullet-item] [{:distance 1} 0 tok]
         [false :bullet-item] [(update-in state [:distance] inc) 0 tok]
         [false _] (concat [nil
                            (:distance state)]
                           (funcall ":bullet-list"
                                    [(token :default (str (:distance state)))])
                           (last-n result (:distance state))
                           [tok])
         :else [nil 0 tok]))

(defn subst-indents [state result tok]
    (if (= (blocktype tok) :block)
      (concat [nil 0]
              (funcall ":blockquote" (second tok)))
      [nil 0 tok]))

(defn subst-decorators [state result tok]
  (let [[prevprevtok prevtok] (last-n result 2)]
    (match [(lexeme prevprevtok)
            (toktype prevtok)
            (lexeme tok)]
           ["*" :default "*"] (concat [nil 2]
                                      (funcall ":emph" [prevtok]))
           ["**" :default "**"] (concat [nil 2]
                                        (funcall ":strong" [prevtok]))
           ["_" :default "_"] (concat [nil 2]
                                      (funcall ":u" [prevtok]))
           :else [nil 0 tok])))