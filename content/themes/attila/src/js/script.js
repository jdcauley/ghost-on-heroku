(function() {

  var html = document.querySelector('html');

  /* ==========================================================================
     Menu
     ========================================================================== */

  function menu() {
    html.toggle('menu-active');
  };

  var navMenuEls = document.querySelectorAll('.nav-menu, .nav-close, #menu')

  navMenuEls.forEach(function(ele) {
    ele.addEventListener('click', menu)
  })


  /* ==========================================================================
     Gallery
     ========================================================================== */

  function gallery() {
    var images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function(image) {
      var container = image.closest('.kg-gallery-image');
      var width = image.attributes.width.value;
      var height = image.attributes.height.value;
      var ratio = width / height;
      container.style.flex = ratio + ' 1 0%';
    });
  }
  gallery();
})()
