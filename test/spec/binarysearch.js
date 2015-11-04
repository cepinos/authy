/* globals binarysearch*/
(function(){
  'use strict';
  describe('BinarySearch', function(){
    it('Should return the position of the number it is looking for, it works only for sorted lists', function(){
      var list = [1, 2, 3, 4, 5, 9, 20, 1000];
      for(var i = 0; i < list.length; i++){
        expect(binarysearch(list, list[i])).toBe(i);
      }

    });
    it('Should return the middle point when using middle function', function(){
      expect(binarysearch.middle(1, 4)).toBe(2);
      expect(binarysearch.middle(1, 3)).toBe(2);
      expect(binarysearch.middle(2, 5)).toBe(3);
    });
  });
}());
