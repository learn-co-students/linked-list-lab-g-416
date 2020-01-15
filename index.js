let collection = {rnadnm: {name: 'ferris', next: 'masjdrandm'},
masjdrandm: {name: 'sloane', next: 'ntrandm'}, ntrandm: {name: 'cameron', next: null},
}

function getName(node){
    return collection[node][name]
}