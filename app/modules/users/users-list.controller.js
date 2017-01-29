(function(){
  'use strict';

  angular.module('github-users')
    .controller('UsersListController', UsersListController);

  UsersListController.$inject = ['ghUsers', 'GithubUsers'];

  function UsersListController( ghUsers, GithubUsers ){
    var vm = this;

    vm.usersList = ghUsers.usersList;
    vm.loadMoreUrl = ghUsers.moreUrl;

    vm.loadMore = function(){
      // pass it to the factory
      GithubUsers.fetchRemoteGithubUsers(vm.loadMoreUrl).then(processComingUsers);
    };

    var processComingUsers = function(remoteDetails){
      vm.usersList = _.concat(vm.usersList, remoteDetails.usersList);
      vm.loadMoreUrl = remoteDetails.moreUrl;
    };
  }

})();
