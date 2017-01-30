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
        templateUrl: 'modules/staticPages/home.html',
        controller: StaticPageController,
        data: {
          pageTitle: 'Home'
        }
      })
      .state('aboutpage', {
        url: '/about',
        parent: 'staticContent',
        templateUrl: 'modules/staticPages/about.html',
        controller: StaticPageController,
        data: {
          pageTitle: 'About'
        }
      })
      .state('whoops', {
        'url' :'/whoops',
        parent: 'staticContent',
        templateUrl: 'modules/staticPages/whoops.html',
        controller: StaticPageController,
        data: {
          pageTitle: 'About'
        }
      });
  }

  function StaticPageController($rootScope, $state){
    $rootScope.pageTitle = $state.current.data.pageTitle;
  }
})();
