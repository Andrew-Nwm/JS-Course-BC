// A variable is like a container that stores a value. Behaves as if it were the value it contains.

//1. declaration    let x;
//2. asignment      x = 100;

//The variables always must have a different name, couldn't be the same as another variable name in the same scope.

/*
there's some data types in JavaScript:
1. Number: represents both integer and floating-point numbers.
2. String: represents a sequence of characters, enclosed in single or double quotes.
3. Boolean: represents a logical entity and can have two values: true or false.
4. Undefined: a variable that has been declared but not assigned a value.
5. Null: represents the intentional absence of any object value.
6. Symbol: a unique and immutable primitive value, often used as object property keys.
7. BigInt: represents integers with arbitrary precision, allowing for very large numbers.
8. Object: a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any type.
9. Array: a special type of object used to store ordered collections of values, which can be of any type.
10. Function: a callable object that encapsulates reusable code, defined with the `function` keyword or as an arrow function.
11. Date: a built-in object that represents dates and times, providing methods for date manipulation.
12. RegExp: a built-in object that provides a way to match strings against patterns using regular expressions.
*/

//examples:
let age = 19;
let price = 19.99;
let name = "John Doe";
let isActive = true;
let notAssigned; // Undefined
let emptyValue = null; // Null
let uniqueId = Symbol("id");
let bigNumber = BigInt(1234567890123456789012345678901234567890);
let person = { name: "Alice", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
let greet = function () {
	return "Hello!";
}; // Function
let greetArrow = () => "Hello!"; // Arrow Function
let currentDate = new Date(); // Date
let regex = /ab+c/; // RegExp

//If we want to know the type of any variable, we can use the `typeof` operator.
console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof notAssigned); // "undefined"
console.log(typeof emptyValue); // "object" (null is considered an object in JavaScript)
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigNumber); // "bigint"
console.log(typeof person); // "object"
console.log(typeof numbers); // "object" (arrays are a type of object)
console.log(typeof greet); // "function"
console.log(typeof greetArrow); // "function"
console.log(typeof currentDate); // "object"
console.log(typeof regex); // "object" (RegExp is also a type of object)

let fullName = "Andrew";
let ageNumber = 19;
let isStudent = true;

let phrase = (document.getElementById(
	"paragraph"
).textContent = `hi, mi name is ${fullName}, I am ${ageNumber} years old and I am a student: ${isStudent}`);
