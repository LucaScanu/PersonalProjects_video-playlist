angular
  .module('video-playlist')
  .controller('VideosIndexCtrl', VideosIndexCtrl);

VideosIndexCtrl.$inject = ['Video'];
function VideosIndexCtrl(Video){
  console.log('VideosIndexCtrl');
  const vm = this;

  Video
    .get()
    .$promise
    .then(response => {
      vm.videos = response.items;
      console.log(vm.videos);
    });

}
