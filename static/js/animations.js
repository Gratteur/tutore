$(document).ready(function(){
    $('.parallax').parallax();
  });

/*$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 0 & scroll < 400) {
        $(".stickyi").addClass("m1");
    }
    if (scroll >= 400 & scroll < 800) {
        $(".stickyi").removeClass("m1").addClass("m2");
    }
    if (scroll >= 800 & scroll < 1200) {
        $(".stickyi").removeClass("m2").addClass("m3");
    }
    if (scroll >= 1600 & scroll < 2000) {
        $(".stickyi").removeClass().addClass("stickyi m4");
    }
    if (scroll >= 2400 & scroll < 2800) {
        $(".stickyi").removeClass().addClass("stickyi m5");
    }
    if (scroll >= 2800 & scroll < 3200) {
        $(".stickyi").removeClass().addClass("stickyi m6");
    }
});*/

 $(window).scroll(function () {
        var offset = $(document).scrollTop()
        var opacity = 1;
        if (offset <= 3000) {
            opacity = 0;
        } else if (offset > 3000 & offset <= 4000) {
            opacity = (offset - 3000) / 1000;
        }
        else {
            opacity = 1;
        }
        $('body').css('background', 'rgba(0, 0, 0, '+opacity+'');
    });
