function getName(node) {
    return node['name']
}

function headNode(linkedList, collection) {
    return collection[linkedList];
}

function next(node, collection) {
    let nextAddress = node['next'];
    return collection[nextAddress]
}

function nodeAt(index, head, collection) {
    let node = collection[head];
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node;
}

function addressAt(index, head, collection) {
    let node = collection[head];
    if (index === 0) {
        return head;
    } else {
        for (let i = 0; i < index - 1; i++) {
            node = next(node, collection);
        }
        return node['next'];
    }
}

function indexAt(targetNode, collection, head) {
    let index = 0;
    let node = collection[head];
    while (node !== targetNode) {
        node = next(node, collection);
        index++
    }
    return index
}

function insertNodeAt(index, newAddress, head, collection) {
    let newNode = collection[newAddress];
    let priorNode = nodeAt(index - 1, head, collection);
    newNode.next = priorNode.next
    priorNode.next = newAddress;
}

function deleteNodeAt(index, head, collection) {
    let priorNode = nodeAt(index - 1, head, collection);
    let deletedNode = nodeAt(index, head, collection);
    priorNode.next = deletedNode.next;
}