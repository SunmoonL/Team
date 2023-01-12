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
        $(this).children().css({background:"purple"});
    }).mouseleave(function(){
        $(this).children().css({background:"blueviolet"});
    });

    $("nav > ul > li").hover(function(){
        $(this).find("ul").css({borderTop:"2px solid #c40f39"});
    }).mouseleave(function(){
        $(this).find("ul").css({borderTop:"2px solid #e3e3e3"});
    });
});