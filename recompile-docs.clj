(ns recompile-docs
  (:require [clojure.string :as string]
            [clojure.java.shell :refer (sh)]
            [clojure.java.browse :refer (browse-url)]
            [clojure.java.io :as io]))

(defn escape [c]
  (case c
    \< "&lt;"
    \> "&gt;"
    \& "&amp;"
    \' "&apos;"
    \" "&quot;"
    [c]))

(future (sh "lein" "run" "doc/termcat-intro"))

(sh "lein" "cljx")
(sh "lein" "cljsbuild" "once")

(sh "rm" "-r" "doc/js")
(future (sh "cp" "-r" "target/js" "target/termcat.js.map" "doc/"))

(->> "target/termcat.js"
     slurp
     (str "self.addEventListener('message', function(e) {\n"
          "  self.postMessage(termcat.core.compile(e.data));\n"
          "}, false);\n")
     (spit "doc/termcat.js"))

(->> (str "<html>"
          "<head>"
          "<meta charset='utf-8'>"
          "<title>Termcat ‘ClojureScript Edition’ Demo</title>"
          "<style>"
          "body { padding: 0; margin: 0 }"
          "iframe { position: absolute; width: 50%; height: 100%; }"
          "#in { left: 0; white-space: pre }"
          "#out { left: 50% }"
          "</style>"
          "</head>"
          "<body>"
          "<iframe id='in' srcdoc='"
          (->> "<html><head><style>body { white-space: pre-wrap }</style></head><body>"
               (mapcat escape)
               string/join)
          (->> "doc/termcat-intro.tc"
               slurp
               (mapcat escape)
               (mapcat escape)
               string/join)
          (->> "</body></html>"
               (mapcat escape)
               string/join)
          "'></iframe>"
          "<iframe id='out'></iframe>"
          "<script src='termcat-demo.js'></script>"
          "</body>"
          "</html>")
     (spit "doc/termcat-demo.html"))

; (-> (.resolve (.toPath (io/file "."))
;               (.toPath (io/file "doc/termcat-demo.html")))
;     (.. toUri toString)
;     browse-url)