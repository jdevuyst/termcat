(ns termcat.rules.bind
  (:require [clojure.core.match :refer (match)]
            [termcat.rewrite :as rw]
            [termcat.term :refer :all]
            [termcat.util.lambda :as lambda]))

(defn strongest-blank [t1 t2 default]
  (condp #(contains? %2 %1) (hash-set (tt t1) (tt t2))
    nil nil ; skip
    :emptyline (token :emptyline)
    :newline (token :newline)
    :whitespace (token :whitespace)
    default))

(defrule introduce-bindings [state t1 t2 t3 t4 t5 t6]
  [_ (:or nil
          :whitespace
          :newline
          :emptyline
          [:block _])
   :bang :default [:block _] [:block _] _]
  (if (= (payload t3) "bind")
    (let [ts (rw/unwrap t4)
          name (as-> (first ts) $
                     (if $ (payload $)))]
      (if (and (= 1 (count ts))
               (or (char? name) (string? name)))
        (conj [(assoc state name (rw/unwrap t5))
               (strongest-blank t1 t6 t1)]
              (if-not (contains? #{nil :whitespace
                                   :newline :emptyline}
                                 (tt t6))
                t6))
        [state
         t1
         (token :error
                (apply str
                       "!bind: not a valid name — "
                       name
                       (if (> (count ts) 1)
                         (str " (and "
                              (-> ts count dec)
                              " more tokens)"))))
         t6])))

  [_ _ :arg _ _ _ _]
  [(dissoc state (payload t2)) t1 t2 t3 t4 t5 t6]

  [_ (:or nil
          :whitespace
          :newline
          :emptyline
          [:block _]) _ (:or nil
                             :whitespace
                             :newline
                             :emptyline
                             [:block _]
                             :hash) _ _ _]
  (if-let [ts (and (token? t2)
                   (get state (payload t2)))]
    [state
     t1
     (block (ldelim :identifier)
            (fragmentcat ts)
            (rdelim :identifier))
     t3
     t4
     t5
     t6]))

(defrule expand-bindings [state t1]
  [_ [:block :identifier]]
  (cons nil (as-> (rw/unwrap t1) $
                  (if (-> $ last tt (= :hash))
                    (butlast $)
                    $))))

(defn non-dormant-block? [x]
  (and (block? x)
       (not= (tt x) [:block :lambda])
       (not= (tt x) [:block :if-branch])))

(defn apply-fun [fun-token arg]
  (let [f (payload fun-token)
        retval (f fun-token arg)]
    (if (string? retval)
      [(token :error (str retval " – " (:fun-name (meta f))))]
      retval)))

(def evaluate-fun-calls)

(defn apply-lambda [lambda-term arg]
  (cond (-> lambda-term rw/unwrap first tt (not= :arg))
        (conj (->> lambda-term
                   rw/unwrap
                   (rw/apply-rule
                     (rw/recursion
                       (rw/procedure
                         (rw/fixpoint
                           (rw/disjunction
                             expand-bindings
                             evaluate-fun-calls)))
                       non-dormant-block?)))
              arg)

        (not arg)
        [(token :error "Missing (user) function argument(s)")]

        :else
        [(->> (block (ldelim :lambda)
                     (fragmentcat
                       [(token :bang)
                        (token :default "bind")
                        (block (ldelim :arg-name)
                               (-> lambda-term rw/unwrap first fragment)
                               (rdelim :arg-name))
                        arg]
                       (-> lambda-term rw/unwrap next))

                     (rdelim :lambda))
              (rw/apply-rule
                (rw/recursive-procedure
                  (rw/fixpoint
                    (rw/sequence
                      introduce-bindings
                      expand-bindings))
                  block?
                  rw/lexical-scope)))]))

(defn apply-function [fterm arg]
  (case (tt fterm)
    :fun (apply-fun fterm arg)
    [:block :lambda] (apply-lambda fterm arg)))

(defrule evaluate-fun-calls [state t1 t2]
  [_ (:or :fun [:block :lambda]) [:block _]]
  (cons nil (apply-function t1 t2))

  [_ (:or :fun [:block :lambda]) :hash]
  nil

  [_ (:or :fun [:block :lambda]) _]
  (concat [nil]
          (apply-function t1 nil)
          [t2]))

(defn make-lambda [args body]
  [(block (ldelim :lambda)
          (fragmentcat (->> args
                            center
                            .terms
                            (filter #(not= (tt %) :whitespace))
                            (map (fn [x] (token :arg (payload x)))))
                       (->> body
                            center
                            .terms))
          (rdelim :lambda))])

(defrule introduce-lambdas [state t1 t2 t3 t4 t5]
  [_ (:or nil :whitespace :emptyline :newline)
   :period :default [:block _] [:block _]]
  (if (contains? #{"fn" "recfn"} (payload t3))
    (concat [nil (if (or (= (tt t1) :emptyline)
                         (payload t1))
                   t1)]
            (make-lambda t4 t5))))

(defn if-fn [t1 t2 t3]
  (->> (if (lambda/tval t1 #(or (= % true)
                                (= % false)))
         t2
         t3)
       rw/unwrap
       (rw/apply-rule
         (rw/recursion
           (rw/procedure
             (rw/fixpoint
               (rw/disjunction
                 expand-bindings
                 evaluate-fun-calls)))
           non-dormant-block?))))

(defrule introduce-fun-calls [state t1 t2 t3 t4 t5 t6]
  [_
   (:or nil :whitespace :newline :emptyline :arg)
   (:or :period :colon) :default _ _ _]
  (if (and (= (tt t2) :period)
           (= (payload t3) "if"))
    [t1
     (token :fun (lambda/curry-fun if-fn 3))
     t4
     (if (block? t5)
       (block (ldelim :if-branch)
              (fragmentcat (rw/unwrap t5))
              (rdelim :if-branch))
       t5)
     (if (block? t6)
       (block (ldelim :if-branch)
              (fragmentcat (rw/unwrap t6))
              (rdelim :if-branch))
       t6)]
    [nil
     t1
     (lambda/fun-call-head (str (payload t2)
                                (payload t3)))
     t4 t5 t6]))

; (defrule remove-superfluous-whitespace [state t1 t2]
;   [_ (:or nil
;           :whitespace
;           :newline
;           :emptyline) (:or nil
;                            :whitespace
;                            :newline
;                            :emptyline)]
;   (if-let [strongest-type (condp #(contains? %2 %1) (hash-set (tt t1) (tt t2))
;                             nil nil ; skip
;                             :emptyline :emptyline
;                             :newline :newline
;                             :whitespace :whitespace)]
;     [nil (token strongest-type
;                 (str (payload t1) (payload t2)))]))