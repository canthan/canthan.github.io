'use strict';

angular.
  module('galleryDetail').
  factory('DateGetterFactory', function(){
     return {
        GetMonthName: function (month) {
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            return monthNames[month];
        },

        GetMonth: function (date) {
            var d = new Date(date);
            return d.getMonth();
        },

        GetYear: function (date) {
            var d = new Date(date);
            return d.getFullYear();
        }
    }

    });


