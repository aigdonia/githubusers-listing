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
          ghUsersPreloaded : function(GithubUsers){
            return GithubUsers.fetchRemoteGithubUsers();
          },
          userPreloaded: function(SingleGithubUser, $rootScope, $state){
            $rootScope.loadingUser = true;
            return SingleGithubUser.fetchGithubUser('aigdonia')
              .catch(function(error){
                $state.go('whoops');
              })
              .finally(function(){
                $rootScope.loadingUser = false;
              });
          }
        }
      })
      .state('ghusers.details', {
        url: '/{login}',
        templateUrl: 'modules/users/single.html',
        controller: 'SingleUserController as ctrl',
        resolve: {
          user: function(SingleGithubUser, $stateParams, $rootScope){
            $rootScope.loadingUser = true;
            return SingleGithubUser.fetchGithubUser($stateParams.login)
              .finally(function(){
                $rootScope.loadingUser = false;
              });
          }
        }
      });
  }
})();
