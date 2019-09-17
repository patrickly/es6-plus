const user = {
	id: 345,
	name: 'pat',
	age: 28,
	location: 'california'
};

// console.log(Object.values(user));
console.table(Object.entries(user));

for (let [key, value] of Object.entries(user)) {
	console.log(`key: ${key}  value: ${value}`);
}
