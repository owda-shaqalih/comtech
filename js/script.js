$(window).on("load", function() {
    $("#preloader").fadeOut();
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once:true,
    });
});

$(document).ready(function(){

    $('.btn_search').click(function(){
        var search = $('.bk_search_box')
        var thisclick = $('.btn_search')
        if(thisclick.hasClass('active') != true){
            thisclick.addClass('active');
            search.addClass('open');
            }
            else{
                 thisclick.removeClass('active');
                 search.removeClass('open');
                }
        
        });

    $('.btn_close_search').click(function(){
        $('.btn_search').removeClass('active');
        $('.bk_search_box').removeClass('open');
    });

    /*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });


    $('#clients_slider').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow:"<button type='button' class='slick-prev'><i class='far fa-chevron-right'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='far fa-chevron-left'></i></button>",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
          }
        }
      ]
    });

    $("#opportunities_slide").owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            575:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }

        },
        dots:true,
        nav:false,
        autoplay:false,

    })

    $('#partner_slider').slick({
      dots: false,
      arrows:false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });


    $("#clients_list").owlCarousel({
        loop:true,
        margin:15,
        items:1,
        responsiveClass:true,
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="far fa-chevron-right"></i>',
            '<i class="far fa-chevron-left"></i>'],

    })
})