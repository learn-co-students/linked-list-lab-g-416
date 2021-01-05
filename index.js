function getName(node){
 return node.name
}

function headNode(list, collection) {
  return collection[list]
}

function next(node, collection){
  return collection[node.next]
}

function nodeAt(index, list, collection){
  let node = headNode(list, collection)
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, address, collection) {
  return index === 0 ? address : nodeAt(index - 1, address, collection).next
}

function indexAt(node, collection, list) {
  let i = 0
  while (node !== nodeAt(i,list,collection)) {
    i++
  }
  return i
}

function insertNodeAt(i,next,list,collection){
  let currentNode = nodeAt(i - 1, list, collection),
   nextAddress = currentNode.next,
   newNode = collection[next]

  currentNode.next = next
  newNode.next = nextAddress
}

function deleteNodeAt(i,list,collection) {
  let prevNode = nodeAt(i - 1, list, collection),
   next = nodeAt(i, list, collection).next
   prevNode.next = next
}
