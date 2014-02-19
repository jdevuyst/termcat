(defproject termcat "0.5.1"
  :description "Termcat is a markup language for scientific and technical writing"
  :url "https://github.com/jdevuyst/termcat"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/core.cache "0.6.3"]
                 [org.clojure/core.match "0.2.0"]
                 [org.clojure/tools.cli "0.3.0-beta1"]]
  :plugins [[com.keminglabs/cljx "0.3.2"]
            [lein-cljsbuild "1.0.2"]]
  :source-paths ["src/cljx" "src/clj" "target/clj"]
  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/clj"
                   :rules :clj}
                  {:source-paths ["src/cljx"]
                   :output-path "target/cljs"
                   :rules :cljs}]}
  :main ^:skip-aot termcat.cli-app
  :profiles {:uberjar {:aot :all}}
  :cljsbuild {:builds [{:source-paths ["src/clj" "target/cljs"]
                        :compiler {:output-dir "target/js"
                                   :output-to "target/termcat.js"
                                   :source-map "target/termcat.js.map"
                                   :optimizations :advanced
                                   :elide-asserts true
                                   :pretty-print true}}]})