angular
.module('video-playlist')
.controller('VideosShowCtrl', VideosShowCtrl);

VideosShowCtrl.$inject = ['$stateParams'];
function VideosShowCtrl(){
  console.log('VideosShowCtrl');
  const vm = this;
  vm.video = {
    'kind': 'youtube#playlistItem',
    'etag': '\"uQc-MPTsstrHkQcRXL3IWLmeNsM/f_wHBKV4L_jQU_yL1HJSecuuk6A\"',
    'id': 'UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MzJCQjBCNDIyRkJDN0VD',
    'snippet': {
      'publishedAt': '2014-09-04T16:00:41.000Z',
      'channelId': 'UCc1SpIDSvxrf5ofxUMyXReg',
      'title': 'Lamb Angelica',
      'description': 'From Lamb\'s 2003 album Between Darkness and Wonder',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/X0qwQqwKLlM/default.jpg',
          'width': 120,
          'height': 90
        },
        'medium': {
          'url': 'https://i.ytimg.com/vi/X0qwQqwKLlM/mqdefault.jpg',
          'width': 320,
          'height': 180
        },
        'high': {
          'url': 'https://i.ytimg.com/vi/X0qwQqwKLlM/hqdefault.jpg',
          'width': 480,
          'height': 360
        }
      },
      'channelTitle': 'Danielle Major',
      'playlistId': 'PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ',
      'position': 0,
      'resourceId': {
        'kind': 'youtube#video',
        'videoId': 'X0qwQqwKLlM'
      }
    },
    'contentDetails': {
      'videoId': 'X0qwQqwKLlM',
      'videoPublishedAt': '2009-09-07T15:06:20.000Z'
    },
    'status': {
      'privacyStatus': 'public'
    }
  };
}
