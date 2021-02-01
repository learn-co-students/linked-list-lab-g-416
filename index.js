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
  let node = collection[linkedList]
  
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  
  return node
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    return nodeAt(index - 1, linkedList, collection).next
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = collection[linkedList]
  let index = 0
  
  while (currentNode.next !== null) {
    if (node.name === currentNode.name) {
      return index
    } else {
      index++
      currentNode = collection[currentNode.next]
    }
  }
  
  return -1;
}

function insertNodeAt(index, address, linkedList, collection) {
  let node = collection[linkedList]
  
  for (let i = 0; i < index - 1; i++) {
    node = next(node, collection)
  }
  
  let nextAddress = node.next
  node.next = address
  node = next(node, collection)
  node.next = nextAddress
}

function deleteNodeAt(index, linkedList, collection) {
  let node = collection[linkedList]
  
  for (let i = 0; i < index - 1; i++) {
    node = next(node, collection)
  }
  
  const preceedingNode = node
  const nodeToRemove = next(node, collection)
  
  preceedingNode.next = nodeToRemove.next
}





