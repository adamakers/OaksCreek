(function(){
  


  function navbarScrolled(){
    const topNav = document.querySelector('.navbar');
    let scrollPos = window.scrollY;

    if (scrollPos > 60) {
      topNav.classList.add('navbar-scrolled')
    } else {
      topNav.classList.remove('navbar-scrolled');
    }
  }

  window.addEventListener('scroll', navbarScrolled);




})()