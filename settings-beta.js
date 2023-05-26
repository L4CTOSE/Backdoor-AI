javascript:(function() {
  var dfjk3459mxnnci902 = document.createElement('link');
  dfjk3459mxnnci902.rel = 'stylesheet';
  dfjk3459mxnnci902.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap';
  dfjk3459mxnnci902.onload = function() {
    initializeBookmarklet();
  };
  document.head.appendChild(dfjk3459mxnnci902);
  function initializeBookmarklet() {
    if (document.getElementById('drag-window123456')) {
      return;
    }
    var x234fgf8787erjk = document.createElement('div');
    x234fgf8787erjk.style.position = 'fixed';
    x234fgf8787erjk.style.top = '0';
    x234fgf8787erjk.style.left = '0';
    x234fgf8787erjk.style.width = '300px';
    x234fgf8787erjk.style.height = '180px';
    x234fgf8787erjk.style.backgroundColor = '#1a1a1a';
    x234fgf8787erjk.style.opacity = '0';
    x234fgf8787erjk.style.borderRadius = '12px';
    x234fgf8787erjk.style.zIndex = '9999999999999';
    x234fgf8787erjk.style.transform = 'scale(0)';
    x234fgf8787erjk.style.transition = 'opacity 0.3s, transform 0.3s';
    x234fgf8787erjk.style.boxShadow = '0 0 10px #000';
    document.body.appendChild(x234fgf8787erjk);
    requestAnimationFrame(function() {
      x234fgf8787erjk.style.opacity = '1';
      x234fgf8787erjk.style.transform = 'scale(1)';
    });
    var z9834hjgf67bnm781 = document.createElement('div');
    z9834hjgf67bnm781.style.position = 'absolute';
    z9834hjgf67bnm781.style.top = '0';
    z9834hjgf67bnm781.style.left = '0';
    z9834hjgf67bnm781.style.width = '100%';
    z9834hjgf67bnm781.style.height = '27px';
    z9834hjgf67bnm781.style.backgroundColor = 'rgb(44 44 44)';
    z9834hjgf67bnm781.style.borderRadius = '12px 12px 0 0';
    z9834hjgf67bnm781.style.cursor = 'move';
    x234fgf8787erjk.appendChild(z9834hjgf67bnm781);
    var title2345rtybnm7809 = document.createElement('div');
    title2345rtybnm7809.style.position = 'absolute';
    title2345rtybnm7809.style.top = '4px';
    title2345rtybnm7809.style.left = '50%';
    title2345rtybnm7809.style.transform = 'translateX(-50%)';
    title2345rtybnm7809.style.color = 'white';
    title2345rtybnm7809.style.fontWeight = 'normal';
    title2345rtybnm7809.style.fontFamily = 'Poppins, sans-serif';
    title2345rtybnm7809.style.fontSize = '14px';
    title2345rtybnm7809.textContent = 'Zenly Settings ⚙️';
    title2345rtybnm7809.style.userSelect = 'none';
    z9834hjgf67bnm781.appendChild(title2345rtybnm7809);
    var cOrangehj7890dfgvcxz = document.createElement('div');
    cOrangehj7890dfgvcxz.style.position = 'absolute';
    cOrangehj7890dfgvcxz.style.top = '8px';
    cOrangehj7890dfgvcxz.style.right = '26px';
    cOrangehj7890dfgvcxz.style.width = '12px';
    cOrangehj7890dfgvcxz.style.height = '12px';
    cOrangehj7890dfgvcxz.style.backgroundColor = 'orange';
    cOrangehj7890dfgvcxz.style.borderRadius = '6px';
    cOrangehj7890dfgvcxz.style.cursor = 'pointer';
    z9834hjgf67bnm781.appendChild(cOrangehj7890dfgvcxz);
    var cRedoi78dfgtrhj3456 = document.createElement('div');
    cRedoi78dfgtrhj3456.style.position = 'absolute';
    cRedoi78dfgtrhj3456.style.top = '8px';
    cRedoi78dfgtrhj3456.style.right = '9px';
    cRedoi78dfgtrhj3456.style.width = '12px';
    cRedoi78dfgtrhj3456.style.height = '12px';
    cRedoi78dfgtrhj3456.style.backgroundColor = 'red';
    cRedoi78dfgtrhj3456.style.borderRadius = '6px';
    cRedoi78dfgtrhj3456.style.cursor = 'pointer';
    z9834hjgf67bnm781.appendChild(cRedoi78dfgtrhj3456);
    var alertButton1qwerty1234567 = document.createElement('span');
    alertButton1qwerty1234567.textContent = 'Hey 😎 Zenly Settings Page isn\'t done, yet.';
    alertButton1qwerty1234567.style.position = 'absolute';
    alertButton1qwerty1234567.style.top = '60px';
    alertButton1qwerty1234567.style.left = '30px';
    alertButton1qwerty1234567.style.padding = '10px';
    alertButton1qwerty1234567.style.backgroundColor = 'transparent';
    alertButton1qwerty1234567.style.color = 'white';
    alertButton1qwerty1234567.style.border = 'none';
    alertButton1qwerty1234567.style.cursor = 'pointer';
    x234fgf8787erjk.appendChild(alertButton1qwerty1234567);
    cOrangehj7890dfgvcxz.addEventListener('click', function() {
      x234fgf8787erjk.style.opacity = '0';
      x234fgf8787erjk.style.transform = 'scale(0)';
      setTimeout(function() {
        x234fgf8787erjk.parentNode.removeChild(x234fgf8787erjk);
      }, 300);
    });
    cRedoi78dfgtrhj3456.addEventListener('click', function() {
      x234fgf8787erjk.style.opacity = '0';
      x234fgf8787erjk.style.transform = 'scale(0)';
      setTimeout(function() {
        x234fgf8787erjk.parentNode.removeChild(x234fgf8787erjk);
      }, 300);
    });
    var isDragging = false;
    var startX = 0;
    var startY = 0;
    var initialLeft = 0;
    var initialTop = 0;
    var touchIdentifier = null;
    function handleStart(e) {
      if (e.touches && e.touches.length === 1) {
        e.preventDefault();
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        initialLeft = parseFloat(x234fgf8787erjk.style.left) || 0;
        initialTop = parseFloat(x234fgf8787erjk.style.top) || 0;
        x234fgf8787erjk.style.cursor = 'move';
      } else if (!e.touches) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = parseFloat(x234fgf8787erjk.style.left) || 0;
        initialTop = parseFloat(x234fgf8787erjk.style.top) || 0;
        x234fgf8787erjk.style.cursor = 'move';
      }
    }
    function handleMove(e) {
      if (isDragging && e.touches && e.touches.length === 1) {
        var offsetX = e.touches[0].clientX - startX;
        var offsetY = e.touches[0].clientY - startY;
        x234fgf8787erjk.style.left = initialLeft + offsetX + 'px';
        x234fgf8787erjk.style.top = initialTop + offsetY + 'px';
      } else if (isDragging && !e.touches) {
        var offsetX = e.clientX - startX;
        var offsetY = e.clientY - startY;
        x234fgf8787erjk.style.left = initialLeft + offsetX + 'px';
        x234fgf8787erjk.style.top = initialTop + offsetY + 'px';
      }
    }
    function handleEnd(e) {
      isDragging = false;
      x234fgf8787erjk.style.cursor = 'default';
    }
    z9834hjgf67bnm781.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    z9834hjgf67bnm781.addEventListener('touchstart', handleStart);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
  }
})();
