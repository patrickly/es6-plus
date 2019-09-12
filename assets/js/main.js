var name = 'Pat';
var lastName = 'Ly';

console.log(`the user's name: ${name} ${lastName}`);

const store = (name, address, state, zipcode) => {
	return `${name} is located at ${address} in ${state} with zipcode of ${zipcode}`;
};

var a = store('Gucci', '52 Park Avenue', 'New York', 11101);
console.log(a);
