function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    let prevNode = nodeAt(index - 1, linkedList, collection)
    return prevNode.next
  }
}

function indexAt(node, collection, linkedList) {
  let i = 0
  while(nodeAt(i, linkedList, collection) != node) {
    i++
  }
  return i
}

function insertNodeAt(index, newNode, linkedList, collection) {
  // get address of node currently at index
  const bumped = addressAt(index, linkedList, collection)
  // get address of node pointing to bumped
  const prev = addressAt(index - 1, linkedList, collection)
  // add new node to collection pointing to bumped
  collection[newNode]['next'] = bumped
  // update prev to point to new node
  collection[prev]['next'] = newNode
}

function deleteNodeAt(index, linkedList, collection) {
  // if index is 0 set linkedlist to address at 1
  if (index === 0) {
    linkedList = addressAt(1, linkedList, collection)
  } else {
    // get address of previous node
    let prevNode = addressAt(index - 1, linkedList, collection)
    // set next of previous node to next of node at index (skipping over node)
    collection[prevNode]['next'] = nodeAt(index, linkedList, collection).next
  }
}


