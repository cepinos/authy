(function () {
  'use strict';

  describe('Linked list', function () {
    describe('Node', function () {
      var node;
      beforeEach(function(){
        node = new linkedList.Node();
      });
      it('Can create a nodes', function () {

        spyOn(linkedList, 'Node');

        node = new linkedList.Node();

        expect(linkedList.Node).toHaveBeenCalled();
        expect(typeof node).toBe('object');
        expect(node instanceof linkedList.Node).toBe(true);
      });
      it('contains attribute data', function(){
        expect(node.constructor.prototype.hasOwnProperty('data')).toBe(true);
      });
      it('contains attribute next', function(){
        expect(node.constructor.prototype.hasOwnProperty('next')).toBe(true);
      });
    });
    describe('List', function(){
      var list;
      beforeEach(function(){
        list = new linkedList.List();
      });
      it('Can create lists', function(){
        spyOn(linkedList, 'List');

        list = new linkedList.List();

        expect(linkedList.List).toHaveBeenCalled();
        expect(typeof list).toBe('object');
        expect(list instanceof linkedList.List).toBe(true);

      });
      it('should have head attribute and should be instanceof node', function(){
        expect(list.constructor.prototype.hasOwnProperty('head')).toBe(true);
        expect(list.head instanceof linkedList.Node).toBe(true);
      });
      it('Can push, and pop any data', function(){
        var data;

        list.push('testing');
        list.push(2);
        list.push(false);

        data = list.pop();
        expect(data).toBe(false);
        data = list.pop();
        expect(data).toBe(2);
        data = list.pop();
        expect(data).toBe('testing');
        data = list.pop();
        expect(data).toBeNull();
        data = list.pop();
        expect(data).toBeNull();

      });
    });
  });
})();
