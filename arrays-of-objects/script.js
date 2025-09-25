/**
 * This file is just for know how to work with arrays of objects
 */

const fruits = [
	{ name: "apple", color: "red", calories: 95 },
	{ name: "orange", color: "orange", calories: 45 },
	{ name: "banana", color: "yellow", calories: 105 },
	{ name: "coconut", color: "white", calories: 159 },
	{ name: "pineapple", color: "yellow", calories: 200 },
];
// Accessing the second fruit's name
console.log(fruits[1].name);

//pushing a new object into the array
fruits.push({ name: "grape", color: "purple", calories: 62 });
console.log(fruits);

// Looping through the array of objects
fruits.forEach((fruit) => {
	console.log(
		`The ${fruit.name} is ${fruit.color} and has ${fruit.calories} calories.`
	);
});

const lowerCaloriesFruits = fruits.filter((fruit) => fruit.calories < 100);
console.log(lowerCaloriesFruits);

const sumOfCalories = fruits.reduce((sum, fruit) => sum + fruit.calories, 0);
console.log(sumOfCalories);

const greatestCalorieFruit = fruits.reduce(
	(max, fruit) => (fruit.calories > max.calories ? fruit : max),
	fruits[0]
);
console.log(greatestCalorieFruit);

const minorCalorieFruit = fruits.reduce(
	(min, fruit) => (fruit.calories < min.calories ? fruit : max),
	fruits[0]
);
console.log(minorCalorieFruit);

const fruitNames = fruits.map((fruit) => fruit.name);
console.log(fruitNames);

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(yellowFruits);
