angular
.module('video-playlist')
.controller('VideosShowCtrl', VideosShowCtrl);

VideosShowCtrl.$inject = ['Video', '$stateParams', '$sce', 'COLORS'];
function VideosShowCtrl(Video, $stateParams, $sce, COLORS){
  const vm = this;

  //colors used for overlay
  vm.colors = COLORS;

  vm.index = parseInt($stateParams.index);

  //uses index of video clicked on (passed as a parameter)
  //to get correct video from youtube api response
  //then creates trusted URL for iframe src with relevant
  //youtube video ID
  Video
  .get()
  .$promise
  .then(response => {
    vm.video = response.items[vm.index];
    vm.trustedSrc = $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${vm.video.contentDetails.videoId}?rel=0&autohide=1&autoplay=1&controls=2&modestbranding=1&wmode=transparent`);
  });

}
