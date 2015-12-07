(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  app.addEventListener('dom-change', function() {});

  window.addEventListener('WebComponentsReady', function() {

    var scrim = document.getElementById('scrim');
    console.log(scrim);
    scrim.onclick = function() {
      console.log('scrim click');
      var adl = document.getElementById('app-drawer-layout');
      console.log(adl);
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
