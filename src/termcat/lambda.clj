(ns termcat.lambda
  (:require [clojure.core.match :refer (match)]
            [termcat.util :refer :all]
            [termcat.token :refer :all]
            [termcat.html :refer (html)]))

(defn as-int [terms]
  ; placeholder hack!
  (read-string (lexeme (first terms))))

(defn fun [f]
  [:fun (fn [x] (f (rest (pop x))))])

(defn fun2 [f]
  [:fun (fn [x] (f (drop 3 x)))])

(defn resolve-fun
  ([prefix id] (resolve-fun (str prefix id)))
  ([fname]
   (case fname
     ":par" [(html "<p>")]
     ":title" [(fun (fn [x]
                      [(fun (fn [y] (concat [(html "<h1>")]
                                            y
                                            [(html "</h1>")])))]))]
     ":bullet-list" (letfn [(more [x]
                                  (fn [y] (concat [(html "<li>")]
                                                  y
                                                  (if (> x 1)
                                                    [(fun2 (more (dec x)))]
                                                    [(html "</ul>")]))))]
                      [(fun (fn [body]
                              (concat [(html "<ul>")]
                                      [(fun2 (more (as-int body)))])))])
     ":blockquote" [(fun (fn [body]
                           (concat [(html "<blockquote>")]
                                   body
                                   [(html "</blockquote>")])))]
     ":emph" [(fun (fn [text]
                     (concat [(html "<emph>")]
                             text
                             [(html "</emph>")])))]
     ":strong" [(fun (fn [text]
                       (concat [(html "<strong>")]
                               text
                               [(html "</strong>")])))]
     ":u" [(fun (fn [text]
                  (concat [(html "<u>")]
                          text
                          [(html "</u>")])))]
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
           [:fun _] [nil
                     1
                     (html "<span class='error'>")
                     (token :default (str "Missing argument"))
                     (html "</span>")
                     tok]
           :else [nil 0 tok])))