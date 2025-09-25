/**
 * destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
 *                      []  = to perform array destructuring
 *                      {}  = to perform object destructuring
 */

//Example 1 - Swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Example 2 - Swap 2 elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors);

// Example 3 - Assign array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// Example 4 - Extract values from an object

const person1 = {
	firstname: "Andrew",
	lastname: "Dev",
	age: 19,
	job: "Krusty Krab Employee",
};

const person2 = {
	firstname: "Patrick",
	lastname: "Star",
	age: 24,
};

const { firstName, lastname, age, job } = person1;
console.log(firstName);
console.log(lastname);
console.log(age);
console.log(job);

const { firstName2, lastname2, age2, job2 = "Unemployed" } = person2;
console.log(firstName2);
console.log(lastname2);
console.log(age2);
console.log(job2);

// Example 5 - Destructure in function parameters
const person3 = {
	firstname: "SpongeBob",
	lastName: "SquarePants",
	age: 20,
	job: "Fry Cook",
};

function displayPerson({ firstname, lastName, age, job }) {
	console.log(`name: ${firstname} ${lastName}, age: ${age}, job: ${job}`);
}

displayPerson(person3);
