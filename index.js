function getName(node){
    return node.name
}

function headNode(startAddress, collection){
    return collection[startAddress]
}

function next(node, collection){
    const nextAddress = node.next
    return collection[nextAddress]
}

function nodeAt(index, startAddress, collection){
    let node = headNode(startAddress, collection)
    for(let i = 0; i < index; i++){
        node = next(node, collection)
    }
    return node;
}

function addressAt(index, startAddress, collection){
    let node = headNode(startAddress, collection)
    if(index == 0){
        return startAddress;
    } else {
        for(let i = 0; i < index - 1; i++){
            node = next(node, collection)
        }
        return node.next;
    }
}

function indexAt(node, collection, startAddress){
    let ref = headNode(startAddress, collection)
    let index = 0;
    while(ref != node){
        ref = next(ref, collection)
        index++;
    }
    return index;
}

function insertNodeAt(index, address, startAddress, collection){
    const nextAddress = addressAt(index, startAddress, collection);
    nodeAt(index - 1, startAddress, collection).next = address;
    nodeAt(index, startAddress, collection).next = nextAddress;
}

function deleteNodeAt(index, startAddress, collection){
    const nextAddress = addressAt(index + 1, startAddress, collection);
    nodeAt(index - 1, startAddress, collection).next = nextAddress;
}