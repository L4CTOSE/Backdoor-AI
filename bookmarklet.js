javascript: (function() {
  var o = document.createElement('div');
  o.style.position = 'fixed';
  o.style.top = '0';
  o.style.left = '0';
  o.style.width = '250px';
  o.style.height = '150px';
  o.style.backgroundColor = 'black';
  o.style.opacity = '1';
  o.style.borderRadius = '10px';
  o.style.zIndex = '9999';
  document.body.appendChild(o);

  var w = document.createElement('div');
  w.style.position = 'absolute';
  w.style.top = '0';
  w.style.left = '0';
  w.style.width = '100%';
  w.style.height = '25px';
  w.style.backgroundColor = 'rgba(0,0,0,0.8)';
  w.style.borderRadius = '10px 10px 0 0';
  w.style.cursor = 'move';
  o.appendChild(w);

  var c = document.createElement('div');
  c.style.position = 'absolute';
  c.style.top = '3px';
  c.style.right = '3px';
  c.style.width = '16px';
  c.style.height = '16px';
  c.style.backgroundColor = 'red';
  c.style.borderRadius = '50%';
  c.style.cursor = 'pointer';
  w.appendChild(c);

  c.addEventListener('click', function() {
    o.parentNode.removeChild(o);
  });

  var d = false,
    x = 0,
    y = 0;

  w.addEventListener('mousedown', function(e) {
    d = true;
    x = e.clientX;
    y = e.clientY;
    o.style.cursor = 'move';
  });

  window.addEventListener('mousemove', function(e) {
    if (d) {
      var t = e.clientX - x;
      var n = e.clientY - y;
      var a = parseFloat(o.style.left) || 0;
      var r = parseFloat(o.style.top) || 0;
      o.style.left = a + t + 'px';
      o.style.top = r + n + 'px';
      x = e.clientX;
      y = e.clientY;
    }
  });

  window.addEventListener('mouseup', function() {
    d = false;
    o.style.cursor = 'default';
  });

  var style = document.createElement('style');
  style.innerHTML = `
    .drag-window {
      position: fixed;
      top: 0;
      left: 0;
      width: 250px;
      height: 150px;
      background-color: black;
      opacity: 1;
      border-radius: 10px;
      z-index: 9999;
    }
    .drag-window-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 25px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 10px 10px 0 0;
      cursor: move;
    }
    .drag-window-close {
      position: absolute;
      top: 3px;
      right: 3px;
      width: 16px;
      height: 16px;
      background-color: red;
      border-radius: 50%;
      cursor: pointer;
    }
  `;

  document.head.appendChild(style);
  o.classList.add('drag-window');
  w.classList.add('drag-window-bar');
  c.classList.add('drag-window-close');
})();
