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
        });
        
    }
    else if(window.matchMedia('all and (min-width: 1100px)').matches){
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

$(function(){
    $(".faq").click(function(){
        $(this).siblings().slideToggle("fast");
        $(this).parents().siblings().children(".answer").slideUp("fast");
    });
});

//footer
$(document).ready(function(){
    $('.business_btn').click(function(){
        $('.business').toggle();
        if($('.business').css('display')=='block'){
            $('.business_btn i').css('transform','rotate(0)')
            $('footer ul:first').css('padding-top','200px')
        }else{
            $('.business_btn i').css('transform','rotate(180deg)')
            $('footer ul:first').css('padding-top','75px')
        }
    })
})

