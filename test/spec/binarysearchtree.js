/* globals binarysearchtree*/
(function(){
  'use strict';

  describe('Binary Search Tree', function(){
    describe('nodes', function(){

      beforeEach(function(){
        this.node = new binarysearchtree.Node();
      });

      it('has attributtes left, right and data, node is an object instance of Node', function(){
        expect(this.node.constructor.prototype.hasOwnProperty('left')).toBe(true);
        expect(this.node.constructor.prototype.hasOwnProperty('right')).toBe(true);
        expect(this.node.left).toBeNull();
        expect(this.node.right).toBeNull();

        expect(this.node instanceof binarysearchtree.Node).toBe(true);

      });
      it('has a method to check it is a leaf', function(){
        expect(this.node.isLeaf()).toBe(true);
      });
    });
    describe('tree', function(){
      beforeEach(function(){
        this.tree = new binarysearchtree.Tree();

        /*
              5
            4   6
          3       7
        */

        this.tree.insert(5);
        this.tree.insert(4);
        this.tree.insert(6);
        this.tree.insert(3);
        this.tree.insert(7);

      });
      it('has a root attributtes instance of node, and it is an instance of Tree', function(){
        expect(this.tree.constructor.prototype.hasOwnProperty('root')).toBe(true);
        expect(this.tree.root instanceof binarysearchtree.Node).toBe(true);
        expect(this.tree instanceof binarysearchtree.Tree).toBe(true);

      });
      it('inserts nodes in a sorted way, values minors than the current node should go to left, and values greather or equal than the current node should go to right', function(){
        expect(this.tree.root.left.data).toBe(4);
        expect(this.tree.root.right.data).toBe(6);
        expect(this.tree.root.right.right.data).toBe(7);
        expect(this.tree.root.left.left.data).toBe(3);
      });
      it('find a number in the tree and return true and false if it don\'t find it', function(){
        expect(this.tree.search(7)).toBe(true);
        expect(this.tree.search(700)).toBe(false);
      });
    });
  });
})();
