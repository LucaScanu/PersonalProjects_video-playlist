// Code goes here
angular.module('app', ['ngAnimate']).controller('categoryController', function($scope, $timeout, $rootElement) {

  //just a dirty helper
  $scope.replace = function() {
    var c = [];
    for(let i = 0; i < 5; i++) {
      c.push(Math.random());
    }
    $scope.categories = c;
  };

  $scope.categories = ['12345', '6789', '9876', '54321'];

  //found in some answers, but only first item is faded
  $timeout(function () {
    //$scope.replace();
  }, 3000);

  //expected to show the same behavior, like clicking the button
  // $scope.replace();
}).directive('animateOnLoad',['$animateCss', function($animateCss) {
  return {
    'link': function(scope, element) {
      $animateCss(element, {
        'event': 'enter',
        structural: true
      }).start();
    }
  };
}]);
