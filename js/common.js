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

    // Mobile GNB Event
    $(".l_gnb_btn").click(function(){
        $("#l_gnb_wrap").stop().slideToggle(400);
        $("body, .l_gnb_btn").toggleClass("l_gnb_ac");
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

    // PC GNB Event
    $("#l_gnb_pc>li").on("mouseenter focusin", function(){
        $(this).children("a").addClass("l_gnb_on");
        $(this).find(".l_gnb_2depth_pc").stop().slideDown(400);
    });
    $("#l_gnb_pc>li").on("mouseleave focusout", function(){
        $(this).children("a").removeClass("l_gnb_on");
        $(this).find(".l_gnb_2depth_pc").stop().slideUp(400);
    });
    $(".l_gnb_2depth_pc>li").on("mouseenter focusin", function(){
        $(this).children("a").addClass("l_gnb_on");
        $(this).children("ul").stop().fadeIn(400);
    });
    $(".l_gnb_2depth_pc>li").on("mouseleave focusout", function(){
        $(this).children("a").removeClass("l_gnb_on");
        $(this).children("ul").stop().fadeOut(400);
    });
    
    // Search Event
    var mouseCount = 0;
    $(".l_s_open").click(function(){
        mouseCount++;
        if(mouseCount%2==1){
            $(".l_search").stop().fadeIn(500);
        }else{
            $(".l_search").stop().fadeOut(500);
        };
    });
    $(".l_s_close").click(function(){
        $(".l_search").stop().fadeOut(500);
        mouseCount = 0;
    });
}); // End