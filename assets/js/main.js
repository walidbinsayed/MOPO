jQuery(document).ready(function($){

  // Header fixed on scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".main-header").addClass("sticky");
    } else {
      $(".main-header").removeClass("sticky");
    }
  });

  //Menu active

  //Initiate Nice select
  $('select').niceSelect();

  //Carousel JS
  $(".tour_type-carousel").owlCarousel({
    items: 2,
    margin: 15,
    loop: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplaySpeed: 2000,
    fluidSpeed:true,
    navSpeed: 2000,
    dragEndSpeed: 2000,
    nav: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>"
    ]
  });

  //Review Carousel JS
  $(".review_carousel").owlCarousel({
    items: 2,
    margin: 75,
    loop: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplaySpeed: 2000,
    fluidSpeed:true,
    navSpeed: 2000,
    dragEndSpeed: 2000,
    nav: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>"
    ],
    responsiveClass:true,
    responsive:{
      0:{
          items:1
      },
      768:{
          items:1
      },
      991:{
          items:2
      }
    }
  });

  //Blog posts Carousel JS
  $(".blog_posts-carousel").owlCarousel({
    items: 3,
    margin: 60,
    loop: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplaySpeed: 2000,
    fluidSpeed:true,
    navSpeed: 2000,
    dragEndSpeed: 2000,
    nav: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>"
    ],
    responsiveClass:true,
    responsive:{
      0:{
          items:1
      },
      767:{
          items:1
      },
      768:{
          items:2
      },
      991:{
          items:3
      }
    }
  });

  //CounterUp JS
  $('.counter').counterUp({
      delay: 10,
      time: 2000
  });

  // Jquery UI datepicker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  //AOS init
  AOS.init({
    duration: 1200,
  })

  // Scroll to top js
  $('.scroll_to-top').click(function() {
   $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var bannerScroll = $('.hero-section').outerHeight(true);
    if (scroll >= bannerScroll) {
      $('.scroll_to-top').css('opacity','0.5');
    } else {
      $('.scroll_to-top').css('opacity','0');
    }
  });

  //Scroll to a section js
  $(function() {
    $('.header-menu li a').bind('click',function(event){
      var $anchor = $(this);

      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 100
      }, 1500,'easeInOutExpo');
      event.preventDefault();
    });
  });

  // Preloader js
  $(window).load(function() {
    $(".site_preloader").fadeOut("slow");;
  });

  //Dropdown click enable
  jQuery('.navbar-nav > li > a.dropdown-toggle').unbind('click').click(function() {
     if (jQuery(this).attr('href') != '' && jQuery(this).attr('href') != '#') location.href = jQuery(this).attr('href');
   });


});
