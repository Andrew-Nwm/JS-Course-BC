/**
 * Callback = a function that is passed as an argument to another function.
 * This technique allows a function to call another function.
 * This is often used to handle asynchronous operations.
 * Example: setTimeout, event listeners, etc.
 *
 * Used to handle asynchronous operations like:
 * 1. Network requests
 * 2. File reading
 * 3. Timers
 * 4. User interactions (clicks, form submissions)
 * 5. Interaction with APIs
 * 6. Interacting with databases
 *
 * It's like saying "When this operation is done, call this function."
 */

hello(goodbye); // "Hello, world!"

function hello(callback) {
	console.log("Hello, world!");
	callback();
}

function goodbye() {
	console.log("Goodbye!");
}

function leave() {
	console.log("Leave!");
}

function wait() {
	console.log("Wait!");
}

function sum(callback, x, y) {
	let result = x + y;
	callback(result);
}

sum(displayOnPage, 5, 10); // "The result is: 15"

function displayConsole(result) {
	console.log("The result is: " + result);
}

function displayOnPage(result) {
	document.getElementById("myH1").textContent = `The result is: ${result}`;
}
