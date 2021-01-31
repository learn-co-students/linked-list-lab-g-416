function getName(node){

    return node.name
}


function headNode(linkedlist,collection){

       return  collection[linkedlist]

}

function next(linkedlist,collection){


     linkedlist  = linkedlist.next
   return collection[linkedlist]
}


function nodeAt(index,linkedlist,collection){

    for(let i=0;i<index;i++){
           linkedlist=collection[linkedlist].next
     }
    return   collection[linkedlist]

}


function addressAt(address,linkedlist,collection){
   for(let i=0;i< address;i++){
      linkedlist=collection[linkedlist].next
    }
  return linkedlist
}


function  indexAt(node,collection,linkedList){
  for(let i=0;i<100;i++){
     if(collection[linkedList] == node ){
       return i
     }
    linkedList= collection[linkedList].next
  }
}


function insertNodeAt(index,newLinkedList,linkedList,collection){
   let priveous =nodeAt((index-1),linkedList,collection)

    for(let i=0; i<index ;i++){
       linkedList = collection[linkedList].next
     }
     collection[newLinkedList].next=linkedList  ///new node connct to next node
     priveous.next= newLinkedList  //previous node connect to new node
}

function deleteNodeAt(index,linkedList,collection){

    let linkedAtIndex = nodeAt((index),linkedList,collection)
    collection[linkedList].next = linkedAtIndex.next

}
