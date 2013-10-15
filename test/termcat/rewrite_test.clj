(ns termcat.rewrite-test
  (:require [termcat.rewrite :refer :all]
            [clojure.test :refer :all]))

(def testv [1 2 3 4 5 6 7])

(deftest rewrite-test
  (testing
    (is (= (rewrite testv (fn
                            ([] nil)
                            ([state v]
                             [state v])))
           (rewrite testv (fn
                            ([] nil)
                            ([state v]
                             nil)))
           (rewrite testv (fn
                            ([] {:length 4})
                            ([state v1 v2 v3 v4]
                             [state v1 v2 v3 v4])))
           testv))
    (is (= (rewrite testv (fn
                            ([] {:length 4})
                            ([state v1 v2 v3 v4]
                             [state v1 v2 v3 (if v4 (inc v4))])))
           [2 3 4 5 6 7 8]))
    (is (= (rewrite testv (fn
                            ([] {:length 3})
                            ([state v1 v2 v3]
                             (if (or (nil? v3)
                                     (odd? v3))
                               [state v1 v2 v3]
                               [state v1 v2]))))
           [1 3 5 7]))
    (is (= (rewrite testv (fn
                            ([] {:length 3})
                            ([state v1 v2 v3]
                             [state])))
           []))))

(run-tests)