(function(){
  'use strict';

  angular.module('github-users')
    .filter('shortyNumbers', shortyNumbersFilter);

  function shortyNumbersFilter(){
    return function(number){
      if(number < 0)
        return 'na';
      var integerNumber = _.round(number); // this is integer now, no kidding
      var text = integerNumber.toString();
      if(_.floor(number/1000000) > 0) {
        text = _.floor(number/1000000).toString() + 'M';
      } else if(_.floor(number/1000) > 0) {
        text = _.floor(number/1000).toString() + 'K';
      }
      return text;
    };
  }
})();
