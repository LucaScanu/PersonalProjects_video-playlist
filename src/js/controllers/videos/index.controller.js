angular
  .module('video-playlist')
  .controller('VideosIndexCtrl', VideosIndexCtrl);

VideosIndexCtrl.$inject = ['Video', 'COLORS', '$state'];
function VideosIndexCtrl(Video, COLORS, $state){
  const vm = this;

  //color array used to create thumbnail overlays
  vm.colors = COLORS;

  //onclick of random button the below function redirects to a random video
  vm.goToRandomVideo = () => {
    $state.go('show', {index: vm.randomVideoIndex});
  };

  //makes request to youtube API, stores videos.
  //function to return random index within video array
  Video
    .get()
    .$promise
    .then(response => {
      vm.videos = response.items;
      vm.numberOfVideos = response.items.length;
      vm.randomVideoIndex = Math.floor(Math.random() * (vm.numberOfVideos - 0)) + 0;
    });

}
