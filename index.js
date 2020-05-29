function getName(node){
  return node["name"]
}

function headNode(head, collection){
  return collection[head]
}

function next(node, collection){
  return collection[node["next"]]
}


function nodeAt(index, head, collection){
  let node = headNode(head, collection)
  for(let i = 0; i < index; i++){
    node = next(node, collection)
  }
  return node
}

function addressAt(index, head, collection){
  let node = headNode(head, collection)
  if(index === 0){
    return head
  }
  else {
    for(let i = 0; i < index-1; i++){
      node = next(node, collection)
    }
    return node["next"]}
}

function indexAt(node, collection, head){
  let currentNode = headNode(head, collection)
  let count = 0
  const long = Object.keys(collection).length
  while(count < long){
    if (currentNode["name"] === node["name"]){
      return count
    }
    else{
      count += 1
      currentNode = next(currentNode, collection)
    }
  }
}

function insertNodeAt(index, address, head, collection){
  let prevNode = nodeAt(index-1, head, collection)
  let newNode = collection[address]
  newNode.next = prevNode.next
  prevNode.next = address
}

function deleteNodeAt(index, head, collection){
  let prevNode = nodeAt(index-1, head, collection)
  let deleteNode = nodeAt(index, head, collection)
  prevNode.next = deleteNode.next
}
