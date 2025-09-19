/**
 * spread  operator = ... alows an iterable such as an array or string to be expanded in places where zero or more arguments are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.
 */

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let maxNum = Math.max(...numbers);
let minNum = Math.max(...numbers);
console.log(maxNum);

let username = "Andrew";
let letters = [...username];
console.log(letters);

let fruits = ["apple", "banana", "kiwi", "orange"];
let vegetables = ["carrot", "potato", "lettuce"];
let allFood = `This is all food:\n ${[...fruits, ...vegetables]}`;
console.log(allFood);

let newFruits = [...fruits]; //Here we create a new array with the same elements as fruits
newFruits.push("grape"); // Adding a new element to the new array
console.log(fruits); // ["apple", "banana", "kiwi", "orange"]
console.log(newFruits); // ["apple", "banana", "kiwi", "orange", "grape"]
