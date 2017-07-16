'use strict';

angular.
  module('core.gallery').
  factory('Gallery', ['$resource',
    function($resource) {
      return $resource('galleries/:galleryId.json', {}, {
        query: {
          method: 'GET',
          params: {galleryId: 'galleries'},
          isArray: true
        }
      });
    }
  ]);


