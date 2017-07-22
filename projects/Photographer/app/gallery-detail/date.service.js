'use strict';

angular.
  module('galleryDetail').
  service('DateGetterService', function(){

      this.GetMonthName = function (month) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];
        return monthNames[month];
      };

      this.GetMonth = function (date) {
        var d = new Date(date);
        return d.getMonth();
      };

      this.GetYear = function (date) {
        var d = new Date(date);
        return d.getFullYear();
      };

    });


