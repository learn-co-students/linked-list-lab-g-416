function getName(node) {
  return node.name;
}

function headNode(linked, collection) {
  return collection[linked];
}

function next(node, collection) {
  let followingNode = node.next;
  return collection[`${followingNode}`]
}

function nodeAt(index, linked, collection) {
  let currentNode = headNode(linked, collection);
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode;
}

function addressAt(index, linked, collection) {
  if (index == 0) {
    return linked;
  } else {
    let currentNode = nodeAt(index - 1, linked, collection)
    return currentNode.next
  }
}

function indexAt(provided, collection, linked) {
  let currentNode = headNode(linked, collection);
  let currentIndex = 0;
  while (currentNode != provided) {
    currentIndex++
    currentNode = next(currentNode, collection)
  }
  return currentIndex;
}

function insertNodeAt(index, nextNodeProperty, linked, collection) {
  let previousNode = nodeAt(index - 1, linked, collection);
  let previousNodeIndex = indexAt(previousNode, collection, linked);
  let previousNodeAddress = addressAt(previousNode, linked, collection);
  let nextNode = nodeAt(index, linked, collection);
  let nextNodeIndex = indexAt(nextNode, collection, linked);
  let nextNodeAddress = addressAt(nextNode, linked, collection);
  previousNode.next = nextNodeProperty;
  let newNode = collection[nextNodeProperty];
  newNode.next = nextNodeAddress;
}

function deleteNodeAt(index, linked, collection) {
  let previousNode;
  let currentNode = headNode(linked, collection);
  for (let i = 0; i < index; i++) {
    previousNode = currentNode;
    currentNode = next(currentNode, collection);
  }
  previousNode.next = currentNode.next;
}
