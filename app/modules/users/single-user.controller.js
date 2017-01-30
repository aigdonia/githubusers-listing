(function(){
  'use strict';

  angular.module('github-users')
    .controller('SingleUserController', SingleUserController);

  SingleUserController.$inject = ['user', '$rootScope'];
  function SingleUserController(user, $rootScope){
    var vm = this;
    $rootScope.pageTitle = "("+user.login+") "+user.name;
    vm.currentUser = user;
  }

})();
