
/******************************
    PAGE FUNCTIONS
******************************/

//Change header syling when scrolled, or onload
function navbarScrolled(){
  const topNav = document.querySelector('.navbar');
  let scrollPos = window.scrollY;

  if (scrollPos > 60) {
    topNav.classList.add('navbar-scrolled')
  } else {
    topNav.classList.remove('navbar-scrolled');
  }
}


/******************************
    EVENT LISTENERS
******************************/
window.onload = navbarScrolled;
window.addEventListener('scroll', navbarScrolled);
