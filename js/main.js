$(function(){
    $(".l_mb_slider").bxSlider({
        mode: "fade",
        auto: true,
        autoControls: true,
        pause: 3000
    });
    $(".l_news_slider").bxSlider({
        pager: false,
        controls:false,
        pause: 3000,
        onSlideAfter: function($slideElement, oldIndex, newIndex){
            $(".l_news_slider>li").removeClass("l_news_on");
            $slideElement.addClass("l_news_on");
        },
        onSliderLoad: function(currentIndex){
            $(".l_news_slider>li").eq(currentIndex+1).addClass("l_news_on");
        }
    });
}); // End