var inframe;
var outframe;
var inwin;
var indoc;
var inbody;

var busy = false;
var dirty = true;

var reactapp;

function escape(c) {
  switch(c) {
    case "<": return "&lt;"; break;
    case ">": return "&gt;"; break;
    case "&": return "&amp;"; break;
    case "'": return "&apos;"; break;
    case "\"": return "&quot;"; break;
  }
}

function render() {
  if(! busy && dirty) {
    busy = true;
    dirty = false;
    worker.postMessage(inbody.textContent);
  }
}

function scrollToCaret() {
  var el = indoc.createElement('span');
  var sel = inwin.getSelection();

  inwin.getSelection().getRangeAt(0).insertNode(el);

  var minTop = el.offsetTop - inwin.innerHeight + el.offsetHeight;
  if(inwin.scrollY < minTop) {
    inwin.scroll(0, minTop);
  }
}

addEventListener('DOMContentLoaded', function () {
  inframe = document.getElementById('in');
  outframe = document.getElementById('out');
  inwin = inframe.contentWindow;

  inwin.addEventListener('load', function () {
    indoc = inframe.contentDocument;
    inbody = indoc.body;
    indoc.designMode = 'on';
    inwin.focus();
  });

  inwin.addEventListener('keydown', function (e) {
    if(e.keyCode == 13) {
      e.preventDefault();

      indoc.execCommand("insertHTML", false, "\n");

      scrollToCaret();

      dirty = true;
      setTimeout(render, 1);
    }
  });

  inwin.addEventListener('input', function () {
       dirty = true;
       setTimeout(render, 450);
  });

  inwin.addEventListener("paste", function(e) {
    e.preventDefault();

    var text = e.clipboardData.getData("text/plain");
    text = text.replace(/[<>&'"]/g, escape)
    indoc.execCommand("insertHTML", false, text);

    scrollToCaret();

    dirty = true;
    setTimeout(render, 1);
  });

  worker.addEventListener('message', function (e) {
    busy = false;
    React.renderComponent(reactapp({doc: e.data}), outframe.contentDocument.documentElement);
    setTimeout(render, 400);
  }, false);

  reactapp = React.createClass({
    render: function() {
      return React.DOM.html({dangerouslySetInnerHTML:{__html: this.props.doc}});
    }
  });
});