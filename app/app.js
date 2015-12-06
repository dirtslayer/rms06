(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  app.addEventListener('dom-change', function() {});

  window.addEventListener('WebComponentsReady', function() {

  });

  app.onDataRouteClick = function() {
    var adl = document.getElementById('app-drawer-layout');
    console.log(adl);
    adl.toggleDrawer();
  };

  app.scrollPageToTop = function() {
    document.getElementById('top').scrollTop = 0;
  };

})(document);
