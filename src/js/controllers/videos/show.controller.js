angular
.module('video-playlist')
.controller('VideosShowCtrl', VideosShowCtrl);

VideosShowCtrl.$inject = ['Video', '$stateParams', '$sce'];
function VideosShowCtrl(Video, $stateParams, $sce){
  console.log('VideosShowCtrl');
  const vm = this;

  vm.colors = [
    '234, 196, 53',
    '252, 170, 103',
    '242, 103, 31',
    '201, 27, 38',
    '156, 15, 95',
    '96, 4, 122',
    '61, 126, 170',
    '255, 228, 122',
    '222, 97, 97',
    '38, 87, 235',
    '239, 50, 217',
    '137, 255, 253',
    '58, 97, 134',
    '137, 37, 62',
    '78, 205, 196',
    '85, 98, 112',
    '161, 255, 206',
    '250, 255, 209'
  ];

  vm.index = parseInt($stateParams.index);

  Video
  .get()
  .$promise
  .then(response => {
    vm.video = response.items[vm.index];
    vm.trustedSrc = $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${vm.video.contentDetails.videoId}?rel=0&autohide=1&autoplay=1&controls=2&modestbranding=1&wmode=transparent`);

    console.log(vm.video);
  });

}
