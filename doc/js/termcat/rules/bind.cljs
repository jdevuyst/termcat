(ns termcat.rules.bind
         (:require-macros [cljs.core.match.macros :refer (match)]
                          [termcat.core-macros-cljs :refer (defrule)])
  (:require        [cljs.core.match]
                                                     
                                                        
            [termcat.rewrite :as rw]
            [termcat.term :as t]
            [termcat.util.lambda :as lambda]))

       (defn char? [c] (and (string? c)
                            (= 1 (count c))))

(defn strongest-blank [t1 t2 default]
  (condp #(contains? %2 %1) (hash-set (t/tt t1) (t/tt t2))
    nil nil ; skip
    :emptyline (t/token :emptyline)
    :newline (t/token :newline)
    :whitespace (t/token :whitespace)
    default))

(defrule introduce-bindings [state t1 t2 t3 t4 t5 t6]
  [_ (:or nil
          :whitespace
          :newline
          :emptyline
          [:block _])
   :bang :default [:block _] [:block _] _]
  (if (= (t/payload t3) "bind")
    (let [ts (rw/unwrap t4)
          name (as-> (first ts) $
                     (if $ (t/payload $)))]
      (if (and (= 1 (count ts))
               (or (char? name) (string? name)))
        (conj [(assoc state name (rw/unwrap t5))
               (strongest-blank t1 t6 t1)]
              (if-not (contains? #{nil :whitespace
                                   :newline :emptyline}
                                 (t/tt t6))
                t6))
        [state
         t1
         (t/token :error
                  (apply str
                         "!bind: not a valid name — "
                         name
                         (if (> (count ts) 1)
                           (str " (and "
                                (-> ts count dec)
                                " more tokens)"))))
         t6])))

  [_ _ :arg _ _ _ _]
  [(dissoc state (t/payload t2)) t1 t2 t3 t4 t5 t6]

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
  (if-let [ts (and (t/token? t2)
                   (get state (t/payload t2)))]
    [state
     t1
     (t/block (t/ldelim :identifier)
              (t/fragmentcat ts)
              (t/rdelim :identifier))
     t3
     t4
     t5
     t6]))

(defrule expand-bindings [state t1]
  [_ [:block :identifier]]
  (cons nil (as-> (rw/unwrap t1) $
                  (if (-> $ last t/tt (= :hash))
                    (butlast $)
                    $))))

(defn non-dormant-block? [x]
  (and (t/block? x)
       (not= (t/tt x) [:block :lambda])
       (not= (t/tt x) [:block :if-branch])))

(defn apply-fun [fun-token arg]
  (let [f (t/payload fun-token)
        retval (f fun-token arg)]
    (if (string? retval)
      [(t/token :error (str retval " – " (:fun-name (meta f))))]
      retval)))

(def evaluate-fun-calls)

(defn apply-lambda [lambda-term arg]
  (cond (-> lambda-term rw/unwrap first t/tt (not= :arg))
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
        [(t/token :error "Missing (user) function argument(s)")]

        :else
        [(->> (t/block (t/ldelim :lambda)
                       (t/fragmentcat
                         [(t/token :bang)
                          (t/token :default "bind")
                          (t/block (t/ldelim :arg-name)
                                   (-> lambda-term rw/unwrap first t/fragment)
                                   (t/rdelim :arg-name))
                          arg]
                         (-> lambda-term rw/unwrap next))

                       (t/rdelim :lambda))
              (rw/apply-rule
                (rw/recursive-procedure
                  (rw/fixpoint
                    (rw/sequence
                      introduce-bindings
                      expand-bindings))
                  t/block?
                  rw/lexical-scope)))]))

(defn apply-function [fterm arg]
  (case (t/tt fterm)
    :fun (let [x (apply-fun fterm arg)]
           x)
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
  [(t/block (t/ldelim :lambda)
            (t/fragmentcat (->> args
                                t/center
                                .-terms
                                (filter #(not= (t/tt %) :whitespace))
                                (map (fn [x] (t/token :arg (t/payload x)))))
                           (->> body
                                t/center
                                .-terms))
            (t/rdelim :lambda))])

(defrule introduce-lambdas [state t1 t2 t3 t4 t5]
  [_ (:or nil :whitespace :emptyline :newline)
   :period :default [:block _] [:block _]]
  (if (contains? #{"fn" "recfn"} (t/payload t3))
    (concat [nil (if (or (= (t/tt t1) :emptyline)
                         (t/payload t1))
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
  (if (and (= (t/tt t2) :period)
           (= (t/payload t3) "if"))
    [t1
     (t/token :fun (lambda/curry-fun if-fn 3))
     t4
     (if (t/block? t5)
       (t/block (t/ldelim :if-branch)
                (t/fragmentcat (rw/unwrap t5))
                (t/rdelim :if-branch))
       t5)
     (if (t/block? t6)
       (t/block (t/ldelim :if-branch)
                (t/fragmentcat (rw/unwrap t6))
                (t/rdelim :if-branch))
       t6)]
    [nil
     t1
     (lambda/fun-call-head (str (t/payload t2)
                                (t/payload t3)))
     t4 t5 t6]))

; (defrule remove-superfluous-whitespace [state t1 t2]
;   [_ (:or nil
;           :whitespace
;           :newline
;           :emptyline) (:or nil
;                            :whitespace
;                            :newline
;                            :emptyline)]
;   (if-let [strongest-type (condp #(contains? %2 %1) (hash-set (t/tt t1) (t/tt t2))
;                             nil nil ; skip
;                             :emptyline :emptyline
;                             :newline :newline
;                             :whitespace :whitespace)]
;     [nil (t/token strongest-type
;                 (str (t/payload t1) (t/payload t2)))]))
;;;;;;;;;;;; This file autogenerated from src/cljx/termcat/rules/bind.cljx
