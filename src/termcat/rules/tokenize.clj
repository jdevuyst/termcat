(ns termcat.rules.tokenize
  (:require [clojure.core.match :refer (match)]
            [termcat.term :refer :all]))

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
           (accept []
                   [{:acc []}
                    (->> (conj (:acc state) tok)
                         (map payload)
                         (reduce str)
                         (map (partial token :html))
                         (into result))])
           (reject []
                   [{:acc []}
                    (-> result
                        (into (:acc state))
                        (conj tok))])]
     (match [(:stage state) (payload tok)]
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
                  :hex-num-entity) \;] (accept)
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
                  :after-val) \>] (accept)
            :else (reject)))))

(defrule remove-escape-tokens
  [state t1 t2]
  [_ :escape _] [nil (token :default (payload t2))])

(defrule remove-annotated-tokens
  [state t1 t2]
  [_ :tilde :tilde] nil
  [_ :tilde (:or :whitespace :newline nil)] nil
  [_ (:or :whitespace :newline nil) :tilde] nil
  [_ :tilde [(:or :ldelim
                  :rdelim) _]] [nil t1 (token :tilded-delim (payload t2))]
  [_ [(:or :ldelim
           :rdelim) _] :tilde] [nil (token :tilded-delim (payload t1)) t2]
  [_ :tilde :greater-than] [nil t1 (token :default \⟩)]
  [_ :less-than :tilde] [nil (token :default \⟨) t2]
  [_ :tilde _] [nil t1 (token :default (payload t2))]
  [_ _ :tilde] [nil (token :default (payload t1)) t2])

(defrule merge-tokens
  [state t1 t2]
  [_ _ (:or :default
            :whitespace
            :tilde
            :dash
            :left-quote
            :right-quote
            :hash
            :html)] (if (= (tt t1) (tt t2))
                      [nil
                       (with-meta (token (tt t1)
                                         (str (payload t1) (payload t2)))
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
  [_ :default _ :default] (if-not (and (= (tt t2) :dash)
                                       (string? (payload t2)))
                            [nil (token :default
                                        (str (payload t1)
                                             (payload t2)
                                             (payload t3)))]))

(defn css-length? [s]
  (and (string? s)
       (re-matches #"[0-9]*\.?[0-9]+(?:px|em|ex|pt)"
                   s)))

(defrule remove-percent-tokens
  [state t1 t2 t3]
  ; [_ _ :percent :percent]
  ; [nil t1 (token :whitespace) (token :default) (token :whitespace)]

  [_ :percent :percent (:or :newline :emptyline nil)]
  [nil t3]

  [_ :percent :percent _]
  [nil t1 t2]

  [_  :percent (:or :plus :underscore :dash) :default]
  (if (css-length? (payload t3))
    [nil
     (token :html "<span style='")
     (token :html (case (payload t2)
                    \+ "margin-left: "
                    \- "margin-left: -"
                    \_ "display: inline-block; width: "))
     t3
     (if (= (tt t2) :underscore)
       (token :html "'> </span>")
       (token :html "'></span>"))]
    [nil (token :whitespace) t2 t3])

  [_ :percent (:or :left-quote
                   :right-quote
                   :double-quote
                   :circumflex
                   :default) _]
  (let [[c r t] (if (and (= (tt t2) :default)
                         (string? (payload t2)))
                  [(first (payload t2))
                   (subs (payload t2) 1)
                   t3]
                  [(payload t2) (str (payload t3)) nil])]
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
      (conj [nil (token :default (str (first r)
                                      diacritic
                                      (subs r 1)))]
            t)
      [nil (token :whitespace) t2 t3]))

  [_ :percent _ _]
  [nil (token :whitespace) t2 t3])

(defrule introduce-emptyline-tokens
  [state t1 t2]
  [_ :emptyline :newline] [nil t2]
  [_ :newline :newline] [nil (with-meta (token :emptyline)
                                        (meta t1))])

(defrule introduce-indent-tokens
  {:indent 0}
  [state t1 t2]
  [_ _ nil]
  (concat [nil t1]
          (for [x (range (/ (:indent state) 2))]
            (with-meta (rdelim :indent)
                       (reduce #(update-in %1 [%2] inc)
                               (meta t1)
                               [:lpos :rpos]))))

  [_ (:or :newline
          :emptyline) _]
  (let [indent (if (and (= (tt t2) :whitespace)
                        (string? (payload t2)))
                 (-> t2
                     payload
                     count
                     (/ 2)
                     int)
                 0)
        diff (- indent (:indent state))]
    (concat [{:indent indent}]
            (for [x (range (- diff))]
              (with-meta (rdelim :indent)
                         (meta t1)))
            (if t1 [t1])
            (for [x (range diff)]
              (with-meta (ldelim :indent)
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
  (case (payload tok)
    \- :bullet
    \# :h1
    "##" :h2
    "###" :h3
    "####" :h4
    "#####" :h5
    "######" :h6
    nil))

(defrule introduce-item-tokens
  {:in-bullet false
   :item-type nil
   :prev-state nil}
  [state t1 t2 t3]
  ; [{:in-bullet true} _ nil nil]
  ; (letfn [(unwind [state2]
  ;                 (when-not (nil? state2)
  ;                   (cons (token [:rdelim (:item-type state2)])
  ;                         (unwind (:prev-state state2)))))]
  ;   (cons nil
  ;         (unwind state)))

  [{:in-bullet true} :newline (:or :dash
                                   :hash) (:or :whitespace
                                               :newline
                                               :emptyline
                                               nil)]
  (if (item-type t2)
    [(assoc state :item-type (item-type t2))
     t1
     (token [:rdelim (:item-type state)])
     (token [:ldelim (item-type t2)]
            (payload t2))
     t3])

  ; [{:in-bullet true} (:or :newline
  ;                         :emptyline
  ;                         [:rdelim :indent]) [:rdelim _] _]
  ; nil ; make sure the next rule terminates

  [{:in-bullet true} (:or :newline
                          :emptyline
                          [:rdelim :indent]) _ _]
  (if-not (= (tt t2) [:ldelim (:item-type state)]) ; handle recursion
    [(:prev-state state)
     (token [:rdelim (:item-type state)])
     t1
     t2
     t3])

  ; [_ _ [:ldelim _] _]
  ; nil ; don't run next rule twice

  [_ (:or nil
          :newline
          :emptyline
          [:ldelim :indent]
          [:rdelim _]) _ (:or :whitespace
                              :newline
                              :emptyline
                              nil)]
  (if (item-type t2)
    [{:in-bullet true
      :item-type (item-type t2)
      :prev-state state}
     t1
     (token [:ldelim (item-type t2)]
            (payload t2))
     t3])

  [_ [:ldelim :indent] _ _]
  [{:in-bullet false :prev-state state} t1 t2 t3]

  [_ [:rdelim :indent] _ _]
  [(:prev-state state) t1 t2 t3])
