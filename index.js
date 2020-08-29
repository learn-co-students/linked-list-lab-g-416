function getName(node){
    return node["name"];
}

function headNode(key, object){
    return object[key];
}

function next(node, object){
    return object[node.next];
    // This returns an object
}

function nodeAt(index, key, object){
    let node = object[key];
    for(let i = 0; i < index; i++){
        node = next(node, object);
    }
    return node;
    // Returns the next node
}

function addressAt(index, key, object){
    // returns the key

    // if the index is greater than zero
    if (index > 0){
        let currentNode = object[key]; // this is the head
        let address;
    // as long as i is less than the index, set the new address equal to the pointer of the next node
    // set the currentNode equal to the
        for (let i = 0; i < index; i++){
            address = currentNode.next; // This is the key value of the node's "next" property
            currentNode = object[address];
        }
        return address; // This is just a string
    } else {
    // otherwise return the first address, which is the head
        return key;
    }
}

function indexAt(node, object, key){
    // returns the index
    let objectLength = Object.keys(object).length; // this is equal to 3
    let head = object[key]; // this is firstNode
    let index;
    for (let i = 0; i < objectLength; i++){
    // if the firstNode is equal to the node argument, set index to i
        if (head == node){
            index = i;
            return index;
        } else {
            head = object[head.next];
        }
    }
}

function insertNodeAt(index, newAddress, key, object){ 
    // updated object = {rkjasj: secondNode, asnan: lastNode, whana: firstNode, ajhsak: newNode}

    // The new key will have a "next" key of the previous node's "next" key
    if (index > 0) {
    object[newAddress] = {name: "jill", next: object[addressAt((index - 1), key, object)].next}; // newNode
    // why index - 1 ? "whana" is the head. There is no previous Node before whana.
    // the address at index 1 is after "whana", which is "rkjasj".
    // Index 1 is the place where you are inserting the new Node, after index 0, and before index 1
    // "whana" will be index 0, new Node(ajhsak) will be index 1, rkjasj will be index 2.
    // "whana" points to the new node, "ajhsak" points to "rkjasj"
    object[addressAt((index - 1), key, object)].next = newAddress; // previousNode
    // third: The previous Node's "next" key will be set to the newNode's "next" key
    } else {
        return "False index";
    }
}

function deleteNodeAt(index, key, object){
    // returns the updated object
    if (index > 0){
        // previousNode's "next" is set to the node "next" property of the node we are deleting
        object[addressAt((index - 1), key, object)].next = object[addressAt((index), key, object)].next;
    } else {
        return "False index";
    }
}