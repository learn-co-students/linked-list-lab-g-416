function getName(node) {
    return node["name"]
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
    const first = headNode(linkedList, collection)
    let node = first 
    for(let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node 
}

function addressAt(sourceIndex, linkedList, collection) {
    if (sourceIndex === 0) {
        return linkedList
    } else {
        const previousNode = nodeAt(sourceIndex - 1, linkedList, collection)
        return previousNode.next 
    }
   
}

function indexAt(node, collection, linkedList) {
    let index = 0    
    let currentNode = headNode(linkedList, collection)

    if (currentNode == node) {
        return index 
    } else {
        while (currentNode != node) {
            index ++
            currentNode = next(currentNode, collection)
            if (currentNode.name == node.name) {
                return index 
            }
            
        }
    }    
}

function insertNodeAt(index, address, linkedList, collection) {
    const addressToBeShifted = addressAt(index, linkedList, collection)
    if (index === 0) {
        collection[address].next = addressToBeShifted
        linkedList = address
    } else {
        let previousNode = nodeAt(index-1, linkedList, collection)
        previousNode.next = address
        collection[address].next = addressToBeShifted
    }
}

function deleteNodeAt(index, linkedList, collection) {
    if (index === 0) {
        linkedList = collection[linkedList].next
    } else {
        let previousNode = nodeAt(index-1, linkedList, collection)
        let nodeToDelete = nodeAt(index, linkedList, collection)
        previousNode.next = nodeToDelete.next 
    }
}
