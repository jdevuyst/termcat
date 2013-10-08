(ns termcat.token
  (:require [clojure.core.match :refer (match)]
            [termcat.util :refer :all]))

(defn token
  ([type] (token type nil))
  ([type lexeme] [type lexeme]))

(def toktype first)

(def lexeme second)

(defn char-default-type [c]
  (condp contains? c
    #{\\} :escape
    #{\space} :whitespace
    #{\newline} :newline
    #{\( \[ \{} :bracket
           #{\) \] \}} :unbracket
    #{\. \, \: \;} :maybe-fun
    #{\#} :maybe-title
    #{\* \+ \- \_} :maybe-magic
    :default))

(defn char-default-token [c]
  (token (char-default-type c) (str c)))

(defn subst-escapes [state result tok]
  (if (= (toktype (last result)) :escape)
    [nil 1 (token :default (lexeme tok))]
    [nil 0 tok]))

(defn tokmelt [tok1 tok2]
  (assert (= (toktype tok1) (toktype tok2)))
  (token (toktype tok1)
         (str (lexeme tok1) (lexeme tok2))))

(defn melt-tokens [state result tok]
  (let [prevtok (last result)]
    (if (and (= (toktype prevtok)
                (toktype tok))
             (contains? #{:whitespace :maybe-magic :default}
                        (toktype tok)))
      [nil 1 (tokmelt prevtok tok)]
      [nil 0 tok])))

(defn abstract-emptylines [state result tok]
  (let [prevtok (last result)]
    (match [(toktype prevtok)
            (toktype tok)]
           [:emptyline :newline] [nil 0]
           [:newline :newline] [nil 1 (token :emptyline)]
           :else [nil 0 tok])))

(defn abstract-indents
  ([] {:indent 0})
  ([state result tok]
   (let [prevtok (last result)
         atstart (contains? #{:newline :emptyline} (toktype prevtok))
         indent (match [atstart (toktype tok)]
                       [true :whitespace] (count (lexeme tok))
                       [true _] 0
                       :else (:indent state))
         diff (/ (- indent (:indent state)) 2)]
     (concat [{:indent indent}
              (if prevtok 1 0)]
             (for [x (range (- diff))]
               (token :unindent))
             (if prevtok [prevtok])
             (for [x (range diff)]
               (token :indent))
             [tok]))))

(defn subst-whitespace [state result tok]
  (match [(toktype (last result)) (toktype tok)]
         [(:or :indent
               :unindent
               :newline
               :emptyline) :whitespace] [nil 0]
         :else [nil 0 tok]))

(defn abstract-bullets
  ([] {:in-bullet false})
  ([state result tok]
   (let [prevtok (last result)
         atstart (contains? #{:newline :emptyline :indent :unindent nil}
                            (toktype prevtok))
         atbullet (and atstart (= (lexeme tok) "-"))]
     (match [atstart (:in-bullet state) atbullet (toktype prevtok)]
            [false _ _ _] [state 0 tok]
            [_ _ _ :indent] [{:in-bullet false
                              :prev-state state}
                             0
                             tok]
            [_ _ _ :unindent] [(:prev-state state)
                               0
                               tok]
            [_ false true _] [{:in-bullet true
                               :prev-state state}
                              0
                              (token :bullet)
                              tok]
            [_ true true _] [state
                             0
                             (token :unbullet)
                             (token :bullet)
                             tok]
            [_ true _ _] [(:prev-state state)
                          0
                          (token :unbullet)
                          tok]
            :else [state 0 tok]))))