(function(){
  'use strict';

  angular.module('github-users')
    .controller('UsersListController', UsersListController);

  UsersListController.$inject = ['ghUsersPreloaded', 'userPreloaded', 'GithubUsers', '$rootScope'];

  function UsersListController( ghUsersPreloaded, userPreloaded, GithubUsers, $rootScope ){
    var vm = this;
    vm.usersList = ghUsersPreloaded.usersList;
    vm.loadMoreUrl = ghUsersPreloaded.moreUrl;
    vm.currentUser = userPreloaded;
    $rootScope.pageTitle = "("+userPreloaded.login+") "+userPreloaded.name;
    vm.loading = false;

    vm.loadMore = function(){
      // activate loading progress bar
      vm.loading = true;
      // pass it to the factory
      GithubUsers.fetchRemoteGithubUsers(vm.loadMoreUrl).then(processComingUsers);
    };

    var processComingUsers = function(remoteDetails){
      vm.loading = false;
      vm.usersList = _.concat(vm.usersList, remoteDetails.usersList);
      vm.loadMoreUrl = remoteDetails.moreUrl;
    };
  }

})();
