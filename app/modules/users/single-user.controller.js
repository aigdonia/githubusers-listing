(function(){
  'use strict';

  angular.module('github-users')
    .controller('SingleUserController', SingleUserController);

  SingleUserController.$inject = ['user'];
  function SingleUserController(user){
    var vm = this;
    vm.currentUser = user;
  }

})();
