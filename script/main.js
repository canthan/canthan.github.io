$(document).ready(function() {

    var mouseOn = false;

    //=============================== PORTFOLIO SLIDEIN DESCRIPTION ====================================
    $(".portfolio__a").mouseenter(function(){
        var that = $(this).children(".portfolio__caption");
        var thatImg = $(this).children("img");

        var h = thatImg.css("height");
        var h_div = $(this).css("height");
        $(this).css("height",h_div);

        that.css("position","relative").css("top","-" + h).css("height",h);
        that.slideDown("slow",function(){
                that.css("display", "block");
                mouseOn = true;
        });
        that.mouseleave(function () {
            if (mouseOn) {
                $(this).slideUp("slow", function () {
                });
                mouseOn = false;
            }
        });
    });
});

window.addEventListener("resize", function() {
    $(".portfolio__a").css("height", "auto");
});