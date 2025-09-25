/**
 * closure = a functino defined inside of another function, the inner function has access to the variables and scope of the outher function.
 * Allow for private variables and state maintenance
 * Used frequently in JS frameworks and libraries like React, Angular, and Vue
 */

//Example 1 based on syntax
function outerFunction() {
	let message = "Hello, World!";
	function innerFunction() {
		console.log(message);
	}
	innerFunction();
	// return innerFunction; we can use this way too
}
outerFunction();
//we can use this way too
// outerFunction()();

//Example 2

function makeCounter() {
	let count = 0;
	function increment() {
		count++;
		console.log(`Count increased to: ${count}`);
	}

	function getCount() {
		return count;
	}

	return { increment, getCount };
}

const counter = makeCounter();
counter.increment(); // Count increased to: 1
counter.increment(); // Count increased to: 2
counter.increment(); // Count increased to: 3

console.log(`Current count is: ${counter.getCount()}`);

//Example 3

function gamePoints() {
	let score = 0;

	function increaseScore(points) {
		score += points;
		console.log(`Score increased by ${points}`);
	}

	function decreaseScore(points) {
		score -= points;
		console.log(`Score decreased by ${points}`);
	}

	function getScore() {
		return score;
	}

	return { increaseScore, decreaseScore, getScore };
}

const game = gamePoints();

game.increaseScore(10);
game.increaseScore(5);
game.decreaseScore(3);
console.log(`Current score is: ${game.getScore()} points`);
