let user = {
	fname: 'John',
	lname: 'Doe',
	age: 22,
	phone: '123-456-7890'
};

let car = {
	title: 'benz',
	price: 100000,
	country: 'germany'
};

const newObject = {
	...user,
	...car
};

console.log(newObject);
console.table(newObject);
