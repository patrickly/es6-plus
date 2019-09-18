const names = ['Pat is at the store', 'Billy is programming'];

// let newArray = names.map(value => value.split(' '));
let newArray = names.flatMap(value => value.split(' '));

console.log(newArray);
