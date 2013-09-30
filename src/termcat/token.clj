(ns termcat.token
  (:require [clojure.core.match :refer (match)]))

(defn penultimate [coll]
  (nth coll (- (count coll) 2)))

(defn token
  ([type] (token type nil))
  ([type lexeme] [type lexeme]))

(def toktype first)

(def lexeme second)

(defn char-default-type [c]
  (condp contains? c
    #{\space} :whitespace
    #{\newline} :newline
    #{\* \+ \- \.} :magic
    :default))

(defn char-default-token [c]
  (token (char-default-type c) c))

(defn tok-merge [tok1 tok2]
  (token (toktype tok1)
         (str (lexeme tok1) (lexeme tok2))))

(defn tok-conj [result tok]
  (let [prevtok (last result)]
    (if (= (toktype prevtok)
           (toktype tok))
      (conj (pop result)
            (tok-merge prevtok tok))
      (conj result tok))))

(defn insert-indents [result tok]
  (let [prevtok (last result)
        prevtype (toktype prevtok)
        newtype (toktype tok)
        prevstate (if prevtok
                    (meta prevtok)
                    {:empty-line? true
                     :indent-level 0
                     :verified-indent-level 0})

        prev-empty (:empty-line? prevstate)
        prev-indent (:indent-level prevstate)
        prev-verified-indent (:verified-indent-level prevstate)
        [new-empty
         new-indent
         new-verified-indent] (match [newtype prev-empty]
                                     [:newline _] [true 0 prev-verified-indent]
                                     [:whitespace true] [true
                                                    (+ prev-indent (count (lexeme tok)))
                                                    prev-verified-indent]
                                     :else [false prev-indent prev-indent])

        verified-indent-diff (/ (- new-verified-indent prev-verified-indent) 2)]
    (if (not= prev-verified-indent new-verified-indent)
      (println prev-verified-indent new-verified-indent new-indent tok))
    (-> result
        (into (for [x (range verified-indent-diff)]
                (token :indent)))
        (into (for [x (range (- verified-indent-diff))]
                (token :unindent)))
        (conj (vary-meta tok merge {:empty-line? new-empty
                                    :indent-level new-indent
                                    :verified-indent-level new-verified-indent})))))

(defn remove-trailing-whitespace [result tok]
  (if (and (= (toktype (last result)) :whitespace)
           (contains? #{:indent :unindent :newline} (toktype tok)))
    (conj (pop result) tok)
    (conj result tok)))

(defn substitute-newlines [result tok]
  (if (= (toktype tok) :newline)
    (if (> (count (lexeme tok)) 1)
      (conj (pop result) (token :emptyline))
      result)
    (conj result tok)))