// const userNames = (a, b, c, d, e, f) => {
// 	const names = [a, b, c, d, e, f];

// 	console.log(names);
// };

const userNames = (...names) => {
	// var names = [every argument in this function]
	// an array of every elements in this function assigned to the names variable
	console.log(names);
};
// userNames('Pat', 'Joe', 'John', 'Jane', 'Fred', 'Stef');

userNames('Pat', 'Joe', 'John', 'Jane', 'Fred', 'Stef', 'Mike', 'Jen', 'Kobe');
