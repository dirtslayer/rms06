(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  app.addEventListener('dom-change', function() {});

  window.addEventListener('WebComponentsReady', function() {

    var scrim = document.getElementById('scrim');
    scrim.onclick = function() {
      var adl = document.getElementById('app-drawer-layout');
      adl.opened = false;
    };

  });

  app.onDataRouteClick = function() {
    var adl = document.getElementById('app-drawer-layout');
    adl.toggleDrawer();
  };

  app.scrollPageToTop = function() {
    document.getElementById('top').scrollTop = 0;
  };

})(document);
