var product = {
	title: 'yeezy',
	price: 360,
	set discount(x) {
		this.d = x;
	},
	get discount() {
		return this.d;
	}
};

var product2 = Object.defineProperties(
	{},
	Object.getOwnPropertyDescriptors(product)
);
console.log(product2);

var obj = {
	a: 1,
	b: 2,
	set discount(x) {
		this.d = x;
	},
	get discount() {
		return this.d;
	}
};
var copy = Object.assign({}, obj);
console.log(copy);
