function getName(node) {
    return node.name
}

let headNode = (headAddress, collection) => {
    return collection[headAddress]
}

let next = (node, collection) => {
    return collection[node.next]
}

let nodeAt = (idx, headAddress, collection) => {
    let node = collection[headAddress];
    for (let i = 0; i < idx; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(idx, headAddress, collection) {
    let node = collection[headAddress]
    let address = headAddress;

    for (let i = 0; i < idx; i++ ) {
        address = node.next
        node = next(node, collection)
    }
    return address
}

function indexAt(node, collection, headAddress) {
    let  searchNode = collection[headAddress]
    let idx = 0

    for (let i = 0; i < Object.keys(collection).length; i++) {
        if (node.name === searchNode.name) {
            return idx = i
        } else {
            searchNode = next(searchNode, collection)
        }
    }
    return idx
}

function insertNodeAt(idx, selectNodeAddress, headAddress, collection) {
    let beforeNode;
    let node = collection[selectNodeAddress]
    
    if (idx === 0) {
        node.next = headAddress
    } else {
        beforeNode = nodeAt(idx - 1, headAddress, collection);
        node.next = beforeNode.next;
        beforeNode.next = selectNodeAddress;
    }
}

let deleteNodeAt = (idx, headAddress, collection) => {
    let beforeNode;
    let node = nodeAt(idx, headAddress, collection)

    beforeNode = nodeAt(idx - 1, headAddress, collection);
    beforeNode.next = node.next
}