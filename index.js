function getName(node) {
  return node.name;
}

function headNode(list, list2) {
  return list2[list];
}

function next(node, collection) {
  let next = node.next;
  return collection[next];
}

function nodeAt(index, list, collection) {
  let node = headNode(list, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, list, collection) {
  let node = nodeAt(index - 1, list, collection);
  return index == 0 ? list : node.next;
}

function indexAt(node, collection, list) {
  let nnode = headNode(list, collection);
  let ni = 0;
  while (nnode !== node) {
    nnode = next(nnode, collection);
    ni++;
  }
  return ni;
}

function insertNodeAt(index, key, list, collection) {

}

function deleteNodeAt(index, list, collection) {

}
