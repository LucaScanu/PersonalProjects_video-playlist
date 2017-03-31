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
      vm.firstVideo = response.items[0];
      vm.otherVideos = response.items.filter((video, index) => {
        return (index !== 0);
      });
      console.log(vm.otherVideos);
    });

}
