
/******************************
    PAGE FUNCTIONS
******************************/

/******************************
    GOOGLE MAPS
******************************/

function initMap() {
  const uluru = {lat: 38.896139, lng: -104.850};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru,
    zoomControl: true,
    scrollwheel: false
  });
  
  let marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

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
