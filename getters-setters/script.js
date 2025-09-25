/**
 * getter = special method that makes a property readable.
 * setter = special method that makes a property writable.
 *
 * together works  to validate and modify a value when reading/writing property, it helps with validation when we are creating an object.
 */

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	set width(newWidth) {
		if (newWidth > 0) {
			this._width = newWidth;
		} else {
			console.log("Width must be a positive number");
		}
	}

	set height(newHeight) {
		if (newHeight > 0) {
			this._height = newWidth;
		} else {
			console.log("Width must be a positive number");
		}
	}

	get width() {
		return `${this._width.toFixed(1)} cm`;
	}

	get height() {
		return `${this._height.toFixed(1)} cm`;
	}

	get area() {
		return `${(this._width * this._height).toFixed(1)} cm²`;
	}
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

//Example 2

class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	set firstName(newFirstName) {
		if (typeof newFirstName === "string" && newFirstName.length > 0) {
			this._firstName = newFirstName;
		} else {
			console.log("First name must be a non-empty string");
		}
	}

	set lastName(newLastName) {
		if (typeof newLastName === "string" && newLastName.length > 0) {
			this._lastName = newLastName;
		} else {
			console.log("Last name must be a non-empty string");
		}
	}

	set age(newAge) {
		if (typeof newAge === "number" && newAge >= 0 && newAge <= 120) {
			this._age = newAge;
		} else {
			console.log("Age must be a number between 0 and 120");
		}
	}

	get firstName() {
		return this._firstName;
	}

	get lastName() {
		return this._lastName;
	}

	get age() {
		return this._age;
	}

	get fullName() {
		return `${this._firstName} ${this._lastName}`;
	}
}

const person = new Person(789, 14, "pizza");
console.log(person);
