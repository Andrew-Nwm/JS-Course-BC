/**
 * Type conversion = change the data type of a value to another type (strings, numbers, booleans, etc.)
 */

let age = prompt("How old are you?");

if (age === null || age.trim() === "") {
	alert("You didn't enter your age.");
} else {
	age = Number(age);
	age += 1;
	alert(`You are ${age}`);
}

//How .trim() works
let blankSpaces = "ola       ";
console.log(blankSpaces); // "ola       "
console.log(blankSpaces.trim()); // "ola"

//other example

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x); // NaN (Not a Number)
console.log(y); // "pizza"
console.log(z); // true (non-empty string)

console.log(typeof x); // number
console.log(typeof y); // string
console.log(typeof z); // boolean
