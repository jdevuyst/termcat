(ns recompile-docs
  (:require [clojure.string :as string]
            [clojure.java.shell :refer (sh)]
            [clojure.java.browse :refer (browse-url)]
            [clojure.java.io :as io]))

(defn browse [filename]
  (-> (.resolve (.toPath (io/file "."))
                (.toPath (io/file filename)))
      (.. toUri toString)
      browse-url))

(defn escape [c]
  (case c
    \< "&lt;"
    \> "&gt;"
    \& "&amp;"
    \' "&apos;"
    \" "&quot;"
    [c]))

(sh "rm" "doc/termcat-intro.html" "doc/termcat-demo.html" "doc/termcat.js" "doc/termcat.js.map")

(def f1 (future (do
                  (sh "lein" "run" "doc/termcat-intro")
                  (browse "doc/termcat-intro.html"))))

(def f2 (future (sh "rm" "-r" "doc/js")))

(sh "lein" "cljx")
(sh "lein" "cljsbuild" "once")

@f2
(def f3 (future (sh "cp" "-r" "target/js" "target/termcat.js.map" "doc/")))

(->> "target/termcat.js"
     slurp
     (str "self.addEventListener('message', function(e) {\n"
          "  self.postMessage(termcat.core.compile(e.data));\n"
          "}, false);\n")
     (spit "doc/termcat.js"))

(->> (str "<html>"
          "<head>"
          "<meta charset='utf-8'>"
          "<title>Termcat Live Demo</title>"
          "<style>"
          "body { padding: 0; margin: 0 }"
          "iframe { border: none; position: absolute; width: 50vw; height: 100vh; }"
          "#in { left: 0; white-space: pre }"
          "#out { left: 50% }"
          "</style>"
          "</head>"
          "<body>"
          "<iframe id='in' srcdoc='"
          (->> (str "<html><head>"
                    "<link rel='stylesheet' href='termcat-intro.css'>"
                    "<style>body { white-space: pre-wrap; line-height: 100% }</style>"
                    "</head><body>")
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
          "<iframe id='out' srcdoc='"
          (->> (str "<html><head>"
                    "<link rel='stylesheet' href='termcat-intro.css'>"
                    "<link rel='stylesheet' href='http://css-spinners.com/css/spinner/throbber.css'>"
                    "<style>"
                    "html { background: white; display: table; height: 100vh; width: 100vw }"
                    "body { color: gray; display: table-cell; vertical-align: middle; text-align: center }"
                    "</style></head><body>"
                    "<div class='throbber'>Loading preview pane&hellip;</div>"
                    "</body></html>")
               (mapcat escape)
               string/join)
          "'></iframe>"
          "<script src='termcat-demo.js'></script>"
          "</body>"
          "</html>")
     (spit "doc/termcat-demo.html"))

@f1 @f3

(browse "doc/termcat-demo.html")

(System/exit 0)