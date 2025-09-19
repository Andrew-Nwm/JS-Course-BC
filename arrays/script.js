/**
 * Array = a variable like structure that can hold multiple values.
 * It is a data structure that can hold multiple values of the same type.
 * Arrays are zero-indexed, meaning the first element is at index 0.
 */

let fruits = ["apple", "orange", "banana", "kiwi", "mango"];

//To access/get an element from an array, we can use the index of the element, there's two ways to do this:

//1. Using square brackets
console.log(fruits[0]); // apple
console.log(fruits[1]); // orange
console.log(fruits[2]); // banana
console.log(fruits[3]); // kiwi
console.log(fruits[4]); // mango

/**
 * 2. Using the .at() method
 * The .at() method is a more modern way to access elements in an array.
 * It allows for negative indexing, where -1 is the last element, -2 is the second last element, and so on.
 */
console.log(fruits.at(0)); // apple
console.log(fruits.at(1)); // orange
console.log(fruits.at(2)); // banana
console.log(fruits.at(3)); // kiwi
console.log(fruits.at(4)); // mango

fruits[0] = "strawberry"; // changing the first element
console.log(fruits.at(0)); // strawberry

// To add a new element to the end of the array, we can use the .push() method
console.log(fruits); // ["strawberry", "orange", "banana", "kiwi", "mango"]
fruits.push("grape"); // adding a new element to the end of the array
console.log(fruits.at(-1)); // grape
console.log(fruits); // ["strawberry", "orange", "banana", "kiwi", "mango", "grape"]

// To remove the last element from the array, we can use the .pop() method
console.log(fruits); // ["strawberry", "orange", "banana", "kiwi", "mango", "grape"]
fruits.pop();
console.log(fruits); // ["strawberry", "orange", "banana", "kiwi", "mango"]
console.log(fruits.at(-1)); // mango (the last element after pop)

// To add a new element to the beginning of the array, we can use the .unshift() method
console.log(fruits); // ["strawberry", "orange", "banana", "kiwi", "mango"]
fruits.unshift("blueberry"); // adding a new element to the beginning of the array
console.log(fruits.at(0)); // blueberry
console.log(fruits); // ["blueberry", "strawberry", "orange", "banana", "kiwi", "mango"]

// To remove the first element from the array, we can use the .shift() method
console.log(fruits); // ["blueberry", "strawberry", "orange", "banana", "kiwi", "mango"]
fruits.shift(); // removing the first element from the array
console.log(fruits); // ["strawberry", "orange", "banana", "kiwi", "mango"]

//To know the exact number of elements in an array, we can use the .length property
let numOfFruits = fruits.length;
console.log(numOfFruits); // 5

//To search specific elements in an array, we can use the .indexOf() method
let indexOfBanana = fruits.indexOf("banana");
console.log(indexOfBanana); // 2 (the index of "banana" in the array)
let indexOfApple = fruits.indexOf("apple");
console.log(indexOfApple); // -1 (not found, returns -1)

//To know exact fruits on the array, we can user a for loop
for (let i = 0; i < fruits.length; i++) {
	console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

//Also we can use a forEach loop to iterate through the array
fruits.forEach((fruit, index) => {
	console.log(`Fruit at index ${index}: ${fruit}`);
});

// We can also use a for...of loop to iterate through the array
// This is a more modern way to iterate through arrays and works well with any iterable object.
for (fruit of fruits) {
	console.log(`Fruit: ${fruit}`);
}

//If we want to order the elements in an array, we can use the .sort() method
fruits.sort();
console.log(fruits); // ["banana", "kiwi", "mango", "orange", "strawberry"]

//We can sort the array in reverse order using the .reverse() method
fruits.reverse();
console.log(fruits); // ["strawberry", "orange", "mango", "kiwi", "banana"]

//To combine two arrays, we can use the .concat() method
let vegetables = ["carrot", "broccoli", "spinach"];
let combinedArray = fruits.concat(vegetables);
console.log(combinedArray); // ["strawberry", "orange", "mango", "kiwi", "banana", "carrot", "broccoli", "spinach"]

//To check if an element exists in an array, we can use the .includes() method
let hasBanana = fruits.includes("banana");
console.log(hasBanana); // true
let hasApple = fruits.includes("apple");
console.log(hasApple); // false
