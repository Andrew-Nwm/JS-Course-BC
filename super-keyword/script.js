/**
 * super = keyword is used in classes to call the parent class constructor or access the properties and methods of the parent class (superclass).
 * `this = this object` refers to the current instance of the class.
 * `super = the parent`
 */

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	move(speed) {
		console.log(`${this.name} moves at a speed of ${speed} km/h`);
	}
}

class Rabbit extends Animal {
	constructor(name, age, runSpeed) {
		super(name, age);
		this.runSpeed = runSpeed;
	}
	run() {
		console.log(`${this.name} can run`);
		super.move(this.runSpeed);
	}
}

class Fish extends Animal {
	constructor(name, age, swimSpeed) {
		super(name, age);
		this.swimSpeed = swimSpeed;
	}
	swim() {
		console.log(`${this.name} can swim`);
		super.move(this.swimSpeed);
	}
}

class Hawk extends Animal {
	constructor(name, age, flySpeed) {
		super(name, age);
		this.flySpeed = flySpeed;
	}
	fly() {
		console.log(`${this.name} can fly`);
		super.move(this.flySpeed);
	}
}

const rabbit = new Rabbit("White Rabbit", 3, 20);
const fish = new Fish("Nemo", 1, 10);
const hawk = new Hawk("Eagle", 5, 50);

// console.log(rabbit);
// console.log(fish);
// console.log(hawk);

rabbit.run();
fish.swim();
hawk.fly();
