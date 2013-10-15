(ns termcat.term-test
  (:require [clojure.test :refer :all]
            [clojure.core.match :refer (match)]
            [termcat.rewrite :refer :all]
            [termcat.term :refer :all]))

(deftest constructors-test
  (testing
    (is (= (token :blah)
           (->Token :blah nil)))
    (is (= (->Fragment [(token :blah "blah")
                        (token :blah2 "blah2")
                        (token :blah3 "blah3")])
           (fragmentcat [(token :blah "blah")
                         (token :blah2 "blah2")
                         (token :blah3 "blah3")])
           (fragmentcat [(token :blah "blah")
                         (token :blah2 "blah2")]
                        [(token :blah3 "blah3")])
           (fragment (token :blah "blah")
                     (token :blah2 "blah2")
                     (token :blah3 "blah3"))))
    (is (= (block (ldelim :delim)
                  (fragment (token :center))
                  (rdelim :delim))
           (->Block (ldelim :delim)
                    (fragment (token :center))
                    (rdelim :delim))))))

(deftest tt-tests
  (testing
    (is (= (tt (token :a :b))
           :a))
    (is (= (tt (fragment (token :a)))
           :fragment))
    (is (= (tt (block (ldelim :delim)
                      (fragment (token :tok))
                      (rdelim :delim)))
           [:block :delim]))))

(deftest token-tests
  (testing
    (is (token? (token :a)))
    (is (= (payload (token :a "b"))
           "b"))
    (is (delim-pair? (ldelim :delim "(")
                     (rdelim :delim ")")))))

(defrule rule1 [state x y]
  (match [x y]
         [_ nil] [state x y]
         [nil _] [state x y]
         :else [state y x]))

(deftest fragment-test
  (testing
    (is (fragment? (fragment (token :a)
                             (block (ldelim :delim "x")
                                    (fragment (token :center))
                                    (rdelim :delim "y")))))
    (is (= (rewrite (fragment (token :a) (token :b))
                    rule1)
           (fragment (token :b) (token :a))))))

(deftest block-tests
  (testing
    (is (block? (block (ldelim :delim "x")
                       (fragment (token :center))
                       (rdelim :delim "y"))))
    (is (= [(left (block (ldelim :delim "x")
                         (fragment (token :center))
                         (rdelim :delim "y")))
            (center (block (ldelim :delim "x")
                           (fragment (token :center))
                           (rdelim :delim "y")))
            (right (block (ldelim :delim "x")
                          (fragment (token :center))
                          (rdelim :delim "y")))]
           [(ldelim :delim "x")
            (fragment (token :center))
            (rdelim :delim "y")]))))

(run-tests)