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
    })
});