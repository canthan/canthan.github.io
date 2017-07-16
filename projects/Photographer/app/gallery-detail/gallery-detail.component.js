'use strict';

// Register `galleryList` component, along with its associated controller and template
angular.
  module('galleryDetail').
  component('galleryDetail', {
    templateUrl: 'gallery-detail/gallery-detail.template.html',
    controller: ['$routeParams', 'Gallery', '$location', '$anchorScroll', '$scope',
      function GalleryDetailController($routeParams, Gallery, $location, $anchorScroll, $scope) {

        var self = this;

        self.gallery = Gallery.get({galleryId: $routeParams.galleryId}, function (gallery) {
          self.setImage(gallery.images[0]);
          galleryLinks = self.gallery.images;
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
          currentImage = getCurrentImg(galleryLinks, imageUrl);
          if (currentImage === -1) {
            currentImage = 0;
          }
          $scope.gotoImage();
        };
        
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

        $scope.gotoImage = function(){
          $location.hash('galleryMainImage');
          $anchorScroll();
        }

        //To prevent site reload
        $scope.$on('$locationChangeStart', function(ev) {
          ev.preventDefault();
        });
        
        function getCurrentImg(imageArray, current){
          return imageArray.indexOf(current);
        }

      }
      ]
  });
