/**
 * Arrow Functions = a concise way to write functions expressions, good for simple functions that you see only once
 * Syntax: (param1, param2, ..., paramN) => {some code to be executed}
 * If there is only one parameter, you can omit the parentheses around the parameter list
 * If the function body contains only one expression, you can omit the curly braces and the return keyword
 * If there are no parameters, you must use empty parentheses
 * Arrow functions do not have their own 'this' context;
 */

//Example 1 with function declaration
function hello() {
	console.log("Hello World!");
}

hello();

// Example 1 with function expression
const helloExpr = function () {
	console.log("Hello World from expression!");
};

helloExpr();

//Example 1 with arrow function with no parameters
const helloArrow = () => console.log("Hello World from arrow function!");

helloArrow();

// Example 1 with arrow function with one parameter
const greet = (name) => console.log(`Hello, ${name}!`);

greet("Andrew");

//Example 1 with arrow function with multiple parameters and multiple lines of code
const greetFull = (firstName, lastName, age) => {
	console.log(`Hello, ${firstName} ${lastName}!`);
	console.log(`You are ${age} years old.`);
	let isAllowed = age >= 18 ? "allowed" : "not allowed";
	console.log(`You are ${isAllowed} to enter.`);
};
greetFull("Andrew", "Dev", 19);

// Example 2
setTimeout(
	() => console.log("This is an arrow function inside setTimeout"),
	1000
);

// Example 3
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((number) => Math.pow(number, 2));
const cubes = numbers.map((number) => Math.pow(number, 3));
const evenNums = numbers.filter((number) => number % 2 === 0);
const oddNums = numbers.filter((number) => number % 2 !== 0);
const sumAllNums = numbers.reduce((acc, number) => acc + number, 0);

console.log(squares); // [1, 4, 9, 16, 25, 36]
console.log(cubes); // [1, 8, 27, 64, 125]
console.log(evenNums); // [2, 4, 6]
console.log(oddNums); // [1, 3, 5]
console.log(sumAllNums); // 21
