(ns termcat.rules.bind
  (:require [clojure.core.match :refer (match)]
            [termcat.rewrite :as rw]
            [termcat.term :refer :all]
            [termcat.util.lambda :as lambda]))

(defrule introduce-bindings
  [state t1 t2 t3 t4 t5]
  [_ (:or nil
          :whitespace
          :newline
          :emptyline
          [:block _]) :bang :default [:block _] [:block _]]
  (if (= (payload t3) "bind")
    (let [ts (-> t4
                 center
                 .terms)
          name (as-> (first ts) $
                     (if $ (payload $)))]
      (if (and (= 1 (count ts))
               (or (char? name) (string? name)))
        [(assoc state name (rw/unwrap t5))
         t1]
        [state t1 (token :error
                         (apply str
                                "!bind: not a valid name — "
                                name
                                (if (> (count ts) 1)
                                  (str " (and "
                                       (-> ts count dec)
                                       " more tokens)"))))])))

  [_ _ :arg _ _ _]
  [(dissoc state (payload t2)) t1 t2 t3 t4 t5]

  [_ (:or nil
          :whitespace
          :newline
          :emptyline
          [:block _]) _ (:or nil
                             :whitespace
                             :newline
                             :emptyline
                             [:block _]
                             :hash) _ _]
  (if-let [ts (and (token? t2)
                   (get state (payload t2)))]
    [state
     t1
     (block (ldelim :identifier)
            (fragmentcat ts)
            (rdelim :identifier))
     t3
     t4
     t5]))

(defrule expand-bindings
  [state t1]
  [_ [:block :identifier]] (cons nil (rw/unwrap t1)))

(defn non-lambda-block? [x]
  (and (block? x) (not= (tt x) [:block :lambda])))

; (defn call-lambda [lambda & arg-values]
;   (let [arg-count (count arg-values)
;         arg-names (->> lambda
;                        center
;                        .terms
;                        (take arg-count))]
;     (rw/apply-rule
;       (rw/sequence
;         (rw/recursive-procedure
;           (rw/fixpoint
;             (rw/disjunction
;               introduce-bindings))
;           block?
;           rw/lexical-scope)
;         (rw/recursion
;           (rw/procedure
;             (rw/fixpoint
;               (rw/sequence
;                 expand-bindings
;                 lambda-rules/evaluate-fun-calls)))
;           non-lambda-block?))
;       (vec (concat
;              (mapcat (fn [n v]
;                        [(token :bang)
;                         (token :default "bind")
;                         (block (ldelim :call-lambda)
;                                (fragment n)
;                                (rdelim :call-lambda))
;                         v])
;                      arg-names
;                      arg-values)
;              (->> lambda
;                   center
;                   .terms
;                   (drop arg-count)))))))

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

(defrule introduce-lambdas
  [state t1 t2 t3 t4 t5]
  [_ (:or nil :whitespace :emptyline :newline)
   :period :default [:block _] [:block _]]
  (if (contains? #{"fn" "recfn"} (payload t3))
    (concat [nil (if (or (= (tt t1) :emptyline)
                         (payload t1))
                   t1)]
            (make-lambda t4 t5))))

(defrule introduce-fun-calls
  [state t1 t2 t3]
  [_
   (:or nil :whitespace :newline :emptyline :arg)
   (:or :period :colon)
   :default]
  [nil t1 (lambda/fun-call-head (str (payload t2)
                                     (payload t3)))])

; (defrule remove-superfluous-whitespace
;   [state t1 t2]
;   tt
;   block?
;   [_ (:or nil
;           :whitespace
;           :newline
;           :emptyline) (:or nil
;                            :whitespace
;                            :newline
;                            :emptyline)]
;   (if-let [strongest-type (condp #(contains? %2 %1) (hash-set (tt t1) (tt t2))
;                             :emptyline :emptyline
;                             :newline :newline
;                             nil nil ; skip
;                             :whitespace :whitespace)]
;     [nil t1 t2 (token strongest-type
;                       (str (payload t1) (payload t2)))]))