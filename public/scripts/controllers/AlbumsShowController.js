angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];

function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};

  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.editSong = function (song) {
    $http({
      method: 'PUT',
      url: '/api/albums/' + $routeParams.id + '/songs/' + song._id ,
      data: song
    }).then(function successCallback (response) {
    }, function errorCallback(response) {
      console.log('song put error', response);
    });
  }

}
