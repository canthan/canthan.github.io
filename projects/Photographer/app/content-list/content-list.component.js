'use strict';

// Register `contentList` component, along with its associated controller and template
angular.
module('contentList').
component('contentList', {
  templateUrl: 'content-list/content-list.template.html',
  controller: ['$http', function ContentListController($http) {
    var self = this;
    self.orderProp ='age';

    $http.get('content/content.json').then(function(response){
      self.contents = response.data;
    });
  }]
}).component('content2List', {
  templateUrl: 'content-list/content-list.template.html',
  controller: ['$http', function ContentListController($http) {
    var self = this;
    self.orderProp ='age';

    $http.get('content/content2.json').then(function(response){
      self.contents = response.data;
    });
  }]
})
