//  .reduce() = reduce the elements of an array to a single value.

//Example 1: Sum of all prices in an array
const prices = [15, 23, 5, 12, 7];

const total = prices.reduce(sum);

console.log(total.toFixed(2));

function sum(accumulator, currentValue) {
	return accumulator + currentValue;
}

//Example 2: Average grade from an array of grades
const grades = [87, 64, 96, 92, 88, 99, 73, 70];

const average = grades.reduce(getAverageGrade) / grades.length;

function getAverageGrade(accumulator, currentValue) {
	return accumulator + currentValue;
}

console.log(average.toFixed(2));

//Example 3: Get the max value from an array
const numbers = [5, 10, 2, 42, 17, 99, 23, 8];

const max = numbers.reduce(getMax);

function getMax(accumulator, currentValue) {
	return Math.max(accumulator, currentValue);
}

console.log(max);

//Example 4: Get the min value from an array
const min = numbers.reduce(getMin);

function getMin(accumulator, currentValue) {
	return Math.min(accumulator, currentValue);
}
