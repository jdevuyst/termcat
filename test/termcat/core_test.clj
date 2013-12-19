(ns termcat.core-test
  (:require [clojure.test :refer :all]
            [termcat.core :as c]
            [termcat.rewrite :as rw]))

(binding [c/*debug* :ast]
  (let [the-cache (rw/cache)
        f #(c/compile % the-cache)
        pre-f #(do (f %) (str % \Z))
        repeat-pre-f #(binding [c/*debug* false]
                        (nth (iterate pre-f %2) %1))]
    (->> (slurp "doc/termcat-intro.tc")
         ; (repeat-pre-f 20)
         f
         (spit "doc/termcat-intro.html")
         time)
    (println "\"Cache size:" (count @the-cache) "items\"")))

;(run-tests)