function getName(node) {
  return node.name;
}

function headNode(ll, collection) {
  return collection[ll];
}

function next(nodeLoc, collection) {
  return collection[`${nodeLoc.next}`];
}

function nodeAt(idx, start, collection) {
  let currNode = headNode(start, collection);
  for (let i=0; i < idx; i++) {
    currNode = next(currNode, collection);
  }

  return currNode;
}

function addressAt(idx, start, collection) {
  if (idx === 0) {
    return start;
  } else {
    let node = nodeAt(idx - 1, start, collection)
    return node.next;
  }
}


function indexAt(node, collection, start) {
  let currLoc = 0;
  let currNode = headNode(start, collection);

  while (node !== currNode){
    currNode = next(currNode, collection);
    currLoc++;
  }

  return currLoc;
}

function insertNodeAt(idx, node, start, collection) {
  let nodeBefore = nodeAt(idx - 1, start, collection);
  let nodeAfterLoc = nodeBefore['next']

  nodeBefore['next'] = node;
  collection[node]['next'] = nodeAfterLoc;
}

function deleteNodeAt(idx, start, collection) {
  let nodeToDel = nodeAt(idx, start, collection);
  let oldPointer = nodeToDel.next;

  let nodeBefore = nodeAt(idx - 1, start, collection);
  nodeBefore.next = oldPointer;
}
