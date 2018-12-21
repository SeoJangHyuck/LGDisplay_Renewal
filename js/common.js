$(function(){
    // Header Scroll Event
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(sct>0){
            $("#l_hd, .l_mlogo>a").addClass("l_hd_on");
        }else{
            $("#l_hd, .l_mlogo>a").removeClass("l_hd_on");
        }
    });

    // GNB Event
    $(".l_gnb_btn").click(function(){
        $("#l_gnb_wrap").stop().slideToggle(400);
        $(this).toggleClass("l_gnb_ac");
    });
    $("#l_gnb>li").click(function(){
        $(this).children(".l_gnb_depthbox").addClass("l_gnb_on");
        $(".l_gnb_btn").addClass("l_gnb_on");
    });
    $(".l_gnb_back").click(function(){
        $(".l_gnb_depthbox, .l_gnb_btn").removeClass("l_gnb_on");
        return false;
    });
    $(".l_gnb_2depth>li>a").click(function(){
        $(this).addClass("l_gnb_on");
        $(this).parent().siblings().children("a").removeClass("l_gnb_on");
        $(this).next("ul").stop().slideToggle(400);
        $(this).parent().siblings().find("ul").stop().slideUp(400);
    });

    // Search Event
    $(".l_s_open").click(function(){
        $(".l_search").stop().fadeIn(500);
    });
    $(".l_s_close").click(function(){
        $(".l_search").stop().fadeOut(500);
    });
}); // End