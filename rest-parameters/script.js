/**
 * Rest Parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array.
 *
 * Spread = expands an array into separate elements.
 * Rest = bundles separate elements into an array.
 */

function openFridge(...foods) {
	//This function can accept variable number of arguments/parameters, it could expand itself to accept any number of food items.
	console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hot dog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4); // ["pizza", "hamburguer", "hot dog", "sushi"]

//Other way to do the same thing
function getFood(...foods) {
	return foods;
}

const foods = getFood(food1, food2, food3, food4);
console.log(foods); // ["pizza", "hamburguer", "hot dog", "sushi"]

//Other example
function sum(...numbers) {
	let total = 0;
	for (let number of numbers) {
		total += number;
	}
	return total;
}
const result = sum(1, 2, 3, 4, 5);
console.log(result); // 15

//function to multiply
function multiply(...numbers) {
	let total = 1;
	for (let num of numbers) {
		total *= num;
	}
	return total;
}
const multiplyNums = multiply(2, 3, 4, 5, 8);
console.log(multiplyNums); // 960

//Example with reduce
function sumWithReduce(...numbers) {
	return numbers.reduce((total, number) => total + number, 0);
}
const resultWithReduce = sumWithReduce(1, 2, 3, 4, 5);
console.log(resultWithReduce); // 15

function ola(...ola) {
	return ola.reduce((acc, num) => acc + num, 0);
}

const olada = ola(2, 3, 2, 3);
console.log(olada);

//Function to know average

function average(...numbers) {
	let total = 0;
	for (let num of numbers) {
		total += num;
	}
	return total / numbers.length;
}
const avgNumbers = average(2, 3, 5, 5, 4);
console.log(`Average: ${avgNumbers}`);

//Combine Strings
function combineStrings(...strings) {
	return strings.join(" ");
}

const fullName = combineStrings("Mr", "Spongebob", "Squarepants", "III");
console.log(fullName); // "Mr Spongebob Squarepants III"
