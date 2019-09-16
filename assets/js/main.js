var users = [
	{ name: 'Pat', age: 43 },
	{ name: 'Matt', age: 10 },
	{ name: 'James', age: 18 },
	{ name: 'Barbara', age: 17 }
];

// var newData = users.filter(user => {
// 	return user.age == 20;
// });

var newData = users.filter(user => {
	// var name = user.name.toLowerCase();
	// name = name.startsWith('ba');
	// return name;

	return user.age <= 18;
});

console.log(newData);
