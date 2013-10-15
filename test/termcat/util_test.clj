(ns termcat.util-test
  (:require [clojure.test :refer :all]
            [termcat.util :refer :all]))

(def testv [1 2 3 4 5 6 7])

(deftest vector-test
  (testing
    (is (= (pop-n testv 3)
           (pop-upto-n testv 3)
           [1 2 3 4]))
    (is (= (pop-upto-n testv 100)
           []))
    (is (= (last-n testv 3)
           [5 6 7]
           (pad-n testv 3)))
    (is (= (pad-n testv 10 :X)
           [:X :X :X 1 2 3 4 5 6 7]))))

(run-tests)