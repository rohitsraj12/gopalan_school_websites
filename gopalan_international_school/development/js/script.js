$(document).ready(function(){
    var urls = $("#capture-url").attr('data-url');

    alert(urls);

    $("a").attt("href").prepend(urls);



    // mobile toggle button function
    $("#hamberger").click(function(){
        $(".body__header-main-nav").slideToggle(400);
        
    }) 
})




jQuery(document).ready(function($) {
    "use strict";
    $('#customers-testimonials').owlCarousel( {
            loop: true,
            center: true,
            items: 3,
            margin: 30,
            autoplay: true,
            dots:true,
        nav:true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    });