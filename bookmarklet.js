javascript:(function() {
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
    o.id = 'drag-window';
    o.style.position = 'fixed';
    o.style.top = '0';
    o.style.left = '0';
    o.style.width = '300px';
    o.style.height = '180px';
    o.style.backgroundColor = '#1a1a1a';
    o.style.opacity = '0';
    o.style.borderRadius = '12px';
    o.style.zIndex = '9999999999999';
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
    w.style.height = '27px';
    w.style.backgroundColor = '#2c2c2c';
    w.style.borderRadius = '12px 12px 0 0';
    w.style.cursor = 'move';
    o.appendChild(w);
    var title = document.createElement('div');
    title.style.position = 'absolute';
    title.style.top = '4px';
    title.style.left = '50%';
    title.style.transform = 'translateX(-50%)';
    title.style.color = 'white';
    title.style.fontWeight = 'normal';
    title.style.fontFamily = 'Poppins, sans-serif';
    title.style.fontSize = '14px';
    title.textContent = 'Zenly';
    title.style.userSelect = 'none';
    w.appendChild(title);
    var cGray = document.createElement('div');
    cGray.style.position = 'absolute';
    cGray.style.top = '8px';
    cGray.style.left = '9px';
    cGray.style.width = '12px';
    cGray.style.height = '12px';
    cGray.style.backgroundColor = 'gray';
    cGray.style.borderRadius = '6px';
    cGray.style.cursor = 'pointer';
    w.appendChild(cGray);
    var cOrange = document.createElement('div');
    cOrange.style.position = 'absolute';
    cOrange.style.top = '8px';
    cOrange.style.right = '26px';
    cOrange.style.width = '12px';
    cOrange.style.height = '12px';
    cOrange.style.backgroundColor = 'orange';
    cOrange.style.borderRadius = '6px';
    cOrange.style.cursor = 'pointer';
    w.appendChild(cOrange);
    var cRed = document.createElement('div');
    cRed.style.position = 'absolute';
    cRed.style.top = '8px';
    cRed.style.right = '9px';
    cRed.style.width = '12px';
    cRed.style.height = '12px';
    cRed.style.backgroundColor = 'red';
    cRed.style.borderRadius = '6px';
    cRed.style.cursor = 'pointer';
    w.appendChild(cRed);

    var alertButton1 = document.createElement('button');
    alertButton1.textContent = 'Zenly Chat';
    alertButton1.style.position = 'absolute';
    alertButton1.style.top = '60px';
    alertButton1.style.left = '30px';
    alertButton1.style.padding = '10px';
    alertButton1.style.backgroundColor = '#383838';
    alertButton1.style.color = 'white';
    alertButton1.style.border = 'none';
    alertButton1.style.borderRadius = '4px';
    alertButton1.style.cursor = 'pointer';
    o.appendChild(alertButton1);

    var alertButton2 = document.createElement('button');
    alertButton2.textContent = 'Test Button';
    alertButton2.style.position = 'absolute';
    alertButton2.style.top = '60px';
    alertButton2.style.left = '140px';
    alertButton2.style.padding = '10px';
    alertButton2.style.backgroundColor = '#383838';
    alertButton2.style.color = 'white';
    alertButton2.style.border = 'none';
    alertButton2.style.borderRadius = '4px';
    alertButton2.style.cursor = 'pointer';
    o.appendChild(alertButton2);

    var settingsMenu = null;

function openSettingsMenu() {
  if (settingsMenu) {
    return;
  }
  settingsMenu = document.createElement('div');
  settingsMenu.style.position = 'absolute';
  settingsMenu.style.top = '27px';
  settingsMenu.style.left = '0';
  settingsMenu.style.width = '100%';
  settingsMenu.style.height = '153px';
  settingsMenu.style.backgroundColor = 'white';
  settingsMenu.style.color = 'black';
  settingsMenu.style.fontFamily = 'Poppins, sans-serif';
  settingsMenu.style.padding = '10px';
  settingsMenu.style.overflow = 'hidden';
  settingsMenu.style.borderTopLeftRadius = '0';
  settingsMenu.style.borderTopRightRadius = '0';
  settingsMenu.style.borderBottomLeftRadius = '12px';
  settingsMenu.style.borderBottomRightRadius = '12px';
  settingsMenu.innerHTML = `
    <pre>
      <code>
        <html>
          <head>
            <style>
              /* zenly css styles here */
            </style>
          </head>
          <body>
            <p> Zenly Settings Page is </p>
            <p> being worked on.. </p>
            <script>
              /* zenly js code here */
            </script>
          </body>
        </html>
      </code>
    </pre>
  `;
  o.appendChild(settingsMenu);

  cGray.removeEventListener('click', openSettingsMenu);
  cGray.addEventListener('click', closeSettingsMenu);
}
    function closeSettingsMenu() {
      if (settingsMenu) {
        settingsMenu.remove();
        settingsMenu = null;
      }

      cGray.removeEventListener('click', closeSettingsMenu);
      cGray.addEventListener('click', openSettingsMenu);
    }

    cGray.addEventListener('click', openSettingsMenu);

    cOrange.addEventListener('click', function() {
      o.style.opacity = '0';
      o.style.transform = 'scale(0)';
      setTimeout(function() {
        o.parentNode.removeChild(o);
      }, 300);
    });

    cRed.addEventListener('click', function() {
      o.style.opacity = '0';
      o.style.transform = 'scale(0)';
      setTimeout(function() {
        o.parentNode.removeChild(o);
      }, 300);
    });

    alertButton1.addEventListener('click', function() {
      alert('yo');
    });

    alertButton2.addEventListener('click', function() {
      alert('test');
    });

    var isDragging = false;
    var startX = 0;
    var startY = 0;
    var initialLeft = 0;
    var initialTop = 0;
    var touchIdentifier = null;

    function handleStart(e) {
      e.preventDefault();
      if (e.touches && e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        initialLeft = parseInt(o.style.left || '0', 10);
        initialTop = parseInt(o.style.top || '0', 10);
        touchIdentifier = e.touches[0].identifier;
      } else if (!e.touches) {
        isDragging = true;
        startX = e.pageX;
        startY = e.pageY;
        initialLeft = parseInt(o.style.left || '0', 10);
        initialTop = parseInt(o.style.top || '0', 10);
      }
    }

    function handleMove(e) {
      e.preventDefault();
      if (!isDragging) {
        return;
      }
      var pageX;
      var pageY;
      if (e.touches && e.touches.length === 1 && e.touches[0].identifier === touchIdentifier) {
        pageX = e.touches[0].pageX;
        pageY = e.touches[0].pageY;
      } else if (!e.touches) {
        pageX = e.pageX;
        pageY = e.pageY;
      } else {
        return;
      }
      var deltaX = pageX - startX;
      var deltaY = pageY - startY;
      o.style.left = initialLeft + deltaX + 'px';
      o.style.top = initialTop + deltaY + 'px';
    }

    function handleEnd() {
      isDragging = false;
      touchIdentifier = null;
    }

    w.addEventListener('mousedown', handleStart);
    w.addEventListener('touchstart', handleStart, { passive: false });
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);
  }
})();
