/**
 * Function = a section of reusable code.
 * Declare code once, use it whenever you want.
 * Call the function by its name to execute that code.
 */

function happyBirthday(username, age) {
	console.log("Happy Birthday to you!");
	console.log("Happy Birthday to you!");
	console.log(`Happy Birthday to you, ${username}!`);
	console.log("Happy Birthday to you!");
	console.log(`You're ${age} years old today!`);
}

happyBirthday("andrew", 19); // Call the function to execute it

// function to add
// There's two ways to make this function

// 1. Store the result in a variable and return it
function add_frst(x, y) {
	let result = x + y;
	return result;
}

// 2. Directly return the result
function add_scnd(x, y) {
	return x + y;
}
//There's to ways to return the result
// 1. Store the result in a variable and return it
let answer = add(5, 10);
console.log(answer); // Output: 15

// 2. Directly return the result
console.log(add(20, 30)); // Output: 50

//Function to check if a number is even or odd
function evenOrOdd(num) {
	return num % 2 === 0
		? `The number ${num} is even`
		: `The number ${num} is odd`;
	console.log(num);
}

console.log(evenOrOdd(10)); // Output: The number 10 is even
console.log(evenOrOdd(11)); // Output: The number 11 is odd
