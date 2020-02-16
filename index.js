const getName = (node) => {
    return node.name
}

function headNode(index, collection){
    return collection[index]
}

function next(node, collection) {
    // console.log(node, "---", collection)
    let nextAddress = node.next;
    // Unclear as to why interpolation needs to happen...and it doesn't.
    // return collection[`${nextAddress}`]
    return collection[nextAddress]
}

function nodeAt(index, headNodeAddress, collection) {
    // console.log(index, "\n", headNode, "\n", collection)
    let head = collection[headNodeAddress];
    let currentNode = head

    for ( let i = 0; i < index; i++ ) {
        currentNode = next(currentNode, collection)
    }

    return currentNode    
}

function addressAt(index, link, collection) {
    // Return the "link" at a particular index. Since the link is actually the pointer in the prior node, reduce index by 1 and return the "next" address.
    if (index === 0) {
        return link;
    } else {
        let head = collection[link];
        let currentNode = head
        index -= 1;
        for (let i = 0; i < index; i++ ) {
            currentNode = next(currentNode, collection);
        }
        return currentNode.next
    }
}

function indexAt(node, collection, address) {
    // Find how many iterations/evaluations it takes to get to the node, at the particular address.
    // The iteration count is considered the index.
    let headNode = collection[address];
    let index = 0

    while (node != headNode) {
        index++
        headNode = next(headNode, collection)
    }

    return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    // console.log(index, "---", newNode, "---", linkedList, "\n", collection)
    // console.log(collection[linkedList])
    // Find node at particular index.
    let nodeAtIndex = nodeAt(index, linkedList, collection);
    
    let headNode = collection[linkedList];
    let newNode = collection[newNodeAddress];
    newNode.next = headNode.next;
    headNode.next = newNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
    let toBeDeletedNode = nodeAt(index, linkedList, collection)
    let previousNode = nodeAt(index - 1, linkedList, collection)
    
    previousNode.next = toBeDeletedNode.next
}

