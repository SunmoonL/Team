
// 헤더 이펙트
$(function(){
    $('nav').mouseenter(function(){
        $('.sub').show();
        $('.navdown').show();
    });

    $('nav').mouseleave(function(){
        $('.navdown').hide();
        $('.sub').hide();
    });

    $(".sub").hover(function(){
        $(this).children().css({background:"#582b7a"});
    }).mouseleave(function(){
        $(this).children().css({background:"#63318a"});
    });

    $("nav > ul > li").hover(function(){
        $(this).find("ul").css({borderTop:"2px solid #c40f39"});
    }).mouseleave(function(){
        $(this).find("ul").css({borderTop:"2px solid #e3e3e3"});
    });
});