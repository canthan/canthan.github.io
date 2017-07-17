'use strict';

// Register `galleryList` component, along with its associated controller and template
angular.
module('galleryList').
component('galleryList', {
    templateUrl: 'gallery-list/gallery-list.template.html',
    controller: ['Gallery', '$scope', 'DateGetter',
        function GalleryListController(Gallery, $scope, DateGetter) {
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

            $scope.GetMonthName = function (month) {return DateGetter.GetMonthName(month);};

            $scope.GetMonth = function (month) {return DateGetter.GetMonth(month);};

            $scope.GetYear = function (month) {return DateGetter.GetYear(month);};

           
           /* $scope.getMonthName = function(month){
                var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                return monthNames[month];
            }

            $scope.GetMonth = function(date){
                var d = new Date(date);
                return d.getMonth();
            }

            $scope.GetYear = function(date){
                var d = new Date(date);
                return d.getFullYear();
            }*/
        }
    ]
});


