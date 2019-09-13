const dealership = (name, totalCars = 3000) => {
	return `${name} is a minimum of ${totalCars} available cars at all times`;
};

// var emp = dealership('Empire', 2000);

var emp = dealership('Empire');

console.log(emp);
