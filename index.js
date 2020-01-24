function getName(node) {
  return node.name;
}


function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  const nextLocation = head.next;
  return collection[nextLocation]

}

function nodeAt(index, linkedList, collection) {
  let head = headNode(linkedList, collection);
  if (index !== 0) {

    for (let i = 0; i < index; i++) {
      head = next(head, collection)
    }
  }
  return head
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    let prevNode = nodeAt(index-1, linkedList, collection);
    return prevNode.next
  }
}

function indexAt(node, collection, linkedList) {
  let index = 0;
  let currentNode = collection[linkedList];

  for (index; index < Object.keys(collection).length; index++) {
    if(node === currentNode) {
      return index
    } else {
      currentNode = next(currentNode, collection)
    }
  }
}

function insertNodeAt(index, location, linkedList, collection) {
  let prevNode = nodeAt(index-1, linkedList, collection);
  let newNode = collection[location];
  newNode.next = prevNode.next;
  prevNode.next = location;
}

function deleteNodeAt(index, linkedList, collection) {
  let prevNode = nodeAt(index-1, linkedList, collection);
  let node = nodeAt(index, linkedList, collection);
  prevNode.next = node.next;
  node.next = null;
}

