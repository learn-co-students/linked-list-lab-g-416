function getName(node) {
    return node.name;
}

function headNode(linkedList, collection) {
    return collection[linkedList];
}

function next(node, collection) {
    let next = node.next;
    return collection[next];
}

function nodeAt(index, linkedList, collection) {
    let counter = 0;
    let currentNode = headNode(linkedList, collection);
    while (counter < index) {
        currentNode = next(currentNode, collection);
        counter ++
    }
    return currentNode;
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList;
    }
    return nodeAt(index - 1, linkedList, collection).next;
}

function indexAt(node, collection, linkedList) {
    let counter = 0;
    let currentNode = headNode(linkedList, collection);
    while (currentNode !== node) {
        currentNode = next(currentNode, collection);
        counter ++
    }
    return counter;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
  }
  
  
  function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
       previousNode = currentNode
       currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
  }