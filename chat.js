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
    x234fgf8787erjk.id = 'drag-window123456';
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
    title2345rtybnm7809.textContent = 'Zenly Chat 💬 Broken';
    title2345rtybnm7809.style.userSelect = 'none';
    z9834hjgf67bnm781.appendChild(title2345rtybnm7809);

    var cRedoi78dfgtrhj3456 = document.createElement('div');
    cRedoi78dfgtrhj3456.style.position = 'absolute';
    cRedoi78dfgtrhj3456.style.top = '8px';
    cRedoi78dfgtrhj3456.style.right = '9px';
    cRedoi78dfgtrhj3456.style.width = '12px';
    cRedoi78dfgtrhj3456.style.height = '12px';
    cRedoi78dfgtrhj3456.style.backgroundColor = 'red';
    cRedoi78dfgtrhj3456.style.borderRadius = '6px';
    cRedoi78dfgtrhj3456.style.cursor = 'pointer';
    cRedoi78dfgtrhj3456.addEventListener('click', function() {
      x234fgf8787erjk.style.transform = 'scale(0)';
      x234fgf8787erjk.style.opacity = '0';
      setTimeout(function() {
        x234fgf8787erjk.remove();
      }, 300);
    });
    z9834hjgf67bnm781.appendChild(cRedoi78dfgtrhj3456);

    var messageContainer = document.createElement('div');
    messageContainer.style.position = 'absolute';
    messageContainer.style.top = '35px';
    messageContainer.style.left = '15px';
    messageContainer.style.width = 'calc(100% - 30px)';
    messageContainer.style.padding = '10px';
    messageContainer.style.overflowY = 'auto';
    messageContainer.style.height = 'calc(100% - 75px)';
    x234fgf8787erjk.appendChild(messageContainer);

    var inputBox = document.createElement('input');
    inputBox.style.position = 'absolute';
    inputBox.style.bottom = '15px';
    inputBox.style.left = '15px';
    inputBox.style.width = 'calc(100% - 30px)';
    inputBox.style.padding = '10px';
    inputBox.style.backgroundColor = '#333';
    inputBox.style.borderRadius = '8px';
    inputBox.style.border = 'none';
    inputBox.style.color = 'white';
    inputBox.style.fontFamily = 'Poppins, sans-serif';
    inputBox.style.fontSize = '14px';
    inputBox.style.fontWeight = 'normal';
    inputBox.style.boxSizing = 'border-box';
    inputBox.style.outline = 'none';
    inputBox.placeholder = 'Type a message...';
    inputBox.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        var message = inputBox.value;
        if (message.trim() !== '') {
          addMessage(message, 'right');
          sendMessage(message);
          inputBox.value = '';
        }
      }
    });
    x234fgf8787erjk.appendChild(inputBox);

    var isDragging = false;
    var startX = 0;
    var startY = 0;
    var initialLeft = 0;
    var initialTop = 0;
    var touchIdentifier = null;

    function handleStart(e) {
      if (e.type === 'touchstart') {
        if (e.touches.length !== 1) {
          return;
        }
        touchIdentifier = e.touches[0].identifier;
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
      } else {
        startX = e.pageX;
        startY = e.pageY;
      }
      isDragging = true;
      initialLeft = parseFloat(x234fgf8787erjk.style.left);
      initialTop = parseFloat(x234fgf8787erjk.style.top);
    }

    function handleMove(e) {
      if (!isDragging) {
        return;
      }

      e.preventDefault();

      if (e.type === 'touchmove') {
        for (var i = 0; i < e.changedTouches.length; i++) {
          if (e.changedTouches[i].identifier === touchIdentifier) {
            var touch = e.changedTouches[i];
            var deltaX = touch.pageX - startX;
            var deltaY = touch.pageY - startY;
            x234fgf8787erjk.style.left = initialLeft + deltaX + 'px';
            x234fgf8787erjk.style.top = initialTop + deltaY + 'px';
            break;
          }
        }
      } else {
        var deltaX = e.pageX - startX;
        var deltaY = e.pageY - startY;
        x234fgf8787erjk.style.left = initialLeft + deltaX + 'px';
        x234fgf8787erjk.style.top = initialTop + deltaY + 'px';
      }
    }

    function handleEnd(e) {
      if (e.type === 'touchend') {
        for (var i = 0; i < e.changedTouches.length; i++) {
          if (e.changedTouches[i].identifier === touchIdentifier) {
            isDragging = false;
            break;
          }
        }
      } else {
        isDragging = false;
      }
    }

    z9834hjgf67bnm781.addEventListener('mousedown', handleStart);
    z9834hjgf67bnm781.addEventListener('touchstart', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
    document.addEventListener('touchcancel', handleEnd);

    function addMessage(message, position) {
      var messageElement = document.createElement('div');
      messageElement.style.marginBottom = '10px';
      messageElement.style.textAlign = position === 'left' ? 'left' : 'right';
      messageElement.style.color = 'white';
      messageElement.style.fontFamily = 'Poppins, sans-serif';
      messageElement.style.fontSize = '14px';
      messageElement.style.fontWeight = 'normal';
      messageElement.textContent = message;
      messageContainer.appendChild(messageElement);
    }

    function sendMessage(message) {
      console.log('Message sent:', message);
    }
  }
})();
