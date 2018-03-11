$(document).ready(function(){

    // smooth scroll
    $('nav ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // nav-drop
    $('.all-categories-btn').click(function(e){
        $(this).closest('li').find('.nav-lvl2').toggleClass('expanded1');
        $('.nav-lvl3').removeClass('expanded2');
    });
    $('.balon-btn').click(function(e){
        $(this).find('.nav-lvl3').toggleClass('expanded2');
    });
    $('.nav-top a').click(function(e){
        e.preventDefault();
    });
    $(window).click(function(e){
        if(($(e.target).attr('class') != 'all-categories-btn') && ($(e.target).attr('class') != 'balon-p')){
            $('.nav-drop').removeClass('expanded1');
            $('.nav-drop').removeClass('expanded2');
        }
    });

    // carousel items
    var carouselAkcijeDiv = $('.carousel-akcije');
    for (var i = 0; i < carouselAkcijeImages.length; i++) {
    	var itemAkcijeDiv = $('<div class="item"></div>');
    	var itemAkcijeImg = $('<img src="' + carouselAkcijeImages[i][0] + '" alt=" '+ carouselAkcijeImages[i][1] + '"></img>');
    	itemAkcijeDiv.append(itemAkcijeImg);
    	carouselAkcijeDiv.append(itemAkcijeDiv);
    }
    var carouselDekorDiv = $('.carousel-dekor');
    for (var i = 0; i < carouselDekorImages.length; i++) {
    	var itemDekorDiv = $('<div class="item"></div>');
    	var itemDekorImg = $('<img src="' + carouselDekorImages[i][0] + '" alt=" '+ carouselDekorImages[i][1] + '"></img>');
    	itemDekorDiv.append(itemDekorImg);
    	carouselDekorDiv.append(itemDekorDiv);
    }

    // carousel
    $('.carousel').slick({
        slidesToShow: 5,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    });

    // gallery images large
    var slideIndex = 1;
    var newImgDiv = $('.product-wrap-large');
    var img = $('.product-image');
    var imgSrcs = [];

    img.click(function(e){
        for(var i = 0; i < img.length; i++){
            imgSrcs[i] = img[i].getAttribute('src');
        }
        $('#modal-box').css('display', 'block');
        var imgNumber = Number($(this).attr('data-target'));
        currentSlide(imgNumber);
    });

    var arrow = $('.arrow');
    arrow.click(function(e){
        var arrowValue = Number($(this).attr('data-target'));
        plusSlides(arrowValue);
    });

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        if(n > imgSrcs.length) {slideIndex = 1};
        if(n < 1) {slideIndex = imgSrcs.length};
        newImgDiv.empty();
        var newImg = $('<img src="' + imgSrcs[slideIndex-1] + '">');
        newImg.addClass('product-image-large');
        newImgDiv.append(newImg);
    }

    var closeBtn = $('.cursor');
    closeBtn.click(function(){
        $('#modal-box').css('display', 'none');
        newImgDiv.empty();
    });
});