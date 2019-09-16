var users = [
	{ name: 'Pat', age: 43 },
	{ name: 'Matt', age: 10 },
	{ name: 'Pat', age: 18 },
	{ name: 'Barbara', age: 17 }
];

// var newData = users.filter(user => {
// 	return user.age == 20;
// });

var newData = users.find(user => {
	// var name = user.name.toLowerCase();
	// name = name.startsWith('ba');
	// return name;

	return user.age == 18 && user.name == 'Pat';
});

console.log(newData);
