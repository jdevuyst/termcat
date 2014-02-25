var inframe;
var outframe;
var inbody;

var busy = false;
var dirty = true;

var reactapp;

function render() {
  if(! busy && dirty) {
    busy = true;
    dirty = false;
    worker.postMessage(inbody.textContent);
  }
}

addEventListener('DOMContentLoaded', function () {
  inframe = document.getElementById('in');
  outframe = document.getElementById('out');

  worker.addEventListener('message', function (e) {
    busy = false;
    React.renderComponent(reactapp({doc: e.data}), outframe.contentDocument.documentElement);
    setTimeout(render, 400);
  }, false);

  inframe.contentWindow.addEventListener('keydown', function (e) {
    if(e.keyCode == 13) {
      var sel = inframe.contentWindow.getSelection();

      sel.getRangeAt(0).deleteContents();

      var linebreak = inframe.contentDocument.createElement("span");
      linebreak.appendChild(inframe.contentDocument.createTextNode('\n'));
      sel.getRangeAt(0).insertNode(linebreak);
      sel.removeAllRanges();

      var newrange = inframe.contentDocument.createRange();
      newrange.setStartAfter(linebreak);
      sel.addRange(newrange);

      var minTop = linebreak.offsetTop - inframe.contentWindow.innerHeight + linebreak.offsetHeight * 2;
      if(inframe.contentWindow.scrollY < minTop) {
        inframe.contentWindow.scroll(0, minTop);
      }

      e.preventDefault();

      dirty = true;
      setTimeout(render, 1);
    }
  });

  inframe.contentWindow.addEventListener('input', function () {
       dirty = true;
       setTimeout(render, 350);
  });

  reactapp = React.createClass({
    render: function() {
      return React.DOM.html({dangerouslySetInnerHTML:{__html: this.props.doc}});
    }
  });
});

addEventListener('load', function () {
  inbody = inframe.contentDocument.body;
  inframe.contentDocument.designMode = 'on';
  inframe.contentWindow.focus();
});