// function declaration = define a reusable block of code that performs a specific task

function hello() {
	console.log("Hello World");
}

/**
 * Function expression = a way to define functions as values or variables
 *
 * They're not hoisted, so you can't call them before they are defined.
 * Thery're commonly used on:
 * 1. Callbacks in asynchronous operations (e.g., setTimeout, event listeners)
 * 2. Higher-order functions (e.g., map, filter, reduce)
 * 3. Closures
 * 4. Event Listeners
 */

const hello2 = function () {
	console.log("Hello World 2");
};

hello2();

// Example 1
setTimeout(hello, 3000);

//Example 2 creating a function expression inside another function
setTimeout(function () {
	console.log("Hello World 3");
}, 3000);

// Example 3
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);
console.log(squares);

function square(element) {
	return Math.pow(element, 2);
}

// Example 4 with function expression
const squaress = numbers.map(function (element) {
	return Math.pow(element, 2);
});

console.log(squaress);

// Example 5 with arrow function
const cube = numbers.map((element) => Math.pow(element, 3));
console.log(cube);

// Example 6 filter even numbers
const evenNumbers = numbers.filter(function (element) {
	return element % 2 === 0;
});

console.log(evenNumbers);

// Example 7 filter odd numbers with arrow function
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
console.log(oddNumbers);

const total = numbers.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
});
console.log(total);
