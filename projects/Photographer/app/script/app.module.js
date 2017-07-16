'use strict';

// Define the `galleriesApp` module
angular.module('galleriesApp', [
  // ...which depends on the `galleryList` module
  'ngRoute',
  'galleryList',
  'contentList',
  'galleryDetail',
  'core',
  'ngAnimate'
]);
