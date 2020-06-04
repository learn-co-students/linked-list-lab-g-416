function getName(node) {
    return node.name;
}

function headNode(head, collection) {
    return collection[head];
}

function next(head, collection) {
    return collection[head.next];
}

function nodeAt(index,  head, collection) {
    let node = headNode(head, collection);
    
    for(let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node;
}

function addressAt(index, head, collection) {
    let node = headNode(head, collection)
  if(!index){
    return head
  }
  
    for(let i = 0; i < index - 1; i++){
      node = next(node, collection)
    }
    return node.next
 
}
 
function indexAt(node, collection, head) {

    let currentNode = headNode(head, collection)
    let currentIdx = 0
    while (currentNode !== node) {
        currentNode = next(currentNode, collection)
        currentIdx++

    }
    return currentIdx
}
 


function insertNodeAt(index, newNodeAddress, linkedList, collection) {
        console.log(indexAt(newNodeAddress));

        let previousNode = nodeAt(index - 1, linkedList, collection)
        let subsequentNode = nodeAt(index, linkedList, collection)
        console.log(previousNode);
        console.log(subsequentNode);
        console.log(newNodeAddress)
        let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection);
        console.log(subsequentNodeAddress)

        

        previousNode.next = newNodeAddress
        let newNode = collection[newNodeAddress]
        newNode.next = subsequentNodeAddress
    
}
    
function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
    console.log(subsequentNode)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress;
    let newNode = headNode(newNodeAddress, collection)
    console.log(newNodeAddress)
    newNode.next = subsequentNodeAddress
    console.log(newNode)
}



function deleteNodeAt(index, linkedList, collection) {
    let nodeToRemove = nodeAt(index, linkedList, collection);
    let previousNode = nodeAt(index - 1, linkedList, collection)
    console.log(previousNode);
    console.log(nodeToRemove);

    previousNode.next = nodeToRemove.next;
    console.log(previousNode)
 
 
     

}

let firstNode = {name: 'susie', next: 'rkjasj'}
let secondNode = {name: 'sam', next: 'asnan'}
let newNode = {name: 'jill', next: ''}
let lastNode = {name: 'charlie', next: null}
let collection = {rkjasj: secondNode,
  asnan: lastNode,
  whana: firstNode,
  ajhsak: newNode}
  let linkedList = 'whana'
  deleteNodeAt(1, linkedList, collection);

