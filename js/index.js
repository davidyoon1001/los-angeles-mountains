var carouselIndex = 1;
showCarousel(carouselIndex);

function currentCarousel(n){
    showCarousel(carouselIndex = n);
}

function showCarousel(n){
    var i;
    var carousels = document.getElementsByClassName('myCarousels');
    var dots = document.getElementsByClassName('carousel-dot');
    if (n > carousels.length){
        carouselIndex = 1
    }
    if (n < 1) {
        carouselIndex = carousels.length
    }
    for (i = 0; i < carousels.length; i++) {
        carousels[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    carousels[carouselIndex-1].style.display = "flex";
    dots[carouselIndex-1].className += " dot-active";
}


$(document).ready(function(){  

    $('.nav-history').click(function(){
        $('html, body').animate({
            scrollTop:$('.history-page-wrapper').offset().top -69 
        }, 300);
    });
    $('.nav-team').click(function(){
        $('html, body').animate({
            scrollTop:$('.team-page-wrapper').offset().top -69
        },300);
    });
    $(window).resize(function(){
        if($(this).width() > 1050){
            $('.landing-page-img').attr('src', 'landing-page.jpg');
            $('.history-page-img').attr('src', 'history-page.jpg');
            $('.team-page-img').attr('src', 'team-page.jpg');
        }
        if($(this).width() <= 1050){
            $('.landing-page-img').attr('src', 'landing-page-pad.jpg');
            $('.history-page-img').attr('src', 'history-page-pad.jpg');
            $('.team-page-img').attr('src', 'team-page-pad.jpg');
        }
        if($(this).width() <= 700){
            $('.landing-page-img').attr('src', 'landing-page-phone.jpg');
            $('.history-page-img').attr('src', 'history-page-phone.jpg');
            $('.team-page-img').attr('src', 'team-page-phone.jpg');
        }
    });
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll >= $('.history-page-wrapper').offset().top -71){
            $('.nav-wrapper').addClass("nav-scroll");
        }else{
            $('.nav-wrapper').removeClass("nav-scroll");
        }
    });
    $('.tab1').click(function(){
        if($(this).hasClass('tabs-active')){
            
        }else{
            $('.tab2').removeClass('tabs-active');
            $(this).addClass('tabs-active');
            $('.schedule-content2').removeClass('content-active');
            $('.schedule-content1').addClass('content-active');

        }
    });
    $('.tab2').click(function(){
        if($(this).hasClass('tabs-active')){
            
        }else{
            $('.tab1').removeClass('tabs-active');
            $(this).addClass('tabs-active');
            $('.schedule-content1').removeClass('content-active');
            $('.schedule-content2').addClass('content-active');

        }
    });

    
});