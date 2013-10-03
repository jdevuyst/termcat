(ns termcat.lambda
  (:require [clojure.core.match :refer (match)]
            [termcat.util :refer :all]
            [termcat.token :refer :all]
            [termcat.html :refer (html)]))

(defn fun [f]
  [:fun (fn [x] (f (rest (pop x))))])

(defn resolve-fun
  ([prefix id] (resolve-fun (str prefix id)))
  ([fname]
   (case fname
     ".par" [(html "\n<p>\n")]
     ".title" [(fun (fn [x]
                          [(fun (fn [y] (concat [(html "\n<h1>")]
                                                y
                                                [(html "</h1>\n")])))]))]
     ".bullet-list" [(fun (fn [body]
                            (concat [(html "\n<ul>")]
                                    (s-reduce (fn [state result tok]
                                                (case (toktype tok)
                                                  :maybe-magic [nil 0 (html "\n<li>")]
                                                  :whitespace [nil 0]
                                                  :bracketed (concat [nil 0]
                                                                     (do
                                                                       (println :test (second tok))
                                                                       (rest (pop (second tok)))))))
                                              body)
                                    [(html "</ul>\n")])))]
     ".blockquote" [(fun (fn [body]
                           (concat [(html "\n<blockquote>")]
                                   body
                                   [(html "</blockquote>\n")])))]
     ".identity" [(fun identity)]
     ".rand" [(token :default (str (rand)))]
     [(html "<span class='error'>")
      (token :default (str "Uknown function -- " fname))
      (html "</span>")])))

(defn abstract-funs [state result tok]
  (let [[prevprevprevtok prevprevtok prevtok] (last-n result 3)]
    (match [(toktype prevprevprevtok)
            (toktype prevprevtok)
            (toktype prevtok)
            (toktype tok)]
           [:default _ _ _] [nil 0 tok]
           [_ _ _ :default] [nil 0 tok]
           [_ :maybe-fun :default _] (concat [nil 2]
                                             (resolve-fun (lexeme prevprevtok)
                                                          (lexeme prevtok))
                                             [tok])
           :else [nil 0 tok])))

(defn apply-funs [state result tok]
  (let [prevtok (last result)]
    (match [(toktype prevtok) (toktype tok)]
           [:fun :bracketed] (concat [nil 1]
                                     ((second prevtok) (second tok)))
           :else [nil 0 tok])))