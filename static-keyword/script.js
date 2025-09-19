/**
 * static = keyword that defines properties or methods that belong to the class itself, rather than to instances of the class.
 */

class MathUtil {
	static PI = 3.14159;

	static getDiameter(radius) {
		radius * 2;
	}

	static getCircunference(radius) {
		return 2 * this.PI * radius;
	}

	static getArea(radius) {
		// return this.PI * radius * radius;
		return this.PI * Math.pow(radius, 2);
	}
}

console.log(MathUtil.PI); // Outputs: 3.14159
console.log(MathUtil.getDiameter(5)); // Outputs: 10
console.log(MathUtil.getCircunference(5)); // Outputs: 31.4159
console.log(MathUtil.getArea(5)); // Outputs: 78.53975

//Doing this we don't need to create an instance of the class to access the PI property:
// const mathUtilInstance = new MathUtil();
// console.log(mathUtilInstance.PI); // This would be undefined
// console.log(mathUtilInstance.getDiameter(5)); // This would throw an error

//Example 2

class User {
	constructor(name) {
		this.name = name;
		User.userCount++;
	}
	static userCount = 0;

	static getUserCount() {
		// return console.log(`There's ${this.userCount} users online`);
		if (this.userCount === 1) {
			return console.log(`There's ${this.userCount} user online`);
		}
		return console.log(`There's ${this.userCount} users online`);
	}
	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

const user1 = new User("Alice");
console.log(user1.name); // Outputs: Alice
const user2 = new User("Andrew");
console.log(user2.name); // Outputs: Andrew

user1.sayHello(); // Outputs: Hello, my name is Alice
user2.sayHello(); // Outputs: Hello, my name is Andrew

User.getUserCount(); // Outputs: There's 2 users online
