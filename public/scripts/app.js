/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
var source;
var template;
var $albums;

$(document).ready(function() {
  console.log('app.js loaded!');

  source = $('#album-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: 'api/albums',
    dataType: 'json',
    success: onSuccess,
    error: handleError
  });

});

function renderAlbum() {
  $('#albums').empty();
  var albumHtml = template(album);
  $('#albums').prepend(albumHtml);
}

function onSuccess(albumsList) {
  albumsList.forEach(function(album) {
    renderAlbum(album);
  });
}

function handleError(error) {
  console.log(error);
}
