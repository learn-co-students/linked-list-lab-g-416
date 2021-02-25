function getName(node){ 
    return node.name
}

function headNode(linkedlist, collection) {
    return collection[linkedlist]
}

function next(node, collection){
    let nextAddress = node.next
    return collection[nextAddress]
}

function nodeAt(index, linkedList, collection){
    let currentNode = headNode(linkedList, collection)
    for(let i = 0; i < index; i++) { 
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

function addressAt(index, linkedlist, collection){
    if (index === 0){
        return linkedlist 
    } else { 
        let node = nodeAt(index-1, linkedlist, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedlist) { 
    let head = headNode(linkedlist, collection)
    let index = 0
    while(head != node) { 
    index++
    head = next(head, collection)
    }
    return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
  }

function deleteNodeAt(index, linkedlist, collection) {
    let previousNode;
    let currentNode = headNode(linkedlist, collection);
    for(let i = 0; i < index; i++){
       previousNode = currentNode
       currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
  }