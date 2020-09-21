const getName = (node) => {
  return node.name;
};

const headNode = (linkedList, collection) => {
  return collection[linkedList];
};

const next = (head, collection) => {
  return collection[head.next];
};

const nodeAt = (index, linkedList, collection) => {
  let node = collection[linkedList];
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
};

const addressAt = (index, linkedList, collection) => {
  let address = linkedList;
  for (let i = 0; i < index; i++) {
    address = collection[linkedList].next;
  }
  return address;
};

const indexAt = (node, collection, linkedList) => {
  let index = 0;
  let headNode = collection[linkedList];
  if (node === next(headNode, collection)) {
    index++;
  }
  return index;
};

const insertNodeAt = (index, property, linkedList, collection) => {
  // let indexedNode = nodeAt(index, linkedList, collection);
  let headNode = collection[linkedList];
  let newNode = collection[property];
  newNode.next = headNode.next;
  headNode.next = property;
};

const deleteNodeAt = (index, linkedList, collection) => {
  let deletedNode = nodeAt(index, linkedList, collection);
  let previousNode = nodeAt(index - 1, linkedList, collection);
  previousNode.next = deletedNode.next;
};
