function getName(node) {
    return node["name"]
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(linkedList, collection) {
    let nextAddress = linkedList["next"];
    return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
    let head = collection[linkedList];
    let currentNode = head
    for (let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        let head = collection[linkedList];
        let currentNode = head
        index -= 1;
        for (let i = 0; i < index; i++ ) {
            currentNode = next(currentNode, collection);
        }
        return currentNode.next
    }
}

function indexAt(node, collection, linkedList) {
    let headNode = collection[linkedList]
    let index = 0
    while (node != headNode) {
        index++
        headNode = next(headNode, collection)
    }
    return index
}

function insertNodeAt(index, address, linkedList, collection) {
    let nodeAtIndex = nodeAt(index, linkedList, collection);
    let headNode = collection[linkedList];
    let newNode = collection[address];
    newNode.next = headNode.next;
    headNode.next = address;   
}

function deleteNodeAt(index, linkedList, collection) {
    let toBeDeletedNode = nodeAt(index, linkedList, collection)
    let previousNode = nodeAt(index - 1, linkedList, collection)
    previousNode.next = toBeDeletedNode.next
}