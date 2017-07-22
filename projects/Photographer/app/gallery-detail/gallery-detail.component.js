'use strict';

// Register `galleryList` component, along with its associated controller and template
angular.
module('galleryDetail').
component('galleryDetail', {
    templateUrl: 'gallery-detail/gallery-detail.template.html',
    controller: ['$routeParams',
        'Gallery',
        '$scope',
        'DateGetterService',
        'ImageChangerService',
        function GalleryDetailController($routeParams, Gallery, $scope, DateGetterService, ImageChangerService) {

            var self = this;

            self.gallery = Gallery.get({galleryId: $routeParams.galleryId}, function (gallery) {
                self.setImage(gallery.images[0]);
                galleryLinks = self.gallery.images;
            });


            //---- functions from image.service - changing images
            self.setImageNext = function() {
                currentImage = ImageChangerService.setImageNext(currentImage);
                return self.setImage(galleryLinks[currentImage]);
            };
            self.setImagePrev = function() {
                currentImage = ImageChangerService.setImagePrev(currentImage);
                return self.setImage(galleryLinks[currentImage]);
            };
            self.setImage = function(imageUrl) {self.mainImageUrl = ImageChangerService.setImage(imageUrl);};
            $scope.gotoImage = function() {return ImageChangerService.gotoImage();};

            //Using  date.service
            $scope.GetMonthName = function (month) {return DateGetterService.GetMonthName(month);};
            $scope.GetMonth = function (month) {return DateGetterService.GetMonth(month);};
            $scope.GetYear = function (month) {return DateGetterService.GetYear(month);};

            /*
             //Using  date.factory
             $scope.GetMonthName = DateGetterFactory.GetMonthName;
             $scope.GetMonth = DateGetterFactory.GetMonth;
             $scope.GetYear = DateGetterFactory.GetYear;*/
            /*
             self.setImageNext = function(){
             if (currentImage < galleryLinks.length - 1) {
             currentImage++;
             this.setImage(galleryLinks[currentImage]);
             }
             };

             self.setImagePrev = function(){
             if (currentImage > 0) {
             currentImage--;
             this.setImage(galleryLinks[currentImage]);
             }
             };

             /* self.setImage = function setImage(imageUrl) {
             self.mainImageUrl = imageUrl;
             //currentImage = getCurrentImg(galleryLinks, imageUrl);
             currentImage = galleryLinks.indexOf(imageUrl);
             if (currentImage === -1) {
             currentImage = 0;
             }
             $scope.gotoImage();
             };

             $scope.gotoImage = function() {
             var oldRoute = $location.hash();
             $location.hash('galleryMainImage');
             $anchorScroll.yOffset = 50;
             $anchorScroll();
             $location.hash(oldRoute);
             };*/
            /* //To prevent site reload
             $scope.$on('$locationChangeStart', function(ev) {
             ev.preventDefault();
             });*/
        }
    ]
});
