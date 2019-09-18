let user = {
	fname: 'John',
	lname: 'Doe',
	age: 22,
	phone: '123-456-7890'
};

// let { fname, lname } = user;
// console.log(`${fname} ${lname}`);

let { fname, lname, ...others } = user;
console.log(`${fname} ${lname}`);
console.log(others);
