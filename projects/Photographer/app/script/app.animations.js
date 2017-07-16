'use strict';

angular.
  module('galleriesApp').
  animation('.gallery-image', function galleryAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
        display:'block',
        position: 'relative',
        top: 0,
        left: 2000
        }).
        animate({
            top: 0,
            left: 0
          }, function() {element.css({top: 0}, done);}
      );

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element.css({
        position: 'absolute',
        top: 0,
        left: 0
      }).
      animate({
        top: 0,
        left: -3000
      },  done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

  });