(ns termcat.util.lambda-macros)

(defmacro protect [& expr]
  `(try ~@expr
     (catch java.lang.Exception x#
       [(t/token :error (.getMessage x#))])))

(defmacro constant-fun [& body]
  (let [x (gensym 'constant-fun-x)]
    `(fn [self# ~x]
       (if ~x
         [~@body ~x]
         [~@body]))))

(defmacro unary-fun [[x] & body]
  `(fn [self# ~x]
     (if ~x
       (do ~@body)
       [(t/token :error "Missing (system) function argument(s)")])))