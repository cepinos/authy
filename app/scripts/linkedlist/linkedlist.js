// Generated by CoffeeScript 1.10.0
(function() {
  var List, Node, linkedList;

  Node = (function() {
    Node.prototype.data = null;

    Node.prototype.next = null;

    function Node(data1, next) {
      this.data = data1 != null ? data1 : null;
      this.next = next != null ? next : null;
    }

    return Node;

  })();

  List = (function() {
    List.prototype.head = null;

    function List() {
      this.head = new Node();
    }

    List.prototype.push = function(data) {
      var node;
      node = new Node(data, this.head);
      return this.head = node;
    };

    List.prototype.pop = function() {
      var data;
      data = this.head.data;
      if (this.head.next != null) {
        this.head = this.head.next;
      }
      return data;
    };

    return List;

  })();

  linkedList = {
    Node: Node,
    List: List
  };

  window['linkedList'] = linkedList;

}).call(this);