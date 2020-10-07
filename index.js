//example
//let collection = {
  //head: {name: 'Alexandra', next: 'firstNode'},
  //firstNode: {name: 'Kirstin', next: 'secondNode'}, 
  //secondNode: {name: 'Juliet', next: null}
  //}

function getName(node) {
  //return name of the node passed through
  return node.name
}

function headNode(head, list) {
  //return head of list
  return list[head]
}

function next(node, list) {
  //return next node
  return list[node.next]
}

function nodeAt(index, head, list) {
  //return node at provided index
  let node = headNode(head, list)
  for(let i = 0; i < index; i++) {
    node = next(node, list)
    if(!node) return null
  }
  return node
}

function addressAt(index, head, list) {
  //return address of node at address
  if(index === 0) return head
  const prevNode = nodeAt(index -1, head, list)
  return !!prevNode ? prevNode.next : null
}

function indexAt(node, list, head) {
  //should return index of previous node
  let currentNode = list[head]
  let counter = 0
  while(node !== currentNode) {
    currentNode = next(currentNode, list)
    counter ++
    if(!currentNode) return -1
  }
  return counter
}

function insertNodeAt(index, newNode, head, list) {
  //should set props of inserted node
  //should set props of previous node
  //should insert node at provided index
  //maintain order of all other nodes
  list[newNode].next = addressAt(index, head, list)
  if(index > 0) {
    const prevNode = nodeAt(index-1, head, list)
    if(!prevNode) throw 'Invalid'
    prevNode.next = newNode
  }else {
    head = newNode
  }
}

function deleteNodeAt(index, head, list) {
  //should set props of previous node
  //should delete node at provided index
  //maintain order of all other nodes
  if(index === 0) {
    head = headNode(head, list).next
  }
  const prevNode = nodeAt(index - 1, head, list)
  if(!prevNode) throw 'Invalid'
  prevNode.next = addressAt(index + 1, head, list)
}