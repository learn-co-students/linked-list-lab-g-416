// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
// masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
// ntrandm: {name: 'Juliet', next: null}
// }

function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  return collection[node.next]
}

function nodeAt(index, linkedList, collection){
  let node = collection[linkedList]
  for (let i = 0; i < index; i++){
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection){
  if (index === 0){
    return linkedList
  } else {
    return nodeAt(index-1, linkedList, collection).next
  }
}

function indexAt(node, collection, linkedList){
  let i = 0
  let currentNode = collection[linkedList]
  while (node.name !== currentNode.name && i < Object.keys(collection).length){
    currentNode = next(currentNode, collection)
    i++
  }
  if (currentNode.name === node.name){
    return i
  } else {
    return null
  }
}

function insertNodeAt(index, address, linkedList, collection){
  const nodeToInsert = collection[address]
  const prevNode = nodeAt(index - 1, linkedList, collection)
  nodeToInsert.next = prevNode.next
  prevNode.next = address
}

function deleteNodeAt(index, linkedList, collection){
  const prevNode = nodeAt(index - 1, linkedList, collection)
  const node = nodeAt(index, linkedList, collection)
  prevNode.next = node.next
}