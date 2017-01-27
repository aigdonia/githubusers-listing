(function(){
  'use strict';

  angular.module('github-users')
  .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('staticContent', {
        absolute: true,
        templateUrl: 'modules/staticPages/template.html'
      })
      .state('homepage', {
        url: '/',
        parent: 'staticContent',
        templateUrl: 'modules/staticPages/home.html'
      })
      .state('aboutpage', {
        url: '/about',
        parent: 'staticContent',
        templateUrl: 'modules/staticPages/about.html'
      });
  }
})();
