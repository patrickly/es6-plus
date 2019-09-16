var users = [
	{ name: 'Pat', age: 43 },
	{ name: 'Matt', age: 10 },
	{ name: 'Pat', age: 18 },
	{ name: 'Barbara', age: 17 }
];

// var newData = users.filter(user => {
// 	return user.age == 20;
// });

// var newData = users.every(user => {
// 	// var name = user.name.toLowerCase();
// 	// name = name.startsWith('ba');
// 	// return name;

// 	return user.age >= 21;
// });

var newData = users.some(user => {
	return user.age >= 21;
});

console.log(newData);

if (newData) {
	console.log('some are old enough to drink');
} else {
	console.log('sorry only a few are able to drink');
}
