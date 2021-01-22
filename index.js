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