(function() {
  if (document.getElementById('drag-window')) {
    showNotification('Zenly is already injected');
    return;
  }

  function showNotification(message) {
    var notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '50%';
    notification.style.left = '50%';
    notification.style.transform = 'translate(-50%, -50%)';
    notification.style.padding = '12px 24px';
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    notification.style.color = 'white';
    notification.style.borderRadius = '6px';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    notification.style.zIndex = '9999';
    document.body.appendChild(notification);

    setTimeout(function() {
      notification.style.opacity = '1';
      setTimeout(function() {
        notification.style.opacity = '0';
        setTimeout(function() {
          notification.parentNode.removeChild(notification);
        }, 300);
      }, 3000);
    }, 100);
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

  var content = document.createElement('div');
  content.style.position = 'absolute';
  content.style.top = '40px';
  content.style.left = '20px';
  content.style.color = 'white';
  o.appendChild(content);

  var text = document.createElement('p');
  text.textContent = 'This is a draggable window!';
  content.appendChild(text);

  var button = document.createElement('button');
  button.textContent = 'test button';
  button.addEventListener('click', function() {
    alert('hello');
  });
  content.appendChild(button);

  var d = false, x = 0, y = 0;

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
