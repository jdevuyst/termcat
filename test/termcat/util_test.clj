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

(deftest reduce-test
  (testing "s-reduce"
    (is (= (s-reduce (fn [state result v]
                       [{v :test} (if (even? v) 1 0) v :a])
                     [1 2 3 4 5])
           [1 2 :a 3 4 :a 5 :a]))
    (is (= (s-reduce (fn [state result v]
                       [{:prev v} 0 (:prev state)])
                     [1 2 3 4 5])
           [nil 1 2 3 4]))))

(run-tests)