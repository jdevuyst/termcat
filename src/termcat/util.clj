(ns termcat.util
  (:require [clojure.core.reducers :as r]))

(defn pop-n [coll n]
  (subvec coll 0 (- (count coll) n)))

(defn pop-upto-n [coll n]
  (pop-n coll (min n (count coll))))

(defn last-n [coll n]
  (subvec coll (- (count coll) n)))

(defn pad-n
  ([coll n] (pad-n coll n nil))
  ([coll n filler] (into (vec (repeat (- n (count coll))
                                      filler))
                         (last-n coll (min n (count coll))))))