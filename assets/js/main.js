var cars = ['honda', 'bmw'];

var userInfo = {
	name: 'Patrick',
	lastName: 'Ly',
	age: 28,
	// cars: cars
	cars
};

// var { name, lastName, age } = userInfo;
// console.log(name, age, lastName);
console.log(userInfo.cars);

/* 
var userData = (data) => {
	var name = data.name;
	var lastName = data.lastName;
	var age = data.age;
	console.log(`User: ${name} ${lastName} is ${age} years old`);
}; */

var userData = ({ name, lastName, age }) => {
	console.log(`User: ${name} ${lastName} is ${age} years old`);
	// console.log(name, age);
};

// userData(userInfo);
userData(userInfo);
