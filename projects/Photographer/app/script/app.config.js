'use strict';

angular.
  module('galleriesApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/galleries', {
          template: '<gallery-list></gallery-list>'
        }).
        when('/content', {
          template: '<content-list></content-list>'
        }).
        when('/galleries/:galleryId', {
          template: '<gallery-detail></gallery-detail>'
        }).
        otherwise('/galleries');
    }
  ]);
