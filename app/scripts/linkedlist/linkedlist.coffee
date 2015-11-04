class Node
  data : null
  next : null

  constructor: (@data = null, @next = null) ->

class List
  head : null

  constructor: ()->
    @head = new Node()

  push  : (data) ->
    node = new Node(data, @head)
    @head = node

  pop  : ->
    data = @head.data
    @head = @head.next if @head.next?
    data

linkedList =
  Node : Node
  List : List

window['linkedList'] = linkedList