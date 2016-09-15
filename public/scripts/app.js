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
<<<<<<< HEAD
  }

  vm.albums = [];

  $http({
    method: 'GET',
    url: '/api/albums'
    }).then(function successCallback(response) {
      vm.albums = response.data;
    }); function errorCallback(response) {
      console.log('There was an error getting the data', response);
    };

  vm.createAlbum = function() {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: vm.newAlbum
    }).then(function successCallback(response) {
      console.log(response);
      vm.albums.push(response.data);
      vm.newAlbum = {
        name: '',
        artistName: ''
      }
    }); function errorCallback(response) {
      console.log('There was an error getting the data', response);
    };
=======
  };

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
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3
  }
}
