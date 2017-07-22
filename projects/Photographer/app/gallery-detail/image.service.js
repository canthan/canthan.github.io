'use strict';

angular.
module('galleryDetail').
service('ImageChangerService', ['$location','$anchorScroll', function($location,$anchorScroll){

    this.setImageNext = function(currentImage){
        if (currentImage < galleryLinks.length - 1) {
            currentImage++;
        }
        return currentImage;
    };

    this.setImagePrev = function(currentImage){
        if (currentImage > 0) {
            currentImage--;
        }
        return currentImage;
    };

    this.setImage = function(imageUrl) {
        var mainImageUrl = imageUrl;
        currentImage = galleryLinks.indexOf(imageUrl);
        if (currentImage === -1) {
            currentImage = 0;
        }
        this.gotoImage();
        return mainImageUrl;
    };

    this.gotoImage = function() {
        var oldRoute = $location.hash();
        $location.hash('galleryMainImage');
        $anchorScroll.yOffset = 50;
        $anchorScroll();
        return $location.hash(oldRoute);
    };

    /* this.getCurrentImg = function(imageArray, current){
     return imageArray.indexOf(current);
     }*/
}
]);


