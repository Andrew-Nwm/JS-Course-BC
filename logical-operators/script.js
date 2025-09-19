/**
 * Logical Operator = used to combine or manipulate boolean values (true or false).
 *
 * There's three main logical operators in JavaScript:
 *
 * 1. AND (&&) - returns true if both operands are true.
 * 2. OR (||) - returns true if at least one operand is true.
 * 3. NOT (!) - negates the boolean value, turning true to false and vice versa.
 *
 */

const temp = 20;

//without logical operators
if (temp > 0) {
	console.log("Weather is good");
} else if (temp < 30) {
	console.log("Weather is good");
} else {
	console.log("Weather is bad");
}

//with logical operators

temp > 0 && temp < 30 //in this case, both conditions must be true for the result to be true
	? console.log("Weather is good")
	: console.log("Weather is bad");

// Example of OR operator
temp < 0 || temp > 30 //in this case, at least one condition must be true for the result to be true
	? console.log("Weather is bad")
	: console.log("Weather is good");

// Example of NOT operator
const isSunny = true;
if (isSunny) {
	console.log("It's sunny");
} else {
	console.log("It's cloudy");
}

// Using NOT operator to negate the condition
!isSunny ? console.log("It's cloudy") : console.log("It's sunny");
