/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var sampleAlbums = [];
// var source;
// var template;
// var $albums;

$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: 'api/albums',
    // dataType: 'json',
    success: onSuccess,
    error: handleError
  });

});

function onSuccess(albums) {
  albums.forEach(function(album) {
    renderAlbum(album);
  });
}

function renderAlbum(album) {
  albumHtml = $('#album-template').html();
  template = Handlebars.compile(albumHtml);
  var html = template(album);
  $('#albums').prepend(html);
}

function handleError(error) {
  console.log(error);
}
