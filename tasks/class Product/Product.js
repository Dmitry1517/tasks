class Product {
	constructor(name, price, quantity, description) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
	}

	filterProduct(array, str) {	
		let filter = {};
		let arr = str.split('&');
		for (let item of arr) {
			if (item.includes('name')) {
				filter.title = { includes: (item.split('-'))[1], content: (item.split('-'))[2] }
			}
			if (item.includes('description')) {
				filter.description = { includes: (item.split('-'))[1], content: (item.split('-'))[2] }
			}
			if (item.includes('price')) {
				filter.price = { 
					action: ((item.split('-'))[1]).replace(/[^>=<]/g, ''),
					value: ((item.split('-'))[1]).replace(/[^0-9]/g, '')
				}
			}
			if (item.includes('quantity')) {
				filter.quantity = { 
					action: ((item.split('-'))[1]).replace(/[^>=<]/g, ''),
					value: ((item.split('-'))[1]).replace(/[^0-9]/g, '') 
				}
			}
		}

		let filteredProducts = array;
		
		if (filter.title !== undefined && filter.title.includes == 'starts') {
		  filteredProducts = filteredProducts.filter(item => item.name.startsWith(filter.title.content));
		}
		if (filter.title !== undefined && filter.title.includes == 'contains') {
		  filteredProducts = filteredProducts.filter(item => item.name.includes(filter.title.content));
		}
		if (filter.title !== undefined && filter.title.includes == 'ends') {
		  filteredProducts = filteredProducts.filter(item => item.name.endsWith(filter.title.content));
		}
		
		if (filter.description !== undefined && filter.description.includes == 'starts') {
			filteredProducts = filteredProducts.filter(item => item.description.startsWith(filter.description.content));
		}
		if (filter.description !== undefined && filter.description.includes == 'contains') {
			filteredProducts = filteredProducts.filter(item => item.description.includes(filter.description.content));
		}
		if (filter.description !== undefined && filter.description.includes == 'ends') {
			filteredProducts = filteredProducts.filter(item => item.description.endsWith(filter.description.content));
		}
		
		if (filter.price !== undefined && filter.price.action == '>') {
			filteredProducts = filteredProducts.filter(item => item.price > filter.price.value);
		}
		if (filter.price !== undefined && filter.price.action == '<') {
			filteredProducts = filteredProducts.filter(item => item.price < filter.price.value);
		}
		if (filter.price !== undefined && filter.price.action == '=') {
			filteredProducts = filteredProducts.filter(item => item.price == filter.price.value);
		}
		if (filter.price !== undefined && filter.price.action == '<=') {
			filteredProducts = filteredProducts.filter(item => item.price <= filter.price.value);
		}
		if (filter.price !== undefined && filter.price.action == '>=') {
			filteredProducts = filteredProducts.filter(item => item.price >= filter.price.value);
		}
		
		if (filter.quantity !== undefined && filter.quantity.action == '>') {
			filteredProducts = filteredProducts.filter(item => item.quantity > filter.quantity.value);
		}
		if (filter.quantity !== undefined && filter.quantity.action == '<') {
			filteredProducts = filteredProducts.filter(item => item.quantity < filter.quantity.value);
		}
		if (filter.quantity !== undefined && filter.quantity.action == '=') {
			filteredProducts = filteredProducts.filter(item => item.quantity == filter.quantity.value);
		}
		if (filter.quantity !== undefined && filter.quantity.action == '<=') {
			filteredProducts = filteredProducts.filter(item => item.quantity <= filter.quantity.value);
		}
		if (filter.quantity !== undefined && filter.quantity.action == '>=') {
			filteredProducts = filteredProducts.filter(item => item.quantity >= filter.quantity.value);
		}
		return filteredProducts;
	}
}

let product = new Product();
let products = [
	new Product('fd', 3, 5, 'abcd'),  
	new Product('fad', 2, 6, 'abc'), 
	new Product('afd', 2, 6, 'qweabc'),
	new Product('afd', 2, 6, 'rtabc')
];
str = 'name-contains-fd&price-=2&quantity->5&description-ends-abc';
//str = 'name-starts-fd&quantity-=5';

console.log(product.filterProduct(products, str));

