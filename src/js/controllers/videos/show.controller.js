angular
.module('video-playlist')
.controller('VideosShowCtrl', VideosShowCtrl);

VideosShowCtrl.$inject = ['Video', '$stateParams', '$sce'];
function VideosShowCtrl(Video, $stateParams, $sce){
  console.log('VideosShowCtrl');
  const vm = this;

  Video
  .get()
  .$promise
  .then(response => {
    vm.video = response.items[$stateParams.index];
    vm.trustedSrc = $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${vm.video.contentDetails.videoId}?origin=http://example.com&controls=1`);
    console.log(vm.video);
  });

}
