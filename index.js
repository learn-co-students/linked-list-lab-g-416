/* order of people:
Alexandra -> Kirstin -> Juliet -> Timmy -> Jacob 

Each node looks like:
  {name: 'Alexandra', next: 'addressOfNextPerson'}

Collection of nodes should be stored as a JS object:
   let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    ntrandm: {name: 'Juliet', next: null}
  }
*/

function getName(node) {
    return node["name"];
}

function headNode(list, collection){
    return collection[list];
}

function next(node, collection) {
    let nextAddress = node["next"];
    return collection[nextAddress];
}

function nodeAt(index) {
    return index;
}

// function nodeAt(collection, index) {
//   let result = collection.filter(obj => {
//       return obj.
//   })
// }

// var result = jsObjects.filter(obj => {
//     return obj.b === 6
//   })