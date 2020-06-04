function getName(node) {
  return node.name
}

function headNode(key, collection) {
  return collection[key]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, head, collection) {
  let node = headNode(head, collection)
  for(let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, head, collection) {
  if(index == 0) {
    return head
  } else {
    let node = nodeAt(index - 1, head, collection)
    return node.next
  }
}

function indexAt(node, collection, head) {
  let currentNode = headNode(head, collection)
  let index = 0
  while(node !== currentNode) {
    currentNode = next(currentNode, collection)
    index ++
  }
  return index
}

function insertNodeAt(index, key, head, collection) {
  let previous = nodeAt(index - 1, head, collection)
  let nextAddress = previous.next
  previous.next = key
  let newNode = next(previous, collection)
  newNode.next = nextAddress
}

function deleteNodeAt(index, head, collection) {
  let previous = nodeAt(index - 1, head, collection)
  previous.next = next(previous, collection).next
}
