(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  var entries = [

    { image: './img/logo/html.png', width: '70', height: '70', url: '#', target: '_top', tooltip: 'Html5' },
    { image: './img/logo/css.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'css3' },
    { image: './img/logo/firebase.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'firebase' },
    { image: './img/logo/heroku.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'heroku' },
    { image: './img/logo/angular.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'angular' },
    { image: './img/logo/git.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'git' },
    { image: './img/logo/ionic.png', width: '100', height: '100', url: '#', target: '_top', tooltip: 'ionic' },
    { image: './img/logo/react.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'react' },
    { image: './img/logo/symfony.png', width: '100', height: '100', url: '#', target: '_top', tooltip: 'symfony' },
    { image: './img/logo/php.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'php' },
    { image: './img/logo/JavaScript.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'JavaScript' },
    { image: './img/logo/mongoDb.png', width: '100', height: '100', url: '#', target: '_top', tooltip: 'mongoDb' },
    { image: './img/logo/mysql.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'mysql' },
    { image: './img/logo/nodejs.png', width: '100', height: '100', url: '#', target: '_top', tooltip: 'nodejs' }

  ];

  var settings = {

    entries: entries,
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#212529',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 2,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#fff',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic 
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal',//bold
    tooltipFontStyle: 'normal',//italic 
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10

  };


  $('#tagcloud').svg3DTagCloud(settings);




})(jQuery); // End of use strict


