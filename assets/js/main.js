var users = [
	{ name: 'Pat', age: 28 },
	{ name: 'Matt', age: 20 },
	{ name: 'Barbara', age: 27 }
];

var userNames = users.map(user => {
	return user.name;
});

console.log(userNames);
