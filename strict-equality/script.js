/**
 *
 * This is the strict equality operator (===), which checks both value and type.
 * The strict equality operator (===) checks if two values are equal without performing type coercion.
 *
 * This is different from the loose equality operator (==), which can perform type coercion.
 * For example, '5' == 5 would be true due to type coercion,
 * but '5' === 5 would be false because the types are different (string vs number).
 *
 * This is the assigment operator (=), which assigns a value to a variable.
 * This is the strict inequality operator (!==), which checks if two values are not equal without performing type coercion.
 * For example, '5' !== 5 would be true because the types are different (string vs number).
 * The strict equality operator is often used in conditional statements to compare values.
 *
 * This is the inequality operator (!=), which checks if two values are not equal, but it performs type coercion.
 * For example, '5' != 5 would be false due to type coercion.
 * The strict equality operator is also used in loops and functions to compare values.
 */

let ola = "5";
let ola2 = 5;

console.log(ola === ola2); // false, because '5' is a string and 5 is a number
console.log(ola !== ola2); // true, because '5' is a string and 5 is a number
console.log(ola == ola2); // true,  because it doesn't compare types, just values
console.log(ola != ola2); // false, because '5' is coerced to a number
console.log(ola); // '5'
console.log(ola2); // 5
