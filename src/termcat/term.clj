(ns termcat.term
  (:require [clojure.core.reducers :as r]
            [termcat.rewrite :refer :all]))

(defprotocol ITerm
  (tt [this]))

(defprotocol IToken
  (payload [this]))

(defprotocol IFragment
  (as-int [this]))

(defprotocol IBlock
  (left [this])
  (center [this])
  (right [this]))

(defrecord Token [tag payload])

(defrecord Fragment [terms])

(defrecord Block [left center right])

(defn token? [x]
  (= (type x) Token))

(defn ldelim? [x]
  (and (token? x)
       (vector? (tt x))
       (= (first (tt x))
          :ldelim)))

(defn rdelim? [x]
  (and (token? x)
       (vector? (tt x))
       (= (first (tt x))
          :rdelim)))

(defn delim? [x]
  (or (ldelim? x)
      (rdelim? x)))

(defn dt [x]
  (assert (delim? x))
  (second (tt x)))

(defn delim-pair? [x y]
  (and (ldelim? x)
       (rdelim? y)
       (= (dt x)
          (dt y))))

(defn fragment? [x]
  (= (type x) Fragment))

(defn block? [x]
  (= (type x) Block))

(defn token
  ([tag] (token tag nil))
  ([tag payload]
   (assert (not (nil? tag)))
   (Token. tag payload)))

(defn ldelim-t [tag]
  [:ldelim tag])

(defn rdelim-t [tag]
  [:rdelim tag])

(defn ldelim
  ([tag] (ldelim tag nil))
  ([tag symb] (token (ldelim-t tag) symb)))

(defn rdelim
  ([tag] (rdelim tag nil))
  ([tag symb] (token (rdelim-t tag) symb)))

(defn fragmentcat
  ([terms]
   ;(println :fragmentcat-FAIL (filter #(not (or (token? %) (block? %))) terms))
   (assert (reduce (fn [result t]
                     (and result
                          (or (token? t) (block? t))))
                   true
                   terms))
   (Fragment. (vec terms)))
  ([x & xs]
   (fragmentcat (apply concat x xs))))

(defn fragment [& terms]
  (fragmentcat terms))

(defn block [left center right]
  (assert (delim-pair? left right))
  (assert (fragment? center))
  (Block. left center right))

(defn merge-blocks [b1 b2]
  (assert (block? b1))
  (assert (block? b2))
  (block (left b1)
         (fragmentcat (.terms (center b1))
                      (.terms (center b2)))
         (right b1)))

(extend-type nil
  ITerm
  (tt [this]
      nil)
  IToken
  (payload [this]
           nil))

(extend-type Token
  ITerm
  (tt [this]
      (.tag this))
  IToken
  (payload [this]
           (.payload this)))

(extend-type Fragment
  ITerm
  (tt [this] :fragment)
  IFragment
  (as-int [this]
          (let [v (if (= 1 (count (.terms this)))
                    (read-string
                      (payload (first (.terms this)))))]
            (if (integer? v)
              v
              (token :error "Not an integer"))))
  IRewrite
  (rewrite [this rule]
           (fragmentcat
             (rewrite (->> (r/map #(if (block? %)
                                     (block (left %)
                                            (rewrite (center %) rule)
                                            (right %))
                                     %)
                                  (.terms this))
                           (r/reduce conj []))
                      rule))))

(extend-type Block
  ITerm
  (tt [this] [:block (dt (.left this))])
  IBlock
  (left [this] (.left this))
  (center [this] (.center this))
  (right [this] (.right this)))