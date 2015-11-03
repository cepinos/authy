(function () {
  'use strict';

  describe('Linked list', function () {
    describe('Nodes', function () {
      it('Can create a node', function () {
        spyOn(lindedList, 'node');
        var node = new linkedList.node();
        expect(node.node).toHaveBeenCalled();
      });
    });
  });
})();
