'use strict';

// Register `galleryList` component, along with its associated controller and template
angular.
module('galleryList').
component('galleryList', {
    templateUrl: 'gallery-list/gallery-list.template.html',
    controller: ['Gallery', '$scope', 'DateGetterService',
        function GalleryListController(Gallery, $scope, DateGetterService) {
            this.orderProp = 'date';
            this.galleries = Gallery.query();
            
            /*Gallery.query()
             .$promise
             .then(function(){
             galleryHover()
             });*/
            $scope.$watch(function(){
                return $scope.filteredGalleries;
            }, function(){
                galleryHover()
            })

            $scope.GetMonthName = function (month) {return DateGetterService.GetMonthName(month);};
            $scope.GetMonth = function (month) {return DateGetterService.GetMonth(month);};
            $scope.GetYear = function (month) {return DateGetterService.GetYear(month);};
        }
    ]
});


