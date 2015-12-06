(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  app.addEventListener('dom-change', function() {
    console.log('dom-change');
      });

  window.addEventListener('WebComponentsReady', function() {
 console.log('web components ready'); 

  var mb = document.getElementById('menubutton');
    mb.onclick = function() {
      console.log('mbclick');
      var adl = document.getElementById('app-drawer-layout');
      adl.opened = !adl.opened;
    };

  
  
  });

  app.onDataRouteClick = function() {
    var adl = document.getElementById('app-drawer-layout');
    console.log(adl);
    // adl.toggleDrawer();
    adl.opened = !adl.opened;
  };

  app.scrollPageToTop = function() {
    document.getElementById('top').scrollTop = 0;
  };

})(document);
