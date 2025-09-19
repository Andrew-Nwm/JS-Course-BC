/**
 * class = (ES6 feature) provides a more structured and cleaner way to work with objetcs compared to traditional constructor functions
 * ex. static keyword, encapsulation, inheritance, etc.
 */

class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	displayProduct() {
		console.log(`PRoduct name: ${this.name} `);
		console.log(`Product price: ${this.price.toFixed(2)} `);
	}

	calculateTotal(salesTax) {
		return this.price + this.price * salesTax;
	}
}

const tax = 0.05;

const product1 = new Product("T-Shirt", 19.99);
const product2 = new Product("Phone", 800);

product1.displayProduct();
product2.displayProduct();

const total1 = product1.calculateTotal(tax);
const total2 = product2.calculateTotal(tax);

console.log(`Total price for ${product1.name} with tax: ${total1.toFixed(2)}`);
console.log(`Total price for ${product2.name} with tax: ${total2.toFixed(2)}`);
