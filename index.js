/* order of people:
Alexandra -> Kirstin -> Juliet -> Timmy -> Jacob 

Each node looks like:
  {name: 'Alexandra', next: 'addressOfNextPerson'}

Collection of nodes should be stored as a JS object:
   let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    ntrandm: {name: 'Juliet', next: null}
  }
*/

function getName(node) {
    return node["name"];
}

function headNode(list, collection){
    return collection[list];
}

function next(node, collection) {
    let nextAddress = node["next"];
    return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection);
    for (let i = 0; i < index; i++){
      node = next(node, collection);
    }
    return node;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
      let node = nodeAt(index - 1, linkedList, collection);
      return node["next"];
  }
}

function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection);
    let indexCounter = 0;

    while (currentNode != node){
        currentNode = next(currentNode, collection);
        indexCounter = indexCounter + 1;
    }

    return indexCounter;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection);
    let subsequentNode = nodeAt(index, linkedList, collection);
  
    let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
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
