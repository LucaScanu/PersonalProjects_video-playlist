angular
.module('video-playlist')
.factory('Video', videoFactory);

//Shortcut for making requests to youtube api
//defaults include:
// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };

videoFactory.$inject = ['API','$resource'];
function videoFactory(API, $resource) {
  return $resource(API, {
    'query': {method: 'GET', isArray: false}
  });
}
