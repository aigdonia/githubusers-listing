(function(){
  'use strict';

  angular.module('github-users')
  .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('ghusers', {
        url: '/users',
        templateUrl: 'modules/users/main.html',
        controller: 'UsersListController as ctrl',
        resolve: {
          ghUsers : function($q, GithubUsers){
            var deferred = $q.defer();
            var remoteGH = GithubUsers.fetchRemoteGithubUsers();

            return remoteGH;
          }
        }
      })
      .state('ghusers.details', {
        url: '/{login}',
        templateUrl: 'modules/users/single.html'
      });
  }
})();
