var galleryLinks = [];
var galleryLoaded;
var currentImage = 0;
var currentImg;

//=============================== HOVER OVER GALLERY ====================================
function galleryHover() {
    $("#galleries").find("a").mouseenter(function () {
        $(this).children(".captionImg").css("display", "inline");
        $(this).children("img").css("background-color", "black");
    }).mouseleave(function () {
        $(this).children(".captionImg").css("display", "none");
        $(this).children("img").css("background-color", "white");
    })
}

