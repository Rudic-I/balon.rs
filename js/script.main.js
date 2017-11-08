$(document).ready(function(){

    // smooth scroll
    $('nav ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
        responsive:{
            0:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
})