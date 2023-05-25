javascript:(function() {
  if (document.getElementById('drag-window')) {
    return;
  }
  
  var o = document.createElement('div');
  o.style.position = 'fixed';
  o.style.top = '0';
  o.style.left = '0';
  o.style.width = '300px';
  o.style.height = '180px';
  o.style.backgroundColor = 'black';
  o.style.opacity = '0';
  o.style.borderRadius = '12px';
  o.style.zIndex = '9999';
  o.style.transform = 'scale(0)';
  o.style.transition = 'opacity 0.3s, transform 0.3s';
  
  document.body.appendChild(o);
  
  setTimeout(function() {
    o.style.opacity = '1';
    o.style.transform = 'scale(1)';
  }, 10);
  
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
  
  cOrange.addEventListener('click', function() {
    o.parentNode.removeChild(o);
  });
  
  var isDragging = false;
  var startX = 0;
  var startY = 0;
  
  w.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    o.style.cursor = 'move';
  });
  
  window.addEventListener('mousemove', function(e) {
    if (isDragging) {
      var offsetX = e.clientX - startX;
      var offsetY = e.clientY - startY;
      var left = parseFloat(o.style.left) || 0;
      var top = parseFloat(o.style.top) || 0;
      o.style.left = left + offsetX + 'px';
      o.style.top = top + offsetY + 'px';
      startX = e.clientX;
      startY = e.clientY;
    }
  });
  
  window.addEventListener('mouseup', function() {
    isDragging = false;
    o.style.cursor = 'default';
  });
  
  var style = document.createElement('style');
  style.innerHTML =
    '.drag-window{position:fixed;top:0;left:0;width:300px;height:180px;background-color:black;opacity:1;border-radius:12px;z-index:9999;}' +
    '.drag-window-bar{position:absolute;top:0;left:0;width:100%;height:30px;background-color:rgba(0, 0, 0, 0.8);border-radius:12px 12px 0 0;cursor:move;}' +
    '.drag-window-close{position:absolute;top:3px;right:25px;width:16px;height:16px;background-color:orange;border-radius:6px;cursor:pointer;}' +
    '.drag-window-second-close{position:absolute;top:3px;right:3px;width:16px;height:16px;background-color:red;border-radius:6px;cursor:pointer;}';
  document.head.appendChild(style);
  
  o.classList.add('drag-window');
  w.classList.add('drag-window-bar');
  cOrange.classList.add('drag-window-close');
  cRed.classList.add('drag-window-second-close');
})();
