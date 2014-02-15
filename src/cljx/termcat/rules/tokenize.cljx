(ns termcat.rules.tokenize
  #+cljs (:require-macros [cljs.core.match.macros :refer (match)]
                          [termcat.core-macros-cljs :refer (defrule)])
  (:require #+cljs [cljs.core.match]
            #+clj [clojure.core.match :refer (match)]
            #+clj [termcat.core-macros :refer (defrule)]
            [termcat.term :as t]))

(def letters (->> (concat (range (int \a)
                                 (inc (int \z)))
                          (range (int \A)
                                 (inc (int \Z))))
                  (map char)
                  set))

(defn- letter? [x]
  (contains? letters x))

(defn- digit? [x]
  (contains? #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9} x))

(defn- hexdigit? [x]
  (contains? #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9 \A \B \C \D \E \a \b \c \d \e} x))

(defn escape-html
  ([] {:acc []})
  ([[state result] tok]
   (letfn [(segue [new-stage]
                  [{:stage new-stage
                    :acc (conj (:acc state) tok)}
                   result])
           (accept [whitespace?]
                   [{:acc []}
                    (let [r (->> (conj (:acc state) tok)
                                 (map t/payload)
                                 (reduce str)
                                 (map (partial t/token :html)))]
                      (if whitespace?
                        (-> result
                            (conj (t/token :whitespace))
                            (into r)
                            (conj (t/token :whitespace)))
                        (into result r)))])
           (reject []
                   [{:acc []}
                    (-> result
                        (into (:acc state))
                        (conj tok))])]
     (match [(:stage state) (t/payload tok)]
            [nil \\] (segue :escape)
            [:escape _] (reject)
            [nil \&] (segue :entity)
            [(:or :entity
                  :named-entity)
             (_ :guard letter?)] (segue :named-entity)
            [:entity \#] (segue :maybe-num-entity)
            [:maybe-num-entity \x] (segue :maybe-hex-num-entity)
            [(:or :maybe-num-entity :dec-num-entity)
             (_ :guard digit?)] (segue :dec-num-entity)
            [(:or :maybe-hex-num-entity :hex-num-entity)
             (_ :guard hexdigit?)] (segue :hex-num-entity)
            [(:or :named-entity
                  :dec-num-entity
                  :hex-num-entity) \;] (accept false)
            [nil \<] (segue :before-tag-name)
            [:before-tag-name \/] (segue :maybe-in-tag-name)
            [(:or :before-tag-name
                  :maybe-in-tag-name
                  :in-tag-name)
             (_ :guard letter?)] (segue :in-tag-name)
            [:in-tag-name \-] (segue :maybe-in-tag-name)
            [(:or :in-tag-name
                  :after-tag-name
                  :after-val)
             \space] (segue :after-tag-name)
            [(:or :after-tag-name
                  :maybe-in-attr-name
                  :in-attr-name)
             (_ :guard letter?)] (segue :in-attr-name)
            [:in-attr-name \-] (segue :maybe-in-attr-name)
            [:in-attr-name \=] (segue :before-val)
            [(:or :before-val
                  :maybe-in-val
                  :in-val)
             (_ :guard letter?)] (segue :in-val)
            [:in-val \-] (segue :maybe-in-val)
            [:before-val \"] (segue :in-double-quotes)
            [:in-double-quotes \"] (segue :after-val)
            [:in-double-quotes _] (segue :in-double-quotes)
            [(:or :in-tag-name
                  :in-val
                  :after-val) \>] (accept true)
            :else (reject)))))

(defrule remove-escape-tokens
  [state t1 t2]
  [_ :escape _] [nil (t/token :default (t/payload t2))])

(defrule remove-annotated-tokens
  [state t1 t2]
  [_ :tilde :tilde] nil
  [_ :tilde (:or :whitespace :newline nil)] nil
  [_ (:or :whitespace :newline nil) :tilde] nil
  [_ :tilde :greater-than] [nil t1 (t/token :default \⟩)]
  [_ :less-than :tilde] [nil (t/token :default \⟨) t2]
  [_ :tilde _] [nil t1 (t/token :default (t/payload t2))]
  [_ _ :tilde] [nil (t/token :default (t/payload t1)) t2])

(defrule merge-tokens
  [state t1 t2]
  [_ _ (:or :default
            :whitespace
            :tilde
            :dash
            :left-quote
            :right-quote
            :hash
            :html)] (if (= (t/tt t1) (t/tt t2))
                      [nil
                       (with-meta (t/token (t/tt t1)
                                           (cond (not (t/payload t1)) (t/payload t2)
                                                 (not (t/payload t2)) (t/payload t1)
                                                 :else (str (t/payload t1)
                                                            (t/payload t2))))
                                  (assoc (meta t1) :rpos (-> t2 meta :rpos)))]))

(defrule remove-magic-tokens
  [state t1 t2 t3]
  [_ _ (:or :whitespace
            :newline
            :emptyline
            [:block _]
            [:ldelim _]
            [:rdelim _]
            :percent
            :circumflex
            :underscore
            :tilde
            :left-quote
            :right-quote) _] nil
  [_ :default _ :default] (if-not (and (= (t/tt t2) :dash)
                                       (string? (t/payload t2)))
                            [nil (t/token :default
                                          (str (t/payload t1)
                                               (t/payload t2)
                                               (t/payload t3)))]))

(defn css-length? [s]
  (and (string? s)
       (re-matches #"[0-9]*\.?[0-9]+(?:px|em|ex|pt)"
                   s)))

(defrule introduce-emptyline-tokens
  [state t1 t2]
  [_ :emptyline :newline] [nil t2]
  [_ :newline :newline] [nil (with-meta (t/token :emptyline)
                                        (meta t1))])

(defrule introduce-indent-tokens {:indent 0} [state t1 t2]
  ; [{:fin true} _ _] nil

  ; [_ _ nil]
  ; (concat [{:fin true} t1]
  ;         (for [x (range (:indent state))]
  ;           (t/rdelim :indent)))

  [_ (:or nil
          :newline
          :emptyline) _]
  (let [indent (if (and (= (t/tt t2) :whitespace)
                        (string? (t/payload t2)))
                 (-> t2
                     t/payload
                     count
                     (/ 2)
                     int)
                 0)
        diff (- indent (:indent state))]
    (concat [{:indent indent}]
            (for [x (range (- diff))]
              (with-meta (t/rdelim :indent)
                         (meta t1)))
            (if t1 [t1])
            (for [x (range diff)]
              (with-meta (t/ldelim :indent)
                         (meta t1)))
            [t2])))

(defrule remove-superfluous-whitespace
  [state t1 t2]
  [_ (:or [:ldelim :indent]
          [:rdelim :indent]
          :newline
          :emptyline) :whitespace]
  [nil t1]

  [_ :whitespace (:or [:ldelim :indent]
                      [:rdelim :indent]
                      :newline
                      :emptyline)]
  [nil t2])

(defn item-type [tok]
  (case (t/payload tok)
    \- :bullet
    \# :h1
    "##" :h2
    "###" :h3
    "####" :h4
    "#####" :h5
    "######" :h6
    nil))

(defrule introduce-item-tokens {:in-bullet false
                                :item-type nil
                                :prev-state nil} [state t1 t2 t3]
  ; [{:fin true} _ _] nil

  ; [{:in-bullet true} _ nil nil]
  ; (letfn [(unwind [state2]
  ;                 (when (:in-bullet state2)
  ;                   (cons (t/token [:rdelim (:item-type state2)])
  ;                         (unwind (:prev-state state2)))))]
  ;   (concat [{:fin true} t1]
  ;           (unwind state)))

  [{:in-bullet true} :newline (:or :dash
                                   :hash) (:or :whitespace
                                               :newline
                                               :emptyline
                                               nil)]
  (if (item-type t2)
    [(assoc state :item-type (item-type t2))
     t1
     (t/token [:rdelim (:item-type state)])
     (t/token [:ldelim (item-type t2)]
              (t/payload t2))
     t3])

  [{:in-bullet true} (:or :newline
                          :emptyline
                          [:rdelim :indent]) _ _]
  (if-not (= (t/tt t2) [:ldelim (:item-type state)]) ; handle recursion
    [(:prev-state state)
     (t/token [:rdelim (:item-type state)])
     t1
     t2
     t3])

  [_ (:or nil
          :newline
          :emptyline
          [:ldelim :indent]
          [:rdelim _]) (:or :hash :dash) (:or :whitespace
                                              :newline
                                              :emptyline
                                              nil)]
  (do
    (if (and (or ((complement t/rdelim?) t1)
                 (item-type t1))
             (item-type t2)
             (not= (t/tt t1) [:rdelim (item-type t2)]))
      [{:in-bullet true
        :item-type (item-type t2)
        :prev-state state}
       t1
       (t/token [:ldelim (item-type t2)]
                (t/payload t2))
       t3]))

  [_ [:ldelim :indent] _ _]
  [{:in-bullet false :prev-state state} t1 t2 t3]

  [_ [:rdelim :indent] _ _]
  [(:prev-state state) t1 t2 t3])


(defrule remove-percent-tokens [state t1 t2 t3]
  [_ :percent :percent (:or :newline
                            :emptyline
                            [:ldelim :indent]
                            [:rdelim :indent]
                            [:ldelim :bullet]
                            [:rdelim :bullet]
                            nil)]
  [nil t3]

  [_ :percent :percent _]
  [nil t1 t2]

  [_  :percent (:or :plus :underscore :dash) :default]
  (if (css-length? (t/payload t3))
    [nil
     (t/token :html "<span style='")
     (t/token :html (case (t/payload t2)
                      \+ "margin-left: "
                      \- "margin-left: -"
                      \_ "display: inline-block; width: "))
     t3
     (if (= (t/tt t2) :underscore)
       (t/token :html "'> </span>")
       (t/token :html "'></span>"))]
    [nil (t/token :whitespace) t2 t3])

  [_ :percent (:or :left-quote
                   :right-quote
                   :double-quote
                   :circumflex
                   :default) _]
  (let [[c r t] (if (and (= (t/tt t2) :default)
                         (string? (t/payload t2)))
                  [(first (t/payload t2))
                   (subs (t/payload t2) 1)
                   t3]
                  [(t/payload t2) (str (t/payload t3)) nil])]
    (if-let [diacritic (case c
                         \` (char 0x0300)
                         \4 (char 0x0300)
                         \' (char 0x0301)
                         \2 (char 0x0301)
                         \^ (char 0x0302)
                         \1 (char 0x0304)
                         \" (char 0x0308)
                         \3 (char 0x030c)
                         nil)]
      (conj [nil (t/token :default (str (first r)
                                        diacritic
                                        (subs r 1)))]
            t)
      [nil (t/token :whitespace) t2 t3]))

  [_ :percent _ _]
  [nil (t/token :whitespace) t2 t3])