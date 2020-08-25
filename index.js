const getName = (node) => {
  return node['name'];
}

const headNode = (linkedList, collection) => {
  return collection[linkedList]
}

const next = (node, collection) => {
  let nextAddress = node['next'];
  let nextNode = collection[nextAddress];
  return nextNode;
}

const nodeAt = (index, linkedList, collection) => {
  let node = headNode(linkedList, collection);
  //console.log('firstnode:', node)
  for( let i=0; i < index; i++){
    node = next(node, collection)
    //console.log(i, node)
  }
  return node
}

const addressAt = (index, linkedList, collection) => {
  //console.log('index:', index, 'index-1:', index-1)
  let address = linkedList;
  if(index > 0){
    let node = nodeAt(index-1, linkedList, collection);
    address = node['next'];
    //console.log('address', address)
  }
  return address
}

const indexAt = (node, collection, linkedList) => {
  let count = 0;
  let n = headNode(linkedList, collection);
  if(n === node){
    return 0
  }else{
    while(n !== node){
      n = next(n, collection);
      count++;
    }
    return count;
  }
}

const insertNodeAt = (index, address, linkedList, collection)=> {
  let thisNode = nodeAt(index-1, linkedList, collection);
  let thisAddress = thisNode['next'];
  let newNode = collection[address];
  newNode['next'] = thisAddress;
  thisNode['next'] = address;
}

const deleteNodeAt = (index, linkedList, collection) => {
  let nodeToDelete = nodeAt(index, linkedList, collection);
  let address = nodeToDelete['next'];
  let previousNode = nodeAt(index-1, linkedList, collection);
  previousNode['next'] = address;
}