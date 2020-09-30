function getName(node) {
    return node['name'];
}

function headNode(list, collection) {
    return collection[list];
}

function next(node, collection) {
    let id = node['next'];
    return collection[id];
}

function nodeAt(idx, list, collection) {
    let node = collection[list];
    while (idx > 0) {
        node = next(node, collection);
        idx--
    }
    return node;
}

function addressAt(idx, list, collection) {
    if (idx === 0) {
        return list;
    } else {
        let node = nodeAt(idx - 1, list, collection);
        return node['next'];
    }
}

function indexAt(node, collection, list) {
    let idx = 0;
    let nodeCheck = headNode(list, collection);
    while(getName(nodeCheck) !== getName(node)) {
        idx++;
        nodeCheck = next(nodeCheck, collection);
    }
    return idx;
}

function insertNodeAt(idx, address, list, collection) {
    let prevNode = nodeAt(idx - 1, list, collection);
    let nextAddress = addressAt(idx, list, collection) || null;
    prevNode['next'] = address;
    collection[address]['next'] = nextAddress;
    return collection;
}

function deleteNodeAt(idx, list, collection) {
    let prevNode = nodeAt(idx - 1, list, collection);
    let address = addressAt(idx + 1, list, collection);
    prevNode['next'] = address;
    return collection;
}