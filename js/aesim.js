$(function(){

    $('.nav__item').click(function(){
        $('.nav__item').removeClass('on');
        $(this).toggleClass('on');
        $('.menu').addClass('on');
    });

    
    $('.menu').click(function(){
        let navItem = $('.nav__item').hasClass('on');
        $(this).toggleClass('on');
        $('.nav').toggleClass('on');
        if (!navItem) {
            $('.nav__item').addClass('on');
        } else {
            $('.nav__item').removeClass('on');
        }
    });
});