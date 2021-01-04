function getName(node) {
  return node.name
}

function headNode(address, collection) {
  return collection[address]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(nodeIndex, address, collection) {
  let targetNode = collection[address]

  for (let i = 0; i < nodeIndex; i++) {
    targetNode = next(targetNode, collection)
  }
  
  return targetNode
}

function addressAt(nodeIndex, address, collection) {
  if (nodeIndex === 0) {
    
    return address
  } else {
    let targetNode = nodeAt(nodeIndex - 1, address, collection)

    return targetNode.next
  }  
}

function indexAt(node, collection, address) {
  let currentNode = headNode(address, collection)
  let currentIndex = 0

  while (currentNode !== node) {
    currentNode = next(currentNode, collection)
    currentIndex++
  }

  return currentIndex
}

function insertNodeAt(index, newAddress, address, collection) {
  let currentNode = nodeAt(index - 1, address, collection)
  let nextAddress = currentNode['next']
  let newNode = collection[newAddress]

  currentNode['next'] = newAddress
  newNode['next'] = nextAddress
}

function deleteNodeAt(index, address, collection) {
  let nodeToDelete = nodeAt(index , address, collection)
  let previousNode = nodeAt(index - 1, address, collection)

  previousNode['next'] = nodeToDelete['next']
}
