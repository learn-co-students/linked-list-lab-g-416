
/*
let firstNode = {name: 'susie', next: 'rkjasj'}
let secondNode = {name: 'sam', next: 'asnan'}
let lastNode = {name: 'charlie', next: null}
let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
let linkedList = 'whana'
let head = collection[linkedList]
*/


// write function to getName, return name of node
function getName(node) {
  return node.name;
}

// write headNode, returns head node 
function headNode(linkedList, collection) {
  return collection[linkedList];
}

// write next, returns the following node every time called
function next(head, collection) {
  let nextNode = head.next;
  return collection[nextNode];
}

// write nodeAt, returns the node at the provided index
function nodeAt(index, linkedList, collection) {
  // start at head and travers list until index reached
  let currIdx = 0;
  let node = headNode(linkedList, collection);
  while (currIdx < index) {
    node = next(node, collection);
    currIdx++;
  }
  // return node 
  return node;
}

// write addressAt, returns address of node at the address 
function addressAt(index, linkedList, collection) {
 let nodeAddress = index === 0 ? 
  linkedList : nodeAt(index - 1, linkedList, collection).next;
 return nodeAddress;
}

// write indexAt, returns index of provided node 
function indexAt(node, collection, linkedList) {
  console.log(node, collection, linkedList)
  let currNode = collection[linkedList];
  let index = 0;
  
  while (currNode !== node) {
    currNode = next(currNode, collection);
    index++;
  }
  return index;
}

// write insertNodeAt, sets the next property of inserted node 
function insertNodeAt(index, next, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection);

  // set the next property of the node prev to inserted node 
  collection[next].next = prevNode.next; // next: {name: 'jill', next: ''}.next = 'rkjasj' 
  
  // insert the node at the provided index, maintain order of other nodes 
  prevNode.next = next; // {name: 'susie', next: 'rkjasj'}.next = 'ajhsak'


}

// write deleteNodeAt, sets next property of the node previous to deleted node 
function deleteNodeAt(index, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection);
  let nodeToBeDeleted = nodeAt(index, linkedList, collection);
  
  // should set the next property of the node previous to the deleted node
  prevNode.next = nodeToBeDeleted.next;
  nodeToBeDeleted.next = null;
}

















