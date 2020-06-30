function getName(node) {
    return node['name']
}

function headNode(key, collection) {
    return collection[key]
}

function next(head, collection) {
    let next = head['next']
    return collection[next]
}

function nodeAt(index, head, collection) {
    let node = headNode(head, collection);

    for (let i = 0; i < index; i++) {
        node = next(node, collection);
    }

    return node
}

function addressAt(index, head, collection) {
    let node = headNode(head, collection);

    if (!index) {
      return head;
    } else {
        for (let i = 0; i < index - 1; i++) {
          node = next(node, collection);
        }
    }

    return node.next;
}

function indexAt(node, collection, head) {
    let currentNode = headNode(head, collection);
    let currentIndex = 0;

    while (currentNode !== node) {
        currentNode = next(currentNode, collection);
        currentIndex++
    }

    return currentIndex
}

function insertNodeAt(index, address, head, collection) {
    let previousNode = nodeAt(index - 1, head, collection);
    let currentNext = previousNode.next;
    previousNode.next = address;
    let newNode = next(previousNode, collection)
    newNode.next = currentNext;
}

function deleteNodeAt(index, head, collection) {
    let previousNode = nodeAt(index - 1, head, collection);
    let nodeToBeDeleted = nodeAt(index, head, collection);
    previousNode.next = nodeToBeDeleted.next;
    nodeToBeDeleted.next = null;
}