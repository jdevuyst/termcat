(ns termcat.stage.tokenize
  (:require [termcat.term :refer :all]
            [termcat.rewrite :refer :all]))

(defrule remove-escape-tokens
  "[:escape \\] + [type payload] -> [:default payload]"
  [state t1 t2]
  tt
  [_ :escape _] [nil (token :default (payload t2))])

(defrule merge-tokens
  "[type x] + [type y] -> [type xy] for some token types.

  For some token types we don't want to make a distinction
  between a single token and a sequences of tokens of that
  token type. We merge subsequent occurences of such tokens.
  This also allows for easier matching later on."
[state t1 t2]
tt
[_ _ (:or :default
          :whitespace
          :maybe-magic)] (if (= (tt t1) (tt t2))
                           [nil
                            (token (tt t1)
                                   (str (payload t1) (payload t2)))]))

(defrule introduce-emptyline-tokens
  "Any two or more successive :newline tokens are replaced by
  a single :emptyline token. Isolated :newline tokens are not
  removed."
[state t1 t2]
tt
[_ :emptyline :newline] [nil t2]
[_ :newline :newline] [nil (token :emptyline)])

(defrule introduce-indent-tokens
  "Introduces [:ldelim :indent] and [:rdelim :indent] tokens.

  Left delimiters are inserted after empty lines (if applicable) and
  right delimiters are inserted before empty lines (if applicable)"
{:indent 0}
[state t1 t2]
tt
[_ _ nil] (concat [nil t1]
                  (for [x (range (/ (:indent state) 2))]
                    (rdelim :indent)))
[_ (:or :newline
        :emptyline) _] (let [indent (if (= (tt t2) :whitespace)
                                      (count (payload t2))
                                      0)
                             diff (/ (- indent (:indent state)) 2)]
                         (concat [{:indent indent}]
                                 (for [x (range (- diff))]
                                   (rdelim :indent))
                                 (if t1 [t1])
                                 (for [x (range diff)]
                                   (ldelim :indent))
                                 [t2])))

(defrule remove-superfluous-whitespace
  "Removes leading and trailing whitespace."
  [state t1 t2]
  tt
  [_
   (:or [:ldelim :indent]
        [:rdelim :indent]
        :newline
        :emptyline)
   :whitespace] [nil t1]
  [_
   :whitespace
   (:or [:ldelim :indent]
        [:rdelim :indent]
        :newline
        :emptyline)] [nil t2])

(defn item-type [tok]
  "Returns the item 'type' of the token, if any, or nil. The item
  type can be bullet, section, subsection, etcetera."
(case (payload tok)
  \- :bullet
  \# :section
  "##" :subsection
  "###" :subsubsection
  nil))

(defrule introduce-item-tokens
  "Adds [:ldelim :item] tokens in front of dashes at the start of a
  line. Adds [:rdelim :item] tokens where the bullet ends.

  Newline tokens before [:rdelim :item] terms are removed.

  Like indentation, right delimiter for bullets are inserted in front
  of, not after, :emptylines."
{:in-bullet false
 :item-type nil
 :prev-state nil}
[state t1 t2]
tt
[{:in-bullet true} _ nil] (letfn [(unwind [state2]
                                           (if (nil? state2)
                                             nil
                                             (cons (token [:rdelim (:item-type state2)])
                                                   (unwind (:prev-state state2)))))]
                            (cons nil
                                 (unwind state)))
[{:in-bullet true} _ (:or :emptyline
                          [:rdelim :indent])] [(:prev-state state)
                                               t1
                                               (token [:rdelim (:item-type state)])
                                               t2]
[{:in-bullet true} :newline _] (if (item-type t2)
                                 [(assoc state :item-type (item-type t2))
                                  t1
                                  (token [:rdelim (:item-type state)])
                                  (token [:ldelim (item-type t2)]
                                         (payload t2))]
                                 [(:prev-state state)
                                  t1
                                  (token [:rdelim (:item-type state)])
                                  t2])
[_ (:or nil
        :newline
        :emptyline
        [:ldelim :indent]) _] (if (item-type t2)
                                [{:in-bullet true
                                  :item-type (item-type t2)
                                  :prev-state state}
                                 t1
                                 (token [:ldelim (item-type t2)]
                                        (payload t2))])
[_ [:ldelim :indent] _] [{:in-bullet false :prev-state state} t1 t2]
[_ [:rdelim :indent] _] [(:prev-state state) t1 t2])

(defrule remove-percent-magic
  [state t1 t2 t3]
  tt
  [_ :maybe-magic :whitespace :newline] (if (= (payload t1) \%)
                                          [nil])
  [_ :maybe-magic :whitespace _] (if (= (payload t1) \%)
                                   [nil t1 t2])
  [_ _ _ :maybe-magic] (if (= (payload t3) "%%")
                         [nil t1 t2 (token :html)]))
