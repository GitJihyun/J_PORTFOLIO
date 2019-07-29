window.addEventListener('scroll', function() {
    var el = document.querySelector('header');
    
    if(window.scrollY >= 550) el.classList.add('event');
    else el.classList.remove('event');
  });
