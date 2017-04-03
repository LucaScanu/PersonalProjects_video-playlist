angular
.module('video-playlist')
.directive('animateOnLoad', animateOnLoad);

animateOnLoad.$inject = ['$animateCss'];
function animateOnLoad($animateCss) {
  return {
    'link': function(scope, element) {
      $animateCss(element, {
        'event': 'enter',
        structural: true
      }).start();
    }
  };
}
