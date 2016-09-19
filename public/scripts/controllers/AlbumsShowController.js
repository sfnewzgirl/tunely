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
      }).then(function editSuccessCallback (response) {
      }, function errorCallback(response) {
        console.log('song put error', response);
      });
    }

  vm.deleteSong = function (song) {
    $http({
    method: 'DELETE',
    url: '/api/albums/' + $routeParams.id + '/songs/' + song._id
    }).then(function deleteSuccessCallback(response) {
      var index = vm.album.songs.indexOf(response);
      vm.album.songs.splice(index, 1);
    }, function errorCallback(response) {
      console.log('song delete error', response);
    });
  }

  vm.createSong = function (song) {
    $http({
      method: 'POST',
      url: '/api/albums/' + $routeParams.id + '/songs',
      data: vm.newSong
    }).then(function createSuccessCallback(json) {
      console.log(json);
      vm.album.songs.push(json.data);
      vm.newSong = {};
    }, function errorCallback (response) {
      console.log ('create song error', response);
    });
  }

}
