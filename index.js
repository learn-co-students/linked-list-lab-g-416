function getName(node) {
    return node["name"]
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    let nextAddress = node[1]
    return collection[nextAddress]
}

function nodeAt(index, linkedList, collection) {
    collection[index]
}

function addressAt(index, linkedList, collection) {

}

function indexAt(node, collection, linkedList) {
    for(i = 0; i < index; i++) {
        node = next(node, collection)
    }

    return node
}

