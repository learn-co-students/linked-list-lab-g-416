function getName(node) {
  return node.name;
}

function headNode(list, list2) {
  return list2[list];
}

function next(node, collection) {
  let next = node.next;
  return collection[next];
}

function nodeAt(index, list, collection) {
  let node = headNode(list, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, list, collection) {
  let node = nodeAt(index - 1, list, collection);
  return index == 0 ? list : node.next;
}

function indexAt(node, collection, list) {
  let nnode = headNode(list, collection);
  let ni = 0;
  while (nnode !== node) {
    nnode = next(nnode, collection);
    ni++;
  }
  return ni;
}

function insertNodeAt(index, newNodeAddress, list, collection) {
  let prevNode = nodeAt(index - 1, list, collection)
  let nextNode = nodeAt(index, list, collection)
  let nextNodeAddress = addressAt(nextNode, list, collection)
  prevNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = nextNodeAddress
}

function deleteNodeAt(index, list, collection) {
  let previousNode;
  let currentNode = headNode(list, collection);

  for(let i = 0; i < index; i++){
     previousNode = currentNode
     currentNode = next(currentNode, collection);
  }
  
  previousNode.next = currentNode.next
}
