/**
 * this = reference to the object where THIS is used
 * (the object depends on the inmediate context)
 * person.name = this.name
 *
 */

//Example 1
const person1 = {
	name: "Spongebob",
	favFood: "Krabby Patty",
	sayHello: function () {
		console.log(`Hello, my name is ${this.name}`);
	},
};

person1.sayHello();

const person2 = {
	name: "Patrick",
	favFood: "Starfish",
	sayHello: function () {
		console.log(`Hello, my name is ${this.name}`);
	},
};

person2.sayHello();
