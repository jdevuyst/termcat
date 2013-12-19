# Termcat

[Termcat](https://github.com/jdevuyst/termcat) is a markup language optimized for scientific and technical writing. It compiles to HTML and MathML (Using [MathJax](http://mathjax.com)). To generate PDFs, [Prince](http://www.princexml.com) can be used.

Termcat takes inspiration from LaTeX and Markdown. From Markdown it copies the user-friendly syntax for titles, lists, links, emphasis, and so on. Termcat aims to be more powerful, however. Like LaTeX, Termcat is fully programmable and it also comes with special syntax for typographic features that are difficult to unlock using plain Markdown or HTML.

For more information, please see the [Termcat manual](https://rawgithub.com/jdevuyst/termcat/master/doc/termcat-intro.html).

[My blog](https://jdevuyst.blogspot.com/search/label/Termcat) also has more details.

## Usage

<pre>
Usage: java -jar termcat.jar [options] <document[.tc]>

The HTML output is stored in document.html.

  -b, --browse   Open HTML output in browser
  -w, --watch    Watch document for changes and recompile when changed
  -v, --verbose  Use verbose output
</pre>