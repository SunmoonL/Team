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

//faq
$(function(){
    $(".faq").click(function(){
        $(this).siblings().stop().slideToggle("fast");
        $(this).parents().siblings().children(".answer").stop().slideUp("fast");
        $(this).toggleClass("active");
        $(this).parents().siblings().children(".faq").removeClass("active");
    });
});

$(function(){
    $("#pager > a").eq(0).click(function(){
        $("#list1").show();
        $("#list2,#list3,#list4,#list5").hide();
        $($(this)).addClass("on");
        $($(this)).siblings().removeClass("on");
    })
})

$(function(){
    $("#pager > a").eq(1).click(function(){
        $("#list2").show();
        $("#list1,#list3,#list4,#list5").hide();
        $($(this)).addClass("on");
        $($(this)).siblings().removeClass("on");
    })
})

$(function(){
    $("#subtab > li").eq(0).click(function(){
        $("#list1").show();
        $("#list2,#list3,#list4,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).on("click", function () {
            $("#list1").show();
            $("#list2,#list3,#list4,#list5").hide();
            $($(this)).addClass("on");
            $($(this)).siblings().removeClass("on");
        });
        $("#pager > a").eq(1).show().removeClass("on");
    })
})

$(function(){
    $("#subtab > li").eq(1).click(function(){
        $("#list3").show();
        $("#list1,#list2,#list4,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    })
})

$(function(){
    $("#subtab > li").eq(2).click(function(){
        $("#list4").show();
        $("#list2,#list1,#list3,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    })
})

$(function(){
    $("#subtab > li").eq(3).click(function(){
        $("#list5").show();
        $("#list2,#list3,#list4,#list1").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    })
})
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

