/**
 * Inheritance =  allows a new class to inherit properties and methods from an existing class (parent -> child)
 * it helps to reuse code and establish a relationship between classes
 */

class Animal {
	isAlive = true;
	eat() {
		console.log(`${this.name} is eating`);
	}

	sleep() {
		console.log(`${this.name} is sleeping`);
	}
}

class Rabbit extends Animal {
	name = "Rebbeca Rabbit";
	run() {
		console.log(`${this.name} is running`);
	}
}
class Fish extends Animal {
	name = "Nemo Fish";
	swim() {
		console.log(`${this.name} is swimming`);
	}
}

class Hawk extends Animal {
	name = "Harry Hawk";
	fly() {
		console.log(`${this.name} is flying`);
	}
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.isAlive);
rabbit.eat();
rabbit.run();
fish.sleep();
fish.swim();
hawk.eat();
hawk.fly();
