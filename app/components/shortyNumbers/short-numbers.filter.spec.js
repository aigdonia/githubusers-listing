(function(){
  'use strict';

  describe('Short Numbers Filter', function(){
    beforeEach (module('github-users'));
    var filter;

    beforeEach ( inject( function($filter){
      filter = $filter('shortyNumbers');
    } ) );

    it('SHOULD return "na" in case of negative value entered', function(){
      var res = filter(-1);
      expect(res).toBe('na');
    });

    it('SHOULD accept zero or positive numbers and display only integer value', function(){
      var res = filter(0.02);
      expect(res).toBe('0');
      res = filter(10.2);
      expect(res).toBe('10');
    });

    it('SHOULD display number with 3 digits as 3 digits 999 => 999', function(){
      var res = filter(999);
      expect(res).toBe('999');
    });

    it('SHOULD display numbers with 4 to 6 digits with 1-3 digits(thousands) and trailing "K"', function(){
      var res = filter('1000');
      expect(res).toBe('1K');
      res = filter('23456');
      expect(res).toBe('23K');
      res = filter('999999');
      expect(res).toBe('999K');
    });

    it('SHOULD display numbers with more than 6 digits replace most right 6 digits with "M"', function(){
      var res = filter('1000000');
      expect(res).toBe('1M');
      res = filter('12345678');
      expect(res).toBe('12M');
    });
  });



  // function shortyNumbersFilter(){
  //   return function(number){
  //     if(number < 0)
  //       return 'na';
  //     var integerNumber = _.round(number); // this is integer now, no kidding
  //     var text = integerNumber.toString();
  //     if(_.floor(number/1000000) > 0) {
  //       text = _.floor(number/1000000).toString() + 'M';
  //     } else if(_.floor(number/1000) > 0) {
  //       text = _.floor(number/1000).toString() + 'K';
  //     }
  //     return text;
  //   };
  // }
})();
