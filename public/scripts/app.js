/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.

AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController ($http) {
  var vm = this;
  vm.newAlbum = {};
  vm.newAlbum = {
    name: 'Viva Hate',
    artistName: 'Morrissey'
  }

  vm.albums = [];

  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(function successCallback(response) {
    vm.albums = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createAlbum = function () {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: vm.newAlbum,
    }).then(function successCallback(response) {
      vm.albums.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

    vm.deleteAlbum = function (album) {
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ album._id
    }).then(function successCallback(deletedAlbum) {
      var index = vm.albums.indexOf(deletedAlbum);
      vm.albums.splice(index, 1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

  vm.updateAlbum = function(album){
  $http({
    method: 'PUT',
    url: '/api/albums/' + album._id,
    data: {
      name: album.name,
      artistName: album.artistName
    },
  }).then(function successCallback(updatedAlbumJson) {
    var index = vm.albums.indexOf(album);
    vm.albums.splice(index, 1, updatedAlbumJson);
    // any hiding / showing that needs to occur
  }, function errorCallback(response) {
    console.log('There was an error deleting the data', response);
  });
  }
}
