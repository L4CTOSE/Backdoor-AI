javascript:(function() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

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
  c.style.borderRadius = '6px';
  c.style.cursor = 'pointer';
  w.appendChild(c);

  c.addEventListener('click', function() {
    o.parentNode.removeChild(o);
  });

  var cOrange = document.createElement('div');
  cOrange.style.position = 'absolute';
  cOrange.style.top = '3px';
  cOrange.style.right = '25px';
  cOrange.style.width = '16px';
  cOrange.style.height = '16px';
  cOrange.style.backgroundColor = 'orange';
  cOrange.style.borderRadius = '6px';
  cOrange.style.cursor = 'pointer';
  w.appendChild(cOrange);

  cOrange.addEventListener('click', function() {
    o.parentNode.removeChild(o);
  });

  var middleText = document.createElement('p');
  middleText.textContent = 'Zenly Failed to inject due to this websites coding 💔';
  middleText.style.color = 'white';
  middleText.style.textAlign = 'center';
  middleText.style.position = 'absolute';
  middleText.style.top = '50%';
  middleText.style.left = '50%';
  middleText.style.transform = 'translate(-50%, -50%)';
  middleText.style.fontFamily = 'Poppins, sans-serif';
  o.appendChild(middleText);

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
      border-radius: 6px;
      cursor: pointer;
    }

    .drag-window-close:hover {
      background-color: darkred;
    }

    .drag-window-minimize {
      position: absolute;
      top: 3px;
      right: 25px;
      width: 16px;
      height: 16px;
      background-color: orange;
      border-radius: 6px;
      cursor: pointer;
    }

    .drag-window-minimize:hover {
      background-color: darkorange;
    }
  `;

  document.head.appendChild(style);
})();
