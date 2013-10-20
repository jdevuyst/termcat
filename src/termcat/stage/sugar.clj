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
  [_ _ _ [:block :indent]] [nil t1 t2 (fun/fun-call-head ":quotation") t3])

(defrule introduce-bullet-list-calls
  [state t1 t2 t3]
  tt
  [_ :maybe-fun :default _] nil
  [_ _ [:block :bullet] _] nil
  [_ _ _ [:block :bullet]] [nil t1 t2 (fun/fun-call-head ":bullet-list") t3])

(defrule introduce-link-calls
  [state t1 t2 t3 t4]
  tt
  [_ :maybe-fun :default _ _] nil
  [_ _
   :maybe-fun
   [:block :bracket]
   [:block :parenthesis]] (if (= (payload t2) \!)
                            (concat [nil t1]
                                    (fun/fun-call-seq ":img"
                                                      (center t3)
                                                      (center t4))))
  [_ _ _
   [:block :bracket]
   [:block :parenthesis]] (concat [nil t1 t2]
                                  (fun/fun-call-seq ":link"
                                                    (center t3)
                                                    (center t4))))

(defn decorator-fname [tok]
  (case (payload tok)
    \* ":emph"
    "**" ":strong"
    \_ ":underline"
    nil))

(defrule introduce-decorator-calls
  [state t1 t2 t3]
  tt
  [_ :maybe-magic (:or :default
                       [:block _]) :maybe-magic]
  (if (= (payload t1) (payload t3))
    (if-let [fname (decorator-fname t1)]
      (concat [nil]
              (fun/fun-call-seq fname (if (block? t2)
                                        (center t2)
                                        (fragment t2)))))))

(defrule introduce-typographic-dashes
  [state t1 t2 t3]
  tt
  [_ :dash :dash :dash] [nil (token :default \—)]
  [_ :dash :dash _] [nil (token :default \–) t3])

(defrule introduce-typographic-quotes
  [state t1 t2]
  tt
  [_ :left-quote :left-quote] [nil (token :default \“)]
  [_ :right-quote :right-quote] [nil (token :default \”)]
  [_ :left-quote _] [nil (token :default \‘) t2]
  [_ :right-quote _] [nil (token :default \’) t2])