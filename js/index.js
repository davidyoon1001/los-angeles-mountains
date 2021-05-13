var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('carousel-dot');
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slide.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
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
        if($(this).width() <= 500){
            alert('shit');
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
    
});