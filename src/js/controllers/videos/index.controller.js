angular
  .module('video-playlist')
  .controller('VideosIndexCtrl', VideosIndexCtrl);

VideosIndexCtrl.$inject = ['Video'];
function VideosIndexCtrl(Video){
  console.log('VideosIndexCtrl');
  const vm = this;

  vm.colors = [
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

  vm.randomVideoIndex = Math.floor(Math.random() * (10 - 0)) + 0;

}
