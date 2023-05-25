javascript: (function() {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap';
  link.onload = function() {
    initializeBookmarklet();
  };
  document.head.appendChild(link);

  function initializeBookmarklet() {
    if (document.getElementById('drag-window')) {
      return;
    }
    var o = document.createElement('div');
    o.style.position = 'fixed';
    o.style.top = '0';
    o.style.left = '0';
    o.style.width = '300px';
    o.style.height = '180px';
    o.style.backgroundColor = '#1a1a1a';
    o.style.opacity = '0';
    o.style.borderRadius = '12px';
    o.style.zIndex = '9999';
    o.style.transform = 'scale(0)';
    o.style.transition = 'opacity 0.3s, transform 0.3s';
    document.body.appendChild(o);
    requestAnimationFrame(function() {
      o.style.opacity = '1';
      o.style.transform = 'scale(1)';
    });

    var w = document.createElement('div');
    w.style.position = 'absolute';
    w.style.top = '0';
    w.style.left = '0';
    w.style.width = '100%';
    w.style.height = '30px';
    w.style.backgroundColor = '#333333';
    w.style.borderRadius = '12px 12px 0 0';
    w.style.cursor = 'move';
    o.appendChild(w);

    var title = document.createElement('div');
    title.style.position = 'absolute';
    title.style.top = '5px';
    title.style.left = '5px';
    title.style.color = 'white';
    title.style.fontWeight = 'normal';
    title.style.fontFamily = 'Poppins, sans-serif';
    title.style.fontSize = '14px';
    title.textContent = 'Zenly';
    title.style.userSelect = 'none';
    w.appendChild(title);

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

    var cRed = document.createElement('div');
    cRed.style.position = 'absolute';
    cRed.style.top = '3px';
    cRed.style.right = '3px';
    cRed.style.width = '16px';
    cRed.style.height = '16px';
    cRed.style.backgroundColor = 'red';
    cRed.style.borderRadius = '6px';
    cRed.style.cursor = 'pointer';
    w.appendChild(cRed);

    var alertButton1 = document.createElement('button');
    alertButton1.textContent = 'Alert 1';
    alertButton1.style.position = 'absolute';
    alertButton1.style.top = '60px';
    alertButton1.style.left = '30px';
    alertButton1.style.padding = '10px';
    alertButton1.style.backgroundColor = 'blue';
    alertButton1.style.color = 'white';
    alertButton1.style.border = 'none';
    alertButton1.style.borderRadius = '4px';
    alertButton1.style.cursor = 'pointer';
    o.appendChild(alertButton1);

    var alertButton2 = document.createElement('button');
    alertButton2.textContent = 'Alert 2';
    alertButton2.style.position = 'absolute';
    alertButton2.style.top = '60px';
    alertButton2.style.left = '150px';
    alertButton2.style.padding = '10px';
    alertButton2.style.backgroundColor = 'green';
    alertButton2.style.color = 'white';
    alertButton2.style.border = 'none';
    alertButton2.style.borderRadius = '4px';
    alertButton2.style.cursor = 'pointer';
    o.appendChild(alertButton2);

    function moveWindow(e) {
      var posX = e.clientX - offsetX;
      var posY = e.clientY - offsetY;
      o.style.left = posX + 'px';
      o.style.top = posY + 'px';
    }

    var offsetX = 0;
    var offsetY = 0;
    var dragging = false;

    w.addEventListener('mousedown', function(e) {
      dragging = true;
      offsetX = e.clientX - parseInt(o.style.left);
      offsetY = e.clientY - parseInt(o.style.top);
    });

    window.addEventListener('mouseup', function() {
      dragging = false;
    });

    window.addEventListener('mousemove', function(e) {
      if (dragging) {
        moveWindow(e);
      }
    });

    alertButton1.addEventListener('click', function() {
      alert('Button 1 clicked!');
    });

    alertButton2.addEventListener('click', function() {
      alert('Button 2 clicked!');
    });

    cOrange.addEventListener('click', function() {
      alert('Close button clicked!');
      o.parentNode.removeChild(o);
    });

    cRed.addEventListener('click', function() {
      alert('Minimize button clicked!');
      o.style.opacity = '0';
      o.style.transform = 'scale(0)';
    });
  }
})();
