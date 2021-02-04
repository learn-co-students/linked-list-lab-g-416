function getName(node) {
    return node["name"]
}

function headNode(head, ll) {
    return ll[head]
}

function next(node, ll) {
    let pointer = node["next"]
    return ll[pointer]
}

function nodeAt(index,b,c) {
  
    let head = headNode(b,c)
    for (let i=0; i<index; i++) {
        console.log("i=", i, " head=",head, "_index=", index)
        head = next(head, c)
    }
    return head
}

function addressAt(a,b,c) {
    if (a==0) {
        return b
    } else 
    {
        let node = nodeAt(a-1,b,c)
    return node["next"]
    }
}

function indexAt(address, collection, head) {
    let index = 0
    let match = collection[head]
    while (address != match) {
        match = next(match, collection)
        index ++
    }
    return index
//    if (address==collection[head]) {
//        return 0
//    } else {
//         let match=0;
//         let index = 1;
//         let n = collection[head]
//         while (match==0) {
//              n = next(n, collection)
//             console.log("n=",n," address=",address)
//             if (address==n) {
//                 match = 1
//                 return index
//             } else {
//                 index ++
//             }
//         }
//    }
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    // let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    // let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
    // let previousNodeAddress = addressAt(previousNode, linkedList, collection)
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