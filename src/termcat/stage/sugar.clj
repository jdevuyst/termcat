(ns termcat.stage.sugar
  (:require [termcat.term :refer :all]
            [termcat.rewrite :refer :all]
            [termcat.fun :as fun]))

(defrule introduce-par-calls
  [state t1]
  tt
  [_ :emptyline] (concat [nil] (fun/fun-call-seq ":par")))

(defrule introduce-section-calls
  [state t1]
  tt
  [_ [:block :section]] [nil (fun/fun-call-head ":section") t1]
  [_ [:block :subsection]] [nil (fun/fun-call-head ":subsection") t1]
  [_ [:block :subsubsection]] [nil (fun/fun-call-head ":subsubsection") t1])

(defrule introduce-blockquote-calls
  [state t1 t2 t3]
  tt
  [_ :maybe-fun :default _] nil
  [_ _ _ [:block :indent]] [nil t1 t2 (fun/fun-call-head ":blockquote") t3])

(defrule introduce-bullet-list-calls
  [state t1 t2]
  tt
  [_ [:block :bullet] _] nil
  [_ _ [:block :bullet]] [nil t1 (fun/fun-call-head ":bullet-list") t2])

(defn decorator-fname [tok]
  (case (payload tok)
    \* ":emph"
    "**" ":strong"
    \_ ":underline"
    nil))

(defrule introduce-decorator-calls
  [state t1 t2 t3]
  tt
  [_ :maybe-sugar (:or :default
                       [:block _]) :maybe-sugar]
  (if (= (payload t1) (payload t3))
    (if-let [fname (decorator-fname t1)]
      (concat [nil]
              (fun/fun-call-seq fname (if (block? t2)
                                        (center t2)
                                        (fragment t2)))))))