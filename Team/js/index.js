$(function () {
    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
      icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
      });
    });
    });

$(function(){
    $(".icon").click(function(){
        $("nav").toggle();
    })
});

// 헤더 이펙트

function detectMediaSize(){
    if(window.matchMedia('all and (min-width: 0px) and (max-width: 500px)').matches){
        $(function(){
            $('nav > ul > li').click(function(){
                $(this).children(".sub").stop().slideToggle();
                $(this).siblings().children(".sub").stop().slideUp();
            });
            $("nav > ul > li").hover(function(){
                $(this).find("ul").css({borderTop:"2px solid #c40f39"});
            }).mouseleave(function(){
                $(this).find("ul").css({borderTop:"2px solid #e3e3e3"});
            });
        });
    }
    else if(window.matchMedia('all and (min-width: 1400px)').matches){
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
    }
}
window.addEventListener('resize',detectMediaSize,false);
detectMediaSize();

