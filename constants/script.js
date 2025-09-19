/**
 * const = a variable that can't be changed once you assign it a value
 * let = a variable that can be changed later
 * var = a variable that can be changed later, but is function scoped or globally scoped
 * const is block scoped, meaning it is only accessible within the block it is defined in
 * let is also block scoped, but can be reassigned
 * var is function scoped, meaning it is accessible within the function it is defined in or globally
 * const is used for constants, let is used for variables that can change, and var is used for variables that can change but need to be accessible in a wider scope
 */
//if we don't want to anybody to change the value of pi, we can use const
// const pi = 3.14159;
const pi = 3.14159;
let radius;
let circumference;
function calculateCircumference() {
	radius = document.getElementById("radiusInput").value;
	circumference = 2 * pi * radius;
	document.getElementById(
		"result"
	).innerHTML = `The circumference of the circle with radius ${radius} is ${circumference}cm.`;
}

document
	.getElementById("radiusInput")
	.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			document.getElementById("calculateButton").click();
			radius = document.getElementById("radiusInput").value;
		}
	});
