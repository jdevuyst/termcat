var inframe;
var outframe;
var inbody;

var busy = false;
var dirty = true;

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
    outframe.srcdoc = e.data;
    setTimeout(render, 400);
  }, false);

  inframe.contentWindow.addEventListener('keydown', function (e) {
    if(e.keyCode == 13) {
      var sel = inframe.contentWindow.getSelection();

      sel.getRangeAt(0).deleteContents();

      var linebreak = inframe.contentDocument.createTextNode('\n');

      sel.getRangeAt(0).insertNode(linebreak);
      sel.removeAllRanges();

      var newrange = inframe.contentDocument.createRange();
      newrange.setStartAfter(linebreak);
      sel.addRange(newrange);

      e.preventDefault();

      dirty = true;
      setTimeout(render, 1);
    }
  });

  inframe.contentWindow.addEventListener('input', function () {
       dirty = true;
       setTimeout(render, 300);
  });
});

addEventListener('load', function () {
  inbody = inframe.contentDocument.body;
  inframe.contentDocument.designMode = 'on';
  inframe.contentWindow.focus();
  render();
});