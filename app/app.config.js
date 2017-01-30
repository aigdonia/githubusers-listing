(function(){
  'use strict';

  angular.module('github-users')
  .config( configureApp );

  configureApp.$inject = ['$urlRouterProvider', 'laddaProvider'];
  function configureApp($urlRouterProvider, laddaProvider){

    $urlRouterProvider.when('/about/', ['$state', function($state){
      $state.go('aboutpage');
    }]);
    // set default fallaback route to go to home
    $urlRouterProvider.otherwise('/');

    // configuring button load effect
    laddaProvider.setOption({
      style: 'slide-down'
    });
  }
})();
