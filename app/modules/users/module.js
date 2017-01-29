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
          ghUsers : function(GithubUsers){
            return GithubUsers.fetchRemoteGithubUsers();
          }
        }
      })
      .state('ghusers.details', {
        url: '/{login}',
        templateUrl: 'modules/users/single.html',
        controller: 'SingleUserController as ctrl',
        resolve: {
          user: function(SingleGithubUser, $stateParams){
            return SingleGithubUser.fetchGithubUser($stateParams.login);
          }
        }
      });
  }
})();
