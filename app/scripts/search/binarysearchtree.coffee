class Node
  left : null
  right : null
  data : null

  constructor: (@data) ->

  isLeaf: ->
    not @left? and not @right?


class Tree
  root : null
  constructor: ->
    @root = new Node()

  insert: (data, node = @root)->

    if not node.data? then return node.data = data
    newNode = new Node data

    if data < node.data
      if not node.left?
        node.left = newNode
      else
        @insert data, node.left
    else
      if not node.right?
        node.right = newNode
      else
        @insert data, node.right
    return node

  search: (data, current = @root) ->
    if data == current.data
      return true

    if not current.left? and not current.right?
      return false

    if data < current.data
      return @search data, current.left

    return @search data, current.right




binarysearchtree = {
  Node : Node
  Tree : Tree
}

window.binarysearchtree = binarysearchtree