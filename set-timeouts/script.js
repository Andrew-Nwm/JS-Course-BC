/**
 * setTimeout() = function in JS that allows us to stablish a timer to execute a code after the timer ends (milliseconds)
 * Times are approximated, not exact (varies based on the workload of the js runtime engine)
 * Syntax: setTimeout(function/callback, delay (ms), param1, param2, ...)
 */

//Example 1

function sayHello(name) {
	console.log(`Hello ${name}`);
}

setTimeout(sayHello, 2000, "Andrew");

//Example 2

setTimeout(function () {
	console.log("buenos días mis muchahones");
}, 4000);

//Example 3

setTimeout(() => console.log("Goodbye"), 6000);

//Example 4
//clearTimeout(timeoutId) = can cancel a timeout before it executes
const timeoutId = setTimeout(() => console.log("Goodbye"), 8000);
clearTimeout(timeoutId);

function startTimer() {
	timeoutId = setTimeout(() => window.alert("Hello"), 8000);
	console.log("Timer started");
}

function clearTimer() {
	clearTimeout(timeoutId);
	console.log("Timer cleared");
}
