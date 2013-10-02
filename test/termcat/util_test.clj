(ns termcat.util-test
  (:require [clojure.test :refer :all]
            [termcat.util :refer :all]))

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