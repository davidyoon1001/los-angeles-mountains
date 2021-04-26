$(document).ready(function(){  
    $('.nav-history').click(function(){
        $('html, body').animate({
            scrollTop:$('.history-page-wrapper').offset().top -80 
        }, 300);
    });
    $('.nav-team').click(function(){
        $('html, body').animate({
            scrollTop:$('.team-page-wrapper').offset().top -80
        },300);
    });
    if('html, body'.offset().top > 80){
        alert('shit');
    }
});