
function getName(node){
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, headNodeAddress, collection) {
    let node = collection[headNodeAddress]
    for (let i = 0; i < index; i++){
        node = next(node, collection)
    }
    return node
}

function addressAt(index, nodeAddress, collection){
    if (index === 0) {
        return nodeAddress
    }
    let node = collection[nodeAddress]
    for (let i = 0; i < index - 1; i++){
        node = next(node, collection)
    }
    let addressAtIndex = node.next
    return addressAtIndex
}

function indexAt(node, collection, nodeAddress) {
    // // if (collection[nodeAddress] === node) {
    // //     return 0
    // // }
    // let testNode = collection[nodeAddress]
    // let indexForNode = 0
    // while (testNode.next !== null){
    //     if(node === testNode){
    //         return indexForNode
    //     }
    //     indexForNode++
    //     testNode = next(testNode, collection)
    // }
    // if (node === testNode) {
    //     return indexForNode
    // } else {
    //     return null
    // }
    let testNode = collection[nodeAddress]
    let indexForNode = 0

    while (!!testNode) {
        if (node === testNode){
            return indexForNode
        }
        indexForNode++
        testNode = next(testNode, collection)
    }
    return false
}

function insertNodeAt(index, newNodeAddress, nodeAddress, collection){
    let oldAddress = addressAt(index, nodeAddress, collection)
    if (!!oldAddress) {
        collection[newNodeAddress].next = oldAddress
    } else {
        collection[newNodeAddress].next = null
    }

    if (index > 0) {
        let prevNode = nodeAt(index - 1, nodeAddress, collection)
        prevNode.next = newNodeAddress
    }

}

function deleteNodeAt(index, headNodeAddress, collection) {
    let addressIndexPlusOne = addressAt(index + 1, headNodeAddress, collection)
    if (!addressIndexPlusOne) {
        addressIndexPlusOne = null
    }
    if (index > 0) {
        let prevNode = nodeAt(index - 1, headNodeAddress, collection)
        prevNode.next = addressIndexPlusOne
    } else {
        collection[headNodeAddress].next = null
        // headNodeAddress = nextNode
    }
}