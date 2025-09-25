/**
 * Nested Objects = Objects inside other objects.
 * It allows us to represent more complex data structures.
 * Child object is enclosed by the parent object.
 *
 * Example:
 * Person{{}, ContactInfo{}}
 * ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
 */

const person = {
	name: "andrew",
	age: 19,
	hobbies: ["gaming", "coding", "reading"],
	contactInfo: {
		email: "andrewsdev09@gmail.com",
		phone: "123-456-7890",
	},
	address: {
		street: "123 Main St",
		city: "New York",
		state: "NY",
		zip: "10001",
	},
};

console.log(person);

class Person {
	constructor(name, age, ...address) {
		this.name = name;
		this.age = age;
		this.address = new Address(...address);
	}
}

class Address {
	constructor(street, city, country) {
		this.street = street;
		this.city = city;
		this.country = country;
	}
}

const person1 = new Person("andrew", 19, "123 Main St", "New York", "USA");
const person2 = new Person("john", 25, "456 Elm St", "Los Angeles", "USA");

console.log(person1);
console.log(person1.address);
console.log(person2);
