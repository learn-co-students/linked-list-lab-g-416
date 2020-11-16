function getName (node){
    return node.name
}

function headNode(list, collection){
    let head = collection[list]
    return head
}

function next(head, collection) {
    return collection[head.next]
}
//nodeAt(0, 'whana', collection)
//let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
function nodeAt(index, head, collection){
    let node = collection[head];
    for (let i=0; i < index; i++){
        node = next(node, collection)
    }
    return node
}
//return the key
//0, head, collection
//let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
//let firstNode = {name: 'susie', next: 'rkjasj'}
//let secondNode = {name: 'sam', next: 'asnan'}
//let lastNode = {name: 'charlie', next: null}
function addressAt(idx, head, collection){
    if (idx === 0 ){
        return head
    } else {
        let node = collection[head];
        for (let i = 0; i < idx;i++){
            node = node.next
        }
        return node
    }
}
//return the index
//traverse the list, find the node, return the index
//indexAt(secondNode, collection, linkedList)).toEqual(1)
//let secondNode = {name: 'sam', next: 'asnan'}
//1
function indexAt(node, collection, head){
    let nodeCheck = collection[head]//firstNode
    let index = 0;
    while (nodeCheck !== node){
        nodeCheck = next(nodeCheck, collection)
        index++
    }
    return index;
}
//insertNodeAt(1, 'ajhsak', linkedList, collection)
// let firstNode = {name: 'susie', next: 'rkjasj'}
//     let secondNode = {name: 'sam', next: 'asnan'}
//     let newNode = {name: 'jill', next: ''}
//     let lastNode = {name: 'charlie', next: null}
//     let collection = {rkjasj: secondNode,
//       asnan: lastNode,
//       whana: firstNode,
//       ajhsak: newNode}
//     let linkedList = 'whana'
function insertNodeAt(index, newHead, head, collection){
    // let node = nodeAt(index, head, collection)
    // let prev = nodeAt(index - 1, head, collection)
    let currentNode = addressAt(index, head, collection) //rkjasj
    let prev = nodeAt(index-1, head, collection) //{objectnode}
    collection[newHead].next = currentNode
    prev.next = newHead
    return collection[newHead].next
}
// let firstNode = {name: 'susie', next: 'rkjasj'}
//     let secondNode = {name: 'sam', next: 'asnan'}
//     let newNode = {name: 'jill', next: ''}
//     let lastNode = {name: 'charlie', next: null}
//     let collection = {rkjasj: secondNode,
//       asnan: lastNode,
//       whana: firstNode,
//       ajhsak: newNode}
//       let linkedList = 'whana'
//       deleteNodeAt(1, linkedList, collection)
function deleteNodeAt(index, head, collection){
    let current = nodeAt(index, head, collection) //{full ObjNode}
    let next = current.next
    let prev = nodeAt(index-1, head, collection)
    prev.next = next
    return prev.next   
}