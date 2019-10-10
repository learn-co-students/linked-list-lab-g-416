function getName(node){
    return node['name']
}

function headNode(head, collection){
    return collection[`${head}`]
}

function next(head, collection){
    let next = head['next']
    return collection[`${next}`]
}

function nodeAt(index, headNode, collection){
    let i = 0
    let node = collection[`${headNode}`]
    if(index == 0){
        return collection[`${headNode}`]
    }
    else{
        while(i < index){
            node = next(node, collection)
            i+=1
        }
    }
    if(i == index){
        return node
    }
}

function addressAt(index, headNode, collection){
    if(index == 0){
        return headNode
    }
    else{
        let node =  nodeAt(index - 1, headNode, collection)
        return node.next
    }
}

function indexAt(node, collection, headNode){
    let i = 0
    while(node != nodeAt(i, headNode, collection)){
        i += 1
    }
    if (node == nodeAt(i, headNode, collection)){
        return i
    }
}

function insertNodeAt(index, address, headNode, collection){
    let oldNode = nodeAt(index - 1, headNode, collection)
    let newNode = collection[`${address}`]
    newNode.next = oldNode.next
    oldNode.next = address
    return newNode.next
}

function deleteNodeAt(index, headNode, collection){
    let nodeToDelete = nodeAt(index, headNode, collection)
    let nodeBeforeNodeToDelete = nodeAt(index - 1, headNode, collection)
    nodeBeforeNodeToDelete.next = nodeToDelete.next
    delete collection[`${nodeToDelete}`]
}