function getName(node) {
    return node.name
}

function headNode(list, collection) {
    return collection[list]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection)
    if (index === 0) {
        return node
    }
    else {
        for (let i = 0; i != index; i++) {    
            node = next(node, collection)
        }
        return node
    }
}

function addressAt(index, linkedList, collection) {
    let node = nodeAt(index, linkedList, collection)
    let keys = Object.keys(collection)
    for (let i = 0; i<keys.length; i++) {
        if (collection[keys[i]] === node) {
            return keys[i]
        }
    }
}

function indexAt(node, collection, linkedList) {
    let current = headNode(linkedList, collection)
    if (node === current) {
        return 0
    }
    else {
        let counter = 0
        while (node !== current) {
            current = next(current, collection)
            counter += 1
        }
        return counter
    }
}

function insertNodeAt(index, address, linkedList, collection) {
    let topNode = nodeAt(index - 1, linkedList, collection)
    let newNode = collection[address]
    newNode.next = addressAt(index, linkedList, collection)
    topNode.next = address
}

function deleteNodeAt(index, linkedList, collection) {
    let toDelete = nodeAt(index, linkedList, collection)
    let prevNode = nodeAt(index - 1, linkedList, collection)
    prevNode.next = toDelete.next
}