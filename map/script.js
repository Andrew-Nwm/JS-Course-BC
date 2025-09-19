//.map() = accepts a callback and applies that function to each element in an array, then returns a new array
// does not change the size of the original array

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(sqaure);
console.log(squaredNumbers);

const cubedNumbers = numbers.map(cube);
console.log(cubedNumbers);

function square(element) {
	return Math.pow(element, 2);
}

function cube(element) {
	return Math.pow(element, 3);
}

const students = ["spongebob", "patrick", "sandy", "mr krabs"];
const uppercasedStudents = students.map(uppercase);
console.log(uppercasedStudents);
function uppercase(element) {
	return element.toUpperCase();
}

const lowercasedStudents = students.map(lowercase);
console.log(uppercasedStudents);
function lowercase(element) {
	return element.toUpperCase();
}

const dates = ["2020-01-01", "2023-02-14", "2025-03-20"];
const formatDates = dates.map(formatDates);
function formatDates(element) {
	const parts = element.split("-");
	return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
