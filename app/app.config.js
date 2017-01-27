(function(){
  'use strict';

  angular.module('github-users')
  .config( configureApp );

  configureApp.$inject = ['$urlRouterProvider'];
  function configureApp($urlRouterProvider){

    $urlRouterProvider.when('/about/', ['$state', function($state){
      $state.go('aboutpage');
    }]);
    // set default fallaback route to go to home
    $urlRouterProvider.otherwise('/');
  }
})();
