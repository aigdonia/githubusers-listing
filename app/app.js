(function(){
  'use strict';

  angular.module('github-users', [
    'ui.router',
    'angular-ladda'
  ])
  .run(runApp);

  runApp.$inject = ['$rootScope'];

  function runApp($rootScope){
    // this should take care of the site title on changing routes
    $rootScope.$on('$stateChangeStart', keepSiteTitleUpdated);
    $rootScope.loadingUser = false;

    function keepSiteTitleUpdated(e, toState, toParams, fromState){
      // TODO
    }
  }
})();
