/**
 * constructor = special method for defining properties and methods of an object
 */

function Car(make, model, year, color) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.drive = function () {
		console.log(`You drive the ${this.model}`);
	};
}

const car1 = new Car("Toyota", "Corolla", 2020, "blue");
const car2 = new Car("Honda", "Civic", 2019, "red");

console.log(car1);
console.log(car2);

car1.drive();
car2.drive();
