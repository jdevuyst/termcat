(ns recompile-docs
  (:require [clojure.java.shell :refer (sh)]))

(future (sh "lein" "run" "doc/termcat-intro"))

(sh "lein" "cljx")
(sh "lein" "cljsbuild" "once")

(sh "rm" "-r" "doc/js")
(future (sh "cp" "-r" "target/js" "target/termcat.js" "target/termcat.js.map" "doc/"))

(->> (str "<html>"
          "<head>"
          "<meta charset='utf-8'>"
          "<title>Termcat ClojureScript Demo</title>"
          "<style>"
          "iframe { width: 100%; height: 100%; }"
          "</style>"
          "<script src='termcat.js'></script>"
          "<script id='in' type='text/termcat'>"
          (slurp "doc/termcat-intro.tc")
          "</script>"
          "</head>"
          "<body>"
          "<iframe id='out'></iframe>"
          "<script>"
          "var input = document.getElementById('in').innerText;"
          "var output = termcat.core.compile(input);"
          "var iframe = document.getElementById('out');"
          "iframe.srcdoc = output;"
          "</script>"
          "</body>"
          "</html>")
     (spit "doc/termcat-demo.html"))