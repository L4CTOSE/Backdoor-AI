javascript:(function() {
  var blacklist = [
    'example.com',
    'github.com',
    'iana.org',
    'raw.githubusercontent.com',
    'githubusercontent.com',
    'discord.com'
  ];
  var blacklist2 = [
    'login.i-ready.com',
    'i-ready.com',
  ];
  var currentURL = window.location.href;
  for (var i = 0; i < blacklist2.length; i++) {
    if (currentURL.indexOf(blacklist2[i]) !== -1) {
      javascript:(function() {  var toastContainer = document.createElement('div');  toastContainer.style.position = 'fixed';  toastContainer.style.bottom = '10px';  toastContainer.style.left = '10px';  toastContainer.style.width = '300px';  toastContainer.style.padding = '10px';  toastContainer.style.backgroundColor = '#333';  toastContainer.style.color = '#fff';  toastContainer.style.fontFamily = 'Arial, sans-serif';  toastContainer.style.fontSize = '16px';  toastContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';  toastContainer.style.transition = 'transform 0.3s ease';  toastContainer.style.transform = 'translateX(350px)';  toastContainer.style.zIndex = '99999999999999';    var toastMessage = document.createTextNode('Sorry! Zenly isn\'t support for i-Ready, but it will soon! 🥳');    toastContainer.appendChild(toastMessage);    document.body.appendChild(toastContainer);    setTimeout(function() {    toastContainer.style.transform = 'translateX(0)';  }, 100);    setTimeout(function() {    toastContainer.style.transform = 'translateX(0px)';    setTimeout(function() {      document.body.removeChild(toastContainer);    }, 300);  }, 3000);})();
      return;
    }
  }
  var currentURL = window.location.href;
  for (var i = 0; i < blacklist.length; i++) {
    if (currentURL.indexOf(blacklist[i]) !== -1) {
      javascript:(function() {  var toastContainer = document.createElement('div');  toastContainer.style.position = 'fixed';  toastContainer.style.bottom = '10px';  toastContainer.style.left = '10px';  toastContainer.style.width = '300px';  toastContainer.style.padding = '10px';  toastContainer.style.backgroundColor = '#333';  toastContainer.style.color = '#fff';  toastContainer.style.fontFamily = 'Arial, sans-serif';  toastContainer.style.fontSize = '16px';  toastContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';  toastContainer.style.transition = 'transform 0.3s ease';  toastContainer.style.transform = 'translateX(350px)';  toastContainer.style.zIndex = '99999999999999';    var toastMessage = document.createTextNode('Whoops! Zenly can\'t connect to this domain because its flagged as unsupported. Please use Zenly on a different website!');    toastContainer.appendChild(toastMessage);    document.body.appendChild(toastContainer);    setTimeout(function() {    toastContainer.style.transform = 'translateX(0)';  }, 100);    setTimeout(function() {    toastContainer.style.transform = 'translateX(0px)';    setTimeout(function() {      document.body.removeChild(toastContainer);    }, 300);  }, 12000);})();
      return;
    }
  }
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
    o.style.zIndex = '9999999999999';
    o.style.transform = 'scale(0)';
    o.style.transition = 'opacity 0.3s, transform 0.3s';
    o.style.boxShadow = '0 0 10px #000';
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
    w.style.backgroundColor = 'rgb(44 44 44)';
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
    title.textContent = 'Zenly Dev Mode';
    title.style.userSelect = 'none';
    w.appendChild(title);
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
    var cGray = document.createElement('div');
    cGray.style.position = 'absolute';
    cGray.style.top = '8px';
    cGray.style.right = '280px';
    cGray.style.width = '12px';
    cGray.style.height = '12px';
    cGray.style.backgroundColor = 'gray';
    cGray.style.borderRadius = '6px';
    cGray.style.cursor = 'pointer';
    w.appendChild(cGray);
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
    cGray.addEventListener('click', function() {
(function() { var dfjk3459mxnnci902 = document.createElement('link'); dfjk3459mxnnci902.rel = 'stylesheet'; dfjk3459mxnnci902.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap'; dfjk3459mxnnci902.onload = function() { initializeBookmarklet(); }; document.head.appendChild(dfjk3459mxnnci902); function initializeBookmarklet() { if (document.getElementById('drag-window123456')) { return; } var x234fgf8787erjk = document.createElement('div'); x234fgf8787erjk.style.position = 'fixed'; x234fgf8787erjk.style.top = '0'; x234fgf8787erjk.style.left = '0'; x234fgf8787erjk.style.width = '300px'; x234fgf8787erjk.style.height = '180px'; x234fgf8787erjk.style.backgroundColor = '#1a1a1a'; x234fgf8787erjk.style.opacity = '0'; x234fgf8787erjk.style.borderRadius = '12px'; x234fgf8787erjk.style.zIndex = '9999999999999'; x234fgf8787erjk.style.transform = 'scale(0)'; x234fgf8787erjk.style.transition = 'opacity 0.3s, transform 0.3s'; x234fgf8787erjk.style.boxShadow = '0 0 10px #000'; document.body.appendChild(x234fgf8787erjk); requestAnimationFrame(function() { x234fgf8787erjk.style.opacity = '1'; x234fgf8787erjk.style.transform = 'scale(1)'; }); var z9834hjgf67bnm781 = document.createElement('div'); z9834hjgf67bnm781.style.position = 'absolute'; z9834hjgf67bnm781.style.top = '0'; z9834hjgf67bnm781.style.left = '0'; z9834hjgf67bnm781.style.width = '100%'; z9834hjgf67bnm781.style.height = '27px'; z9834hjgf67bnm781.style.backgroundColor = 'rgb(44 44 44)'; z9834hjgf67bnm781.style.borderRadius = '12px 12px 0 0'; z9834hjgf67bnm781.style.cursor = 'move'; x234fgf8787erjk.appendChild(z9834hjgf67bnm781); var title2345rtybnm7809 = document.createElement('div'); title2345rtybnm7809.style.position = 'absolute'; title2345rtybnm7809.style.top = '4px'; title2345rtybnm7809.style.left = '50%'; title2345rtybnm7809.style.transform = 'translateX(-50%)'; title2345rtybnm7809.style.color = 'white'; title2345rtybnm7809.style.fontWeight = 'normal'; title2345rtybnm7809.style.fontFamily = 'Poppins, sans-serif'; title2345rtybnm7809.style.fontSize = '14px'; title2345rtybnm7809.textContent = 'Zenly Settings ⚙️'; title2345rtybnm7809.style.userSelect = 'none'; z9834hjgf67bnm781.appendChild(title2345rtybnm7809); var cOrangehj7890dfgvcxz = document.createElement('div'); cOrangehj7890dfgvcxz.style.position = 'absolute'; cOrangehj7890dfgvcxz.style.top = '8px'; cOrangehj7890dfgvcxz.style.right = '26px'; cOrangehj7890dfgvcxz.style.width = '12px'; cOrangehj7890dfgvcxz.style.height = '12px'; cOrangehj7890dfgvcxz.style.backgroundColor = 'orange'; cOrangehj7890dfgvcxz.style.borderRadius = '6px'; cOrangehj7890dfgvcxz.style.cursor = 'pointer'; z9834hjgf67bnm781.appendChild(cOrangehj7890dfgvcxz); var cRedoi78dfgtrhj3456 = document.createElement('div'); cRedoi78dfgtrhj3456.style.position = 'absolute'; cRedoi78dfgtrhj3456.style.top = '8px'; cRedoi78dfgtrhj3456.style.right = '9px'; cRedoi78dfgtrhj3456.style.width = '12px'; cRedoi78dfgtrhj3456.style.height = '12px'; cRedoi78dfgtrhj3456.style.backgroundColor = 'red'; cRedoi78dfgtrhj3456.style.borderRadius = '6px'; cRedoi78dfgtrhj3456.style.cursor = 'pointer'; z9834hjgf67bnm781.appendChild(cRedoi78dfgtrhj3456); var alertButton1qwerty1234567 = document.createElement('span'); alertButton1qwerty1234567.textContent = 'Hey 😎 Zenly Settings Page isn\'t done, yet.'; alertButton1qwerty1234567.style.position = 'absolute'; alertButton1qwerty1234567.style.top = '60px'; alertButton1qwerty1234567.style.left = '30px'; alertButton1qwerty1234567.style.padding = '10px'; alertButton1qwerty1234567.style.backgroundColor = 'transparent'; alertButton1qwerty1234567.style.color = 'white'; alertButton1qwerty1234567.style.border = 'none'; alertButton1qwerty1234567.style.cursor = 'pointer'; x234fgf8787erjk.appendChild(alertButton1qwerty1234567); cOrangehj7890dfgvcxz.addEventListener('click', function() { x234fgf8787erjk.style.opacity = '0'; x234fgf8787erjk.style.transform = 'scale(0)'; setTimeout(function() { x234fgf8787erjk.parentNode.removeChild(x234fgf8787erjk); }, 300); }); cRedoi78dfgtrhj3456.addEventListener('click', function() { x234fgf8787erjk.style.opacity = '0'; x234fgf8787erjk.style.transform = 'scale(0)'; setTimeout(function() { x234fgf8787erjk.parentNode.removeChild(x234fgf8787erjk); }, 300); }); var isDragging = false; var startX = 0; var startY = 0; var initialLeft = 0; var initialTop = 0; var touchIdentifier = null; function handleStart(e) { if (e.touches && e.touches.length === 1) { e.preventDefault(); isDragging = true; startX = e.touches[0].clientX; startY = e.touches[0].clientY; initialLeft = parseFloat(x234fgf8787erjk.style.left) || 0; initialTop = parseFloat(x234fgf8787erjk.style.top) || 0; x234fgf8787erjk.style.cursor = 'move'; } else if (!e.touches) { isDragging = true; startX = e.clientX; startY = e.clientY; initialLeft = parseFloat(x234fgf8787erjk.style.left) || 0; initialTop = parseFloat(x234fgf8787erjk.style.top) || 0; x234fgf8787erjk.style.cursor = 'move'; } } function handleMove(e) { if (isDragging && e.touches && e.touches.length === 1) { var offsetX = e.touches[0].clientX - startX; var offsetY = e.touches[0].clientY - startY; x234fgf8787erjk.style.left = initialLeft + offsetX + 'px'; x234fgf8787erjk.style.top = initialTop + offsetY + 'px'; } else if (isDragging && !e.touches) { var offsetX = e.clientX - startX; var offsetY = e.clientY - startY; x234fgf8787erjk.style.left = initialLeft + offsetX + 'px'; x234fgf8787erjk.style.top = initialTop + offsetY + 'px'; } } function handleEnd(e) { isDragging = false; x234fgf8787erjk.style.cursor = 'default'; } z9834hjgf67bnm781.addEventListener('mousedown', handleStart); window.addEventListener('mousemove', handleMove); window.addEventListener('mouseup', handleEnd); z9834hjgf67bnm781.addEventListener('touchstart', handleStart); window.addEventListener('touchmove', handleMove); window.addEventListener('touchend', handleEnd); } })();    });
    var alertButton1 = document.createElement('button');
    alertButton1.textContent = 'Chat with Zenly AI';
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
(function() { var dfjk3459mxnnci902 = document.createElement('link'); dfjk3459mxnnci902.rel = 'stylesheet'; dfjk3459mxnnci902.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap'; dfjk3459mxnnci902.onload = function() { initializeBookmarklet(); }; document.head.appendChild(dfjk3459mxnnci902); function initializeBookmarklet() { if (document.getElementById('drag-window123456')) { return; } var x234fgf8787erjk = document.createElement('div'); x234fgf8787erjk.id = 'drag-window123456'; x234fgf8787erjk.style.position = 'fixed'; x234fgf8787erjk.style.top = '0'; x234fgf8787erjk.style.left = '0'; x234fgf8787erjk.style.width = '300px'; x234fgf8787erjk.style.height = '180px'; x234fgf8787erjk.style.backgroundColor = '#1a1a1a'; x234fgf8787erjk.style.opacity = '0'; x234fgf8787erjk.style.borderRadius = '12px'; x234fgf8787erjk.style.zIndex = '9999999999999'; x234fgf8787erjk.style.transform = 'scale(0)'; x234fgf8787erjk.style.transition = 'opacity 0.3s, transform 0.3s'; x234fgf8787erjk.style.boxShadow = '0 0 10px #000'; document.body.appendChild(x234fgf8787erjk); requestAnimationFrame(function() { x234fgf8787erjk.style.opacity = '1'; x234fgf8787erjk.style.transform = 'scale(1)'; }); var z9834hjgf67bnm781 = document.createElement('div'); z9834hjgf67bnm781.style.position = 'absolute'; z9834hjgf67bnm781.style.top = '0'; z9834hjgf67bnm781.style.left = '0'; z9834hjgf67bnm781.style.width = '100%'; z9834hjgf67bnm781.style.height = '27px'; z9834hjgf67bnm781.style.backgroundColor = 'rgb(44 44 44)'; z9834hjgf67bnm781.style.borderRadius = '12px 12px 0 0'; z9834hjgf67bnm781.style.cursor = 'move'; x234fgf8787erjk.appendChild(z9834hjgf67bnm781); var title2345rtybnm7809 = document.createElement('div'); title2345rtybnm7809.style.position = 'absolute'; title2345rtybnm7809.style.top = '4px'; title2345rtybnm7809.style.left = '50%'; title2345rtybnm7809.style.transform = 'translateX(-50%)'; title2345rtybnm7809.style.color = 'white'; title2345rtybnm7809.style.fontWeight = 'normal'; title2345rtybnm7809.style.fontFamily = 'Poppins, sans-serif'; title2345rtybnm7809.style.fontSize = '14px'; title2345rtybnm7809.textContent = 'Zenly Chat 💬 Broken'; title2345rtybnm7809.style.userSelect = 'none'; z9834hjgf67bnm781.appendChild(title2345rtybnm7809); var cRedoi78dfgtrhj3456 = document.createElement('div'); cRedoi78dfgtrhj3456.style.position = 'absolute'; cRedoi78dfgtrhj3456.style.top = '8px'; cRedoi78dfgtrhj3456.style.right = '9px'; cRedoi78dfgtrhj3456.style.width = '12px'; cRedoi78dfgtrhj3456.style.height = '12px'; cRedoi78dfgtrhj3456.style.backgroundColor = 'red'; cRedoi78dfgtrhj3456.style.borderRadius = '6px'; cRedoi78dfgtrhj3456.style.cursor = 'pointer'; cRedoi78dfgtrhj3456.addEventListener('click', function() { x234fgf8787erjk.style.transform = 'scale(0)'; x234fgf8787erjk.style.opacity = '0'; setTimeout(function() { x234fgf8787erjk.remove(); }, 300); }); z9834hjgf67bnm781.appendChild(cRedoi78dfgtrhj3456); var messageContainer = document.createElement('div'); messageContainer.style.position = 'absolute'; messageContainer.style.top = '35px'; messageContainer.style.left = '15px'; messageContainer.style.width = 'calc(100% - 30px)'; messageContainer.style.padding = '10px'; messageContainer.style.overflowY = 'auto'; messageContainer.style.height = 'calc(100% - 75px)'; x234fgf8787erjk.appendChild(messageContainer); var inputBox = document.createElement('input'); inputBox.style.position = 'absolute'; inputBox.style.bottom = '15px'; inputBox.style.left = '15px'; inputBox.style.width = 'calc(100% - 30px)'; inputBox.style.padding = '10px'; inputBox.style.backgroundColor = '#333'; inputBox.style.borderRadius = '8px'; inputBox.style.border = 'none'; inputBox.style.color = 'white'; inputBox.style.fontFamily = 'Poppins, sans-serif'; inputBox.style.fontSize = '14px'; inputBox.style.fontWeight = 'normal'; inputBox.style.boxSizing = 'border-box'; inputBox.style.outline = 'none'; inputBox.placeholder = 'Type a message...'; inputBox.addEventListener('keypress', function(event) { if (event.keyCode === 13) { var message = inputBox.value; if (message.trim() !== '') { addMessage(message, 'right'); sendMessage(message); inputBox.value = ''; } } }); x234fgf8787erjk.appendChild(inputBox); var isDragging = false; var startX = 0; var startY = 0; var initialLeft = 0; var initialTop = 0; var touchIdentifier = null; function handleStart(e) { if (isDragging) { return; } e.preventDefault(); if (e.touches) { var touch = e.touches[0]; startX = touch.clientX; startY = touch.clientY; touchIdentifier = touch.identifier; } else { startX = e.clientX; startY = e.clientY; } initialLeft = parseInt(x234fgf8787erjk.style.left, 10) || 0; initialTop = parseInt(x234fgf8787erjk.style.top, 10) || 0; isDragging = true; window.addEventListener('mousemove', handleMove); window.addEventListener('touchmove', handleMove, { passive: false }); window.addEventListener('mouseup', handleEnd); window.addEventListener('touchend', handleEnd); } function handleMove(e) { if (!isDragging) { return; } e.preventDefault(); var pageX, pageY; if (e.touches && e.touches[0].identifier === touchIdentifier) { var touch = Array.from(e.touches).find(function(t) { return t.identifier === touchIdentifier; }); pageX = touch.clientX; pageY = touch.clientY; } else if (!e.touches) { pageX = e.clientX; pageY = e.clientY; } if (pageX !== undefined && pageY !== undefined) { var diffX = pageX - startX; var diffY = pageY - startY; x234fgf8787erjk.style.left = initialLeft + diffX + 'px'; x234fgf8787erjk.style.top = initialTop + diffY + 'px'; } } function handleEnd(e) { isDragging = false; window.removeEventListener('mousemove', handleMove); window.removeEventListener('touchmove', handleMove); window.removeEventListener('mouseup', handleEnd); window.removeEventListener('touchend', handleEnd); } z9834hjgf67bnm781.addEventListener('mousedown', handleStart); z9834hjgf67bnm781.addEventListener('touchstart', handleStart); } function addMessage(message, position) { var messageElement = document.createElement('div'); messageElement.style.marginBottom = '10px'; messageElement.style.padding = '6px 10px'; messageElement.style.borderRadius = '4px'; messageElement.style.display = 'inline-block'; messageElement.style.maxWidth = '70%'; messageElement.style.fontFamily = 'Poppins, sans-serif'; messageElement.style.fontSize = '14px'; messageElement.style.wordWrap = 'break-word'; messageElement.textContent = message; if (position === 'left') { messageElement.style.backgroundColor = '#222'; messageElement.style.color = 'white'; messageElement.style.alignSelf = 'flex-start'; } else { messageElement.style.backgroundColor = '#2979FF'; messageElement.style.color = 'white'; messageElement.style.alignSelf = 'flex-end'; } messageContainer.appendChild(messageElement); messageContainer.scrollTop = messageContainer.scrollHeight; } function sendMessage(message) {  } })();    });
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
        initialLeft = parseFloat(o.style.left) || 0;
        initialTop = parseFloat(o.style.top) || 0;
        o.style.cursor = 'move';
      } else if (!e.touches) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = parseFloat(o.style.left) || 0;
        initialTop = parseFloat(o.style.top) || 0;
        o.style.cursor = 'move';
      }
    }

    function handleMove(e) {
      if (isDragging && e.touches && e.touches.length === 1) {
        var offsetX = e.touches[0].clientX - startX;
        var offsetY = e.touches[0].clientY - startY;
        o.style.left = initialLeft + offsetX + 'px';
        o.style.top = initialTop + offsetY + 'px';
      } else if (isDragging && !e.touches) {
        var offsetX = e.clientX - startX;
        var offsetY = e.clientY - startY;
        o.style.left = initialLeft + offsetX + 'px';
        o.style.top = initialTop + offsetY + 'px';
      }
    }

    function handleEnd(e) {
      isDragging = false;
      o.style.cursor = 'default';
    }

    w.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    w.addEventListener('touchstart', handleStart);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
  }
})();
