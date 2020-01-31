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
  let list = []
  let currentNode = headNode(linkedList, collection)
  list.push(currentNode)
  while (currentNode.next !== null) {
    list.push(collection[currentNode.next])
    currentNode = collection[currentNode.next]
  }

  return list[index]
}

function addressAt(index, linkedList, collection) {
  let currentIndex = 0
  let currentNode = headNode(linkedList, collection)
  while (currentIndex !== index) {
    currentIndex += 1
    currentNode = collection[currentNode.next]
  }
  for (const property in collection) {
    if (currentNode === collection[property]) {
      return property
    }
  }
}

function indexAt(node, collection, linkedList) {
  let currentIndex = 0
  let currentNode = headNode(linkedList, collection)
  while (currentNode !== node) {
    currentIndex += 1
    currentNode = collection[currentNode.next]
  }

  return currentIndex
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let currentNodeAddress = addressAt(index, linkedList, collection)
  let newNode = collection[newNodeAddress]

  prevNode.next = newNodeAddress
  newNode.next = currentNodeAddress

}

function deleteNodeAt(index, linkedList, collection) {
  let prevNode;
  index === 0? prevNode = null: prevNode = collection[addressAt(index-1, linkedList, collection)]

  if (prevNode === null) {
    nodeAt(index, linkedList, collection).next = null
  } else {
    prevNode.next = addressAt(index + 1, linkedList, collection)
  }

}
