function getName(node) {
	return node.name
}

function headNode(linkedList, collection) {
	return collection[linkedList]
}

function next(node, collection) {
	return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
	let node = collection[linkedList];
	for (let i = 0; i < index; i++) {
		node = next(node, collection)
	}
	return node
}

function addressAt(index, linkedList, collection) {
	if (index === 0) {
		return linkedList
	}

	let node = nodeAt(index - 1, linkedList, collection)
	return node.next
}

function indexAt(node, collection, linkedList) {
	let index = 0
	let currentNode = collection[linkedList]
	while (node !== currentNode) {
		currentNode = next(currentNode, collection)
		index++
	}
	return index
}

function insertNodeAt(index, address, linkedList, collection) {
	let newNode = collection[address]
	newNode['next'] = addressAt(index, linkedList, collection)
	let previousNode = nodeAt(index - 1, linkedList, collection)
	previousNode['next'] = address
}

function deleteNodeAt(index, linkedList, collection) {
	let nodeToDelete = nodeAt(index, linkedList, collection)
	let previousNode = nodeAt(index - 1, linkedList, collection)
	previousNode['next'] = nodeToDelete.next
}
