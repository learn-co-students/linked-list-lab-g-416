// let collection = {
//     rnadnmd: {name: 'Alexandra', next: 'masjdrf'},
//     masjdrf: {name: 'Kirstin', next: 'ntrandm'}, 
//     ntrandm: {name: 'Juliet', next: 'fasdffd'},
//     fasdffd: {name: 'Timmy', next: 'etyetyh' },
//     etyetyh: {name: 'Jacob', next: null }
// }

function getName(node) {
    return node.name
}

function headNode(firstNodeIndex, collection) {
    return collection[firstNodeIndex]
}

function next(node, collection) {
    // return collection[node.next]

    let nextIndex = node.next
    return collection[nextIndex]
}

function nodeAt(index, headNodeAddress, collection) {
    let node = collection[headNodeAddress]
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(index, headNodeAddress, collection) {
    if (index === 0) {
        return headNodeAddress
    }

    let node = collection[headNodeAddress]
    for (let i = 0; i < index - 1; i++) {
        node = next(node, collection)
    }
    let addressAtIndex = node.next

    return addressAtIndex
}

function indexAt(node, collection, headNodeAddress) {
    let testNode = collection[headNodeAddress]
    let indexForNode = 0

    while (!!testNode) {
        if (node === testNode) {
            return indexForNode
        }
        indexForNode++
        testNode = next(testNode, collection)
    }

    return false
}
// let testNode = collection[headNodeAddress]
// let indexForNode = 0
// while (testNode.next !== null) {
//     if (node === testNode) {
//         return indexForNode
//     }
//     indexForNode++
//     testNode = next(testNode, collection)
// }

// //testing last node in the linked list
// if (node === testNode) {
//     return indexForNode
// }else {
//     return null
// }



function insertNodeAt(index, newNodeAddress, headNodeAddress, collection) {
    let oldAddress = addressAt(index, headNodeAddress, collection)
    if (!!oldAddress) {
        collection[newNodeAddress].next = oldAddress
    } else {
        collection[newNodeAddress].next = null
    }

    if (index > 0) {
        let prevNode = nodeAt(index-1, headNodeAddress, collection)
        prevNode.next = newNodeAddress
    }

}


function deleteNodeAt(index, headNodeAddress, collection) {
    let addressIndexPlusOne = addressAt(index+1, headNodeAddress, collection)
    if (!addressIndexPlusOne) {
        addressIndexPlusOne = null
    }
    if (index > 0) {
        let prevNode = nodeAt(index-1, headNodeAddress, collection)
        prevNode.next = addressIndexPlusOne
    } else {
        collection[headNodeAddress].next = null
        // headNodeAddress = nextNode
    }
}



// let collection = {
//     rnadnmd: {name: 'Alexandra', next: null},
//     masjdrf: {name: 'Kirstin', next: 'ntrandm'}, 
//     ntrandm: {name: 'Juliet', next: 'fasdffd'},
//     fasdffd: {name: 'Timmy', next: 'etyetyh' },
//     etyetyh: {name: 'Jacob', next: null }
// }
