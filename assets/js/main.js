// const names = [
//     ['joe', 'billy'],
//     ['cindy', 'jenny']
// ];

const names = [
	['joe', 'billy'],
	['cindy', 'jenny', [23, 4, 56, 7, [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]]]]
];
console.log(names.flat());
console.log(names.flat(3));
console.log(names.flat(Infinity));
