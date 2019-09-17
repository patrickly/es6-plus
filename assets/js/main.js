// get product
// get price
// print to the screen the price

var products = [
	{
		id: 1,
		title: 'Sneakers',
		price: 300
	},
	{
		id: 2,
		title: 'yeezy',
		price: 500
	}
];

const getProducts = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (products.length >= 1) {
			resolve(products);
		} else {
			reject(`Error: it returned back that there's no products available`);
		}
	}, 2000);
});

getProducts
	.then(products => {
		console.log('products ', products);
		return products[0];
	})
	.then(product => {
		console.log('product ', product);
		return product.price;
	})
	.then(price => {
		console.log('price ', price);
		return price;
	})
	.catch(error => {
		console.log(error);
	});
