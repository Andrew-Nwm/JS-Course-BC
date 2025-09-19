/**
 * Object: a collection of related properties and/or methods
 * Objects can represent real world objects like people, products, etc.
 * or abstract concepts like dates, colors, etc.
 *
 * In JavaScript, objects are created using curly braces {} and can contain key-value pairs.
 * Keys are strings (or Symbols) that represent the property name, and values can be any data type,
 * including other objects or functions (methods).
 */

const person1 = {
	firstName: "Andrew",
	lastName: "Dev",
	age: 19,
	isStudent: false,
	hobbies: ["music", "sports", "writing"],
	sayHello: function () {
		console.log("Hello! I'm " + this.firstName + " " + this.lastName);
	},
	sayBye: function name() {
		console.log("Bye! See you later!");
	},
};

console.log(person1);
person1.sayHello();
person1.sayBye();

const person2 = {
	firstName: "Giyu",
	lastName: "Tomioka",
	age: 23,
	isStudent: true,
	hobbies: ["defeat demons", "water breathing", "being cool"],
	sayHello: () =>
		console.log("Hey,  I'm " + person2.firstName + " " + person2.lastName),
	sayBye: () => console.log("Bye looser!"),
};

console.log(person2);
person2.sayHello();
person2.sayBye();
