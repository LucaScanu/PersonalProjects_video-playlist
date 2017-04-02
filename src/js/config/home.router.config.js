angular
  .module('video-playlist')
  .config(homeRouter);

homeRouter.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function homeRouter($stateProvider, $locationProvider, $urlRouterProvider){

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/views/home.html'
    })
    .state('index', {
      url: '/index',
      templateUrl: 'js/views/video-index.html',
      controller: 'VideosIndexCtrl as videoIndex'
    })
    .state('show', {
      url: '/show/:index',
      templateUrl: 'js/views/video-show.html',
      controller: 'VideosShowCtrl as videoShow'
    });

  $urlRouterProvider.otherwise('/index');
}
