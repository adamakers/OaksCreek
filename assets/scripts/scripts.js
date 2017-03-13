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






})();

  function initMap() {
    var uluru = {lat: 38.896139, lng: -104.850};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: uluru,
      zoomControl: true
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }