javascript:(function() {
  var blacklist = [
    'example.com',
    'github.com',
    'iana.org',
    'raw.githubusercontent.com',
    'githubusercontent.com'
  ];

  var currentURL = window.location.href;
  for (var i = 0; i < blacklist.length; i++) {
    if (currentURL.indexOf(blacklist[i]) !== -1) {
      alert('Zenly isn\'t supported on this website 😓');
      return;
    }
  }

  var blacklist2 = [
    'login.i-ready.com',
    'i-ready.com',
    'vidyard.com',
    'cainc.com',
    'cirriculumassociates.com',
    'i-readyconnect.com',
    'readycentral.com',
    'learnosity.com',
    'cloudfront.net',
    'i-readycentral.com',
    'readyclassroomcentral.com',
    'teacher-toolbox.com',
    'cdn.i-ready.com',
    'cainc.i-ready.com',
    'content.i-ready.com',
    'connect.i-ready.com',
    'i-readyconnect.com',
    'help.i-ready.com',
    'sso.i-ready.com',
    'oel.i-ready.com',
    'resource-library.i-ready.com',
    'teacher-toolbox.i-ready.com',
    'i-readycentral.com',
    'math.readycentral.com',
    'readyclassroomcentral.com',
    'securemail.cainc.com',
    'sftp.i-ready.com',
    'teacher-toolbox.com',
    'pd.i-ready.com',
    'hec.i-ready.com',
    'ca.vidyard.com',
    'play.vidyard.com',
    'share.vidyard.com',
    'cdn.vidyard.com',
    'embed.vidyard.com',
    'support.curriculumassociates.com',
    'videos.curriculumassociates.com',
    'items.learnosity.com',
    'items-va.learnosity.com',
    'assess.learnosity.com',
    'assess-va.learnosity.com',
    'questions.learnosity.com',
    'questions-va.learnosity.com',
    'eventbus.learnosity.com',
    'eventbus-va.learnosity.com',
    'events.learnosity.com',
    'reports.learnosity.com',
    'events-va.learnosity.com',
    'reports-va.learnosity.com',
    'assets.learnosity.com',
    'annotations.learnosity.com',
    'annotations-va.learnosity.com',
    'shared.learnosity.com',
    'dw6y82u65ww8h.cloudfront.net',
    'g.i-ready.com',
    'g-api.i-ready.com',
    'g-accounts.i-ready.com',
    'g-statsc.i-ready.com',
    'learnosity.com'
  ];

  var currentURL = window.location.href;
  for (var i = 0; i < blacklist2.length; i++) {
    if (currentURL.indexOf(blacklist2[i]) !== -1) {
      alert('Zenly is not supported for i-Ready, but it will soon!');
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
    title.textContent = 'Zenly';
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
