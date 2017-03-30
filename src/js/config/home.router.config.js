angular
  .module('video-playlist')
  .config(homeRouter);

homeRouter.$inject = ['$stateProvider', '$locationProvider'];
function homeRouter($stateProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/views/home.html'
    })
    .state('index', {
      url: '/index',
      templateUrl: 'js/views/index.html'
    })
    .state('show', {
      url: '/show',
      templateUrl: 'js/views/show.html'
    });
}
