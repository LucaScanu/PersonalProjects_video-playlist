angular
.module('video-playlist')
.controller('VideosShowCtrl', VideosShowCtrl);

VideosShowCtrl.$inject = ['Video', '$stateParams', '$sce', 'COLORS', '$state'];
function VideosShowCtrl(Video, $stateParams, $sce, COLORS, $state){
  const vm = this;

  //colors used for overlay
  vm.colors = COLORS;

  vm.index = parseInt($stateParams.index);

  vm.goToVideo = index => {
    $state.go('show', {index});
  };

  //uses index of video clicked on (passed as a parameter)
  //to get correct video from youtube api response
  //then creates trusted URL for iframe src with relevant
  //youtube video ID
  //assigned index of next and previos vidoes in index
  Video
  .get()
  .$promise
  .then(response => {
    vm.video = response.items[vm.index];
    vm.trustedSrc = $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${vm.video.contentDetails.videoId}?rel=0&autohide=1&autoplay=1&controls=2&modestbranding=1&wmode=transparent`);
    vm.nextIndex = getNextIndex(response);
    vm.prevIndex = getPrevIndex(response);
  });

  //finds index of next video in playlist
  function getNextIndex(response) {
    if ((vm.index + 1) > response.items.length - 1) {
      return  0;
    } else {
      return vm.index + 1;
    }
  }

  //find index of previous video in playlist
  function getPrevIndex(response) {
    if ((vm.index - 1 ) < 0) {
      return response.items.length - 1;
    } else {
      return vm.index - 1;
    }
  }

}
