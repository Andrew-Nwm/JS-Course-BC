/**
 * forEach() = method used to iterate over elements of an array and apply a specified function (callback) to each element.
 *
 * array.forEach(callback)
 * element, index, array are provided
 */

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(doubleValue);
numbers.forEach(tripleValue);
numbers.forEach(display);

function doubleValue(element, index, array) {
	array[index] = element * 2;
}

function tripleValue(element, index, array) {
	array[index] = element * 3;
}

//el método Math.pow(base, exponente) devuelve la base elevada al exponente indicado.
function square(element, index, array) {
	array[index] = Math.pow(element, 2);
}

function cube(element, index, array) {
	array[index] = Math.pow(element, 3);
}

function display(element) {
	console.log(element);
}

let fruits = ["apple", "banana", "cherry", "coconut"];

fruits.forEach(UpperCase);
fruits.forEach(Capitalize);
fruits.forEach(display);

function UpperCase(element, index, array) {
	array[index] = element.toUpperCase();
}

function LowerCase(element, index, array) {
	array[index] = element.toLowerCase();
}

function Capitalize(element, index, array) {
	array[index] =
		element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element) {
	console.log(element);
}
