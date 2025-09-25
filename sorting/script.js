/**
 * sort() = method used to sort elements of an array in place and return the sorted array.
 * Sorts elements as strings in lexicographical order, not alphabetical order.
 * lexicographical order = (alphabetical order + numbers + special characters) as strings
 */

//Example 1 - Fruits array
let fruits = ["banana", "cherry", "apple"];
fruits.sort();
console.log(fruits);

//Example 2 - Numbers array
let numbers = [1, 30, 4, 211, 50, 65];
//if we want to comparise numbers, we need to provide a compare function because by other way it'll sort numbers as strings, so 211 will be before 30
//Ascending order
numbers.sort((a, b) => a - b);
//Descending order
//numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [
	{ name: "spongebob", age: 30, gpa: 3.0 },
	{ name: "patrick", age: 37, gpa: 1.5 },
	{ name: "squidward", age: 51, gpa: 2.5 },
	{ name: "sandy", age: 27, gpa: 4.0 },
];

//sort by age ascending
people.sort((a, b) => a.age - b.age);
console.log(people);

//sort by gpa ascending
people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

//sort by name ascending
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
