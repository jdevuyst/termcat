(defproject termcat "0.5"
  :description "Termcat is a markup language for scientific and technical writing"
  :url "https://github.com/jdevuyst/termcat"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main ^:skip-aot termcat.cli-app
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.cache "0.6.3"]
                 [org.clojure/core.match "0.2.0"]
                 [org.clojure/tools.cli "0.3.0-beta1"]]
  :profiles {:uberjar {:aot :all}})