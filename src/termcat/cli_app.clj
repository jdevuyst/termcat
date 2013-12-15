(ns termcat.cli-app
  (:require [clojure.core.reducers :as r]
            [clojure.edn :as edn]
            [clojure.string :as string]
            [clojure.tools.cli :as cli]
            [clojure.java.io :as io]
            [clojure.java.browse]
            [termcat.core :as c]
            [termcat.rewrite :as rw])
  (:import [java.nio.file FileSystems StandardWatchEventKinds]))

(defn file-exists? [filename]
  (-> filename io/file .exists))

(defn browse [file-path focus?]
  (case (.. java.lang.System (getProperty "os.name"))
    "Mac OS X" (.. java.lang.Runtime
                   getRuntime
                   (exec (-> ["open"]
                             (cond-> (not focus?) (conj "-g"))
                             (conj (str file-path))
                             into-array)))
    :else (clojure.java.browse/browse-url
            (.. file-path toUri toString))))

  (def cur-path (.toPath (io/file ".")))

  (defn resolve-path [filename]
    (.resolve cur-path (.toPath (io/file filename))))

  (defn watch-file [file-path change-event]
    (try
      (let [watcher (.. FileSystems getDefault newWatchService)
            dir-path (.getParent file-path)
            registry (.register dir-path
                                watcher
                                (into-array [StandardWatchEventKinds/ENTRY_CREATE
                                             StandardWatchEventKinds/ENTRY_MODIFY
                                             StandardWatchEventKinds/ENTRY_DELETE]))]
        (loop []
          (let [watch-key (.take watcher)]
            (if (->> watch-key
                     .pollEvents
                     (r/filter #(not= (.kind %)
                                      StandardWatchEventKinds/OVERFLOW))
                     (r/filter #(= file-path
                                   (.resolve dir-path (.context %))))
                     (r/map #(if (= (.kind %) StandardWatchEventKinds/ENTRY_DELETE)
                               (throw (Exception. "File deleted"))))
                     (r/reduce (constantly (reduced true)) false))
              (change-event))
            (if-not (.reset watch-key)
              (throw (Exception. "Invalid watch key")))
            (recur))))
      (catch Exception x nil)))

  (def cli-options [["-b"
                     "--browse"
                     "Open HTML output in browser"]
                    ["-w"
                     "--watch"
                     "Watch file for changes and recompile when changed"
                     :flag true]
                    ["-v"
                     "--verbose"
                     "Use verbose output"
                     :flag true]])

  (defn usage [options-summary]
    (->> ["Convert documents from the Termcat markup language to HTML."
          ""
          "Usage: java -jar termcat.jar [options] <document[.tc]>"
          ""
          "The HTML output is stored in document.html."
          ""
          options-summary
          ""
          "See https://github.com/jdevuyst/termcat for more information."]
         (string/join \newline)))

  (defn error-msg [errors]
    (str "The following errors occurred while parsing your command:\n\n"
         (string/join \newline errors)))

  (defn exit [status msg]
    (println msg)
    (System/exit status))

  (defn -main [& args]
    (let [{:keys [options arguments errors summary]} (cli/parse-opts args cli-options)]
      (cond
        (:help options) (exit 0 (usage summary))
        (-> arguments count (not= 1)) (exit 1 (usage summary))
        (-> arguments first file-exists? not) (exit 1 (error-msg (conj errors (str "File not found: \"" (first arguments) \"))))
        errors (exit 1 (error-msg errors)))
      (let [tc-filename (first arguments)
            tc-path (resolve-path tc-filename)
            prefix (->> arguments
                        first
                        (re-find #"^(.+?)(?:\.[Tt][Cc])?$")
                        second)
            html-filename (str prefix ".html")
            html-path (resolve-path html-filename)
            verbose? (get options :verbose options)
            watch? (:watch options)
            browse? (:browse options)
            cache (rw/cache)
            main-f #(let [source (slurp tc-filename)]
                      (spit html-filename
                            (if verbose?
                              (time (c/compile source cache))
                              (c/compile source cache)))
                      (when verbose?
                        (println "Cache size:" (count @cache) "items")))]
        (when verbose?
          (print "Compiling... "))
        (main-f)
        (when verbose?
          (println "HTML output stored in" html-filename))
        (when browse?
          (browse html-path true))
        (when watch?
          (when verbose?
            (println "Watching for changes..."))
          (watch-file tc-path
                      #(do
                         (if verbose?
                           (print "Recompiling... "))
                         (main-f)
                         (when browse?
                           (browse html-path false))))
          (exit 2 (error-msg [(str "Lost track of " tc-filename " (exiting)")]))))))