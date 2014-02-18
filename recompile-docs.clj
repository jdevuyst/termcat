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

; (future (sh "lein" "run" "doc/termcat-intro"))

; (sh "lein" "cljx")
; (sh "lein" "cljsbuild" "once")

; (sh "rm" "-r" "doc/js")
; (future (sh "cp" "-r" "target/js" "target/termcat.js" "target/termcat.js.map" "doc/"))

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
          "<script src='termcat.js'></script>"
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
          "<script>"
          "var inframe = document.getElementById('in');"
          "var outframe = document.getElementById('out');"
          "window.onload = function () {"
          "  inframe.contentDocument.designMode = 'on';"
          "  var input = inframe.contentDocument.body.textContent;"
          "  var output = termcat.core.compile(input);"
          "  outframe.srcdoc = output;"
          "}"
          "</script>"
          "</body>"
          "</html>")
     (spit "doc/termcat-demo.html"))

(-> (.resolve (.toPath (io/file "."))
              (.toPath (io/file "doc/termcat-demo.html")))
    (.. toUri toString)
    browse-url)