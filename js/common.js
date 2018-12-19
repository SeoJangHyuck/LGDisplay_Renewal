$(function(){
    // Header Event
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(sct>0){
            $("#l_hd, .l_mlogo>a").addClass("l_hd_on");
        }else{
            $("#l_hd, .l_mlogo>a").removeClass("l_hd_on");
        }
    });

    // Search Event
    $(".l_s_open").click(function(){
        $(".l_search").stop().fadeIn(500);
    });
    $(".l_s_close").click(function(){
        $(".l_search").stop().fadeOut(500);
    });
}); // End