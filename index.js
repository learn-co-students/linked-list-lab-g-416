function getName(node) {
  return node.name
}

function headNode(list, collection) {
  return collection[list]
}

function next(node, collection) {
  let nextNodePointer = node.next
  return collection[nextNodePointer]
}

function nodeAt(index, list, collection) {
  let node = headNode(list, collection)
  for (let i=0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, list, collection) {
  if (index === 0) {
    return list
  }

  let address = list
  for (let i=0; i < index; i++) {
    let node = collection[address]
    address = node.next
  }
  return address
}

function indexAt(node, collection, list) {
  let index = 0
  let collectionSize = Object.keys(collection).length
  for (let i = 0; i < collectionSize; i++) {
    if (nodeAt(index, list, collection) === node) {
      return index
    }
    index++
  }
}

function insertNodeAt(index, address, list, collection) {
  let previousNode = nodeAt(index - 1, list, collection)
  let previousNodeNextAddress = previousNode.next
  if (previousNode) {
    collection[address].next = previousNodeNextAddress
    return previousNode.next = address
  } else {
    return collection[address].next = addressAt(0, list, collection)
  }
}

function deleteNodeAt(index, list, collection) {
  let nextNodeAddress = addressAt(index + 1, list, collection)
  let previousNode = nodeAt(index - 1, list, collection)
  return previousNode.next = nextNodeAddress
}
