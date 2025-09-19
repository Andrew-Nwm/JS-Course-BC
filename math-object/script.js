// Math = built-in object that provides a collection of properties and methods for mathematical constants and functions.

//Examples:
console.log(Math.PI); //returns the value of π (pi), which is approximately 3.14159.
console.log(Math.E); //returns the value of e (Euler's number), which is approximately 2.71828.
console.log(Math.sqrt(16)); //returns the square root of 16, which is 4.

//Rounding example:
let x = 3.21;
let y = 2;
let z;

z = Math.round(x);
console.log(z); //returns 3, rounds to the nearest integer

//celing example:
let a = 3.99;
let b;
b = Math.ceil(a);
console.log(b); //returns 4, rounds up to the nearest integer

//floor example:
let c = 3.01;
let d;
d = Math.floor(c);
console.log(d); //returns 3, rounds down to the nearest integer

//Truncation example:
let e = 3.99;
let f;
f = Math.trunc(e);
console.log(f); //returns 3, removes the decimal part without rounding

//Power example:
let base = 2;
let exponent = 3;
let power = Math.pow(base, exponent); //returns 8, calculates 2 raised to the power of 3
console.log(power);

//Random number example:
let randomNumber = Math.random(); //returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(randomNumber);
//Random integer example:
let min = 1;
let max = 10;
let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min; //returns a random integer between min and max (inclusive)
console.log(randomInteger);

//Logarithm example:
let logValue = Math.log(10); //returns the natural logarithm (base e) of 10
console.log(logValue);

//Sine, Cosine, and Tangent examples:
let angle = Math.PI / 4; //45 degrees in radians
let sine = Math.sin(angle); //returns the sine of the angle
let cosine = Math.cos(angle); //returns the cosine of the angle
let tangent = Math.tan(angle); //returns the tangent of the angle
console.log(`Sine: ${sine}, Cosine: ${cosine}, Tangent: ${tangent}`);

//absolute value example:
let negativeNumber = -5;
let absoluteValue = Math.abs(negativeNumber); //returns 5, the absolute value of -5
console.log(absoluteValue);

//max and min example:
let numbers = [3, 5, 1, 8, 2];
let maxNumber = Math.max(...numbers); //returns 8, the maximum value in the array
let minNumber = Math.min(...numbers); //returns 1, the minimum value in the array
console.log(`Max: ${maxNumber}, Min: ${minNumber}`);

let ola = [];
console.log(`\nYour max value is: ${Math.max(...ola)}`);
