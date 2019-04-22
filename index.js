$(document).ready(function() {
  document.oncontextmenu = function() {
    return false;
  }

  function set_img_dims() { // set body height = window height
    $('#portrait-card').height($(window).width() * 0.45);
    $('#portrait-card').width($(window).width() * 0.3);
  };

  set_img_dims();

});
