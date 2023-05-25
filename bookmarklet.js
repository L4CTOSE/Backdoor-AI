javascript:(function() {
  if (document.getElementById('drag-window')) {
    var toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.top = '-100px';
    toast.style.left = '10px';
    toast.style.width = '200px';
    toast.style.padding = '10px';
    toast.style.backgroundColor = '#f44336';
    toast.style.color = '#ffffff';
    toast.style.borderRadius = '4px';
    toast.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    toast.style.zIndex = '9998';
    toast.style.opacity = '0';
    toast.style.transition = 'top 0.3s, opacity 0.3s';

    var icon = document.createElement('span');
    icon.style.display = 'inline-block';
    icon.style.width = '20px';
    icon.style.height = '20px';
    icon.style.marginRight = '5px';
    icon.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23ffffff\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\'%3E%3Cpath d=\'M0 0h24v24H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 0h24v24H0z\' fill=\'none\'/%3E%3Cpath d=\'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z\'/%3E%3C/svg%3E")';

    var message = document.createElement('span');
    message.textContent = 'Error! Zenly is already injected..';

    var closeBtn = document.createElement('span');
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '0';
    closeBtn.style.right = '0';
    closeBtn.style.padding = '5px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.textContent = '';
    closeBtn.addEventListener('click', function() {
      toast.style.top = '-100px';
      toast.style.opacity = '0';
      setTimeout(function() {
        toast.parentNode.removeChild(toast);
      }, 300);
    });

    toast.appendChild(icon);
    toast.appendChild(message);
    toast.appendChild(closeBtn);

    document.body.appendChild(toast);

    setTimeout(function() {
      toast.style.top = '10px';
      toast.style.opacity = '1';
    }, 100);

    setTimeout(function() {
      toast.style.top = '-100px';
      toast.style.opacity = '0';
      setTimeout(function() {
        toast.parentNode.removeChild(toast);
      }, 300);
    }, 3500);

    return;
  }

  var o = document.createElement('div');
  o.id = 'drag-window';
  o.style.position = 'fixed';
  o.style.top = '0';
  o.style.left = '0';
  o.style.width = '300px';
  o.style.height = '180px';
  o.style.backgroundColor = 'black';
  o.style.opacity = '0';
  o.style.borderRadius = '12px';
  o.style.zIndex = '9998';
  o.style.transform = 'scale(0.1)';
  o.style.transition = 'opacity 0.3s, transform 0.3s';

  document.body.appendChild(o);

  var w = document.createElement('div');
  w.style.position = 'absolute';
  w.style.top = '0';
  w.style.left = '0';
  w.style.width = '100%';
  w.style.height = '30px';
  w.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  w.style.borderRadius = '12px 12px 0 0';
  w.style.cursor = 'move';
  o.appendChild(w);

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
  cRed.addEventListener('click', function() {
    o.style.opacity = '0';
    o.style.transform = 'scale(0.1)';
    setTimeout(function() {
      o.parentNode.removeChild(o);
    }, 300);
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
    o.style.opacity = '0';
    o.style.transform = 'scale(0.1)';
    setTimeout(function() {
      o.parentNode.removeChild(o);
    }, 300);
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
      var t = e.clientX - x,
        n = e.clientY - y,
        a = parseFloat(o.style.left) || 0,
        r = parseFloat(o.style.top) || 0;
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
  style.innerHTML = '.drag-window{position:fixed;top:0;left:0;width:300px;height:180px;background-color:black;opacity:1;border-radius:12px;z-index:9997;}.drag-window-bar{position:absolute;top:0;left:0;width:100%;height:30px;background-color:rgba(0, 0, 0, 0.8);border-radius:12px 12px 0 0;cursor:move;}.drag-window-close{position:absolute;top:3px;right:3px;width:16px;height:16px;border-radius:6px;cursor:pointer;}';
  document.head.appendChild(style);

  o.classList.add('drag-window');
  w.classList.add('drag-window-bar');
  cRed.classList.add('drag-window-close');
  cOrange.classList.add('drag-window-close');

  setTimeout(function() {
    o.style.opacity = '1';
    o.style.transform = 'scale(1)';
  }, 100);
})();
