/**
 * String slicing is the procces of extract a part of a string and make a substring with it.
 * The syntax is: string.slice(start, end)
 * */

const fullName = "Andrew Dev";

let firstName = fullName.slice(0, 6); // "Andrew"
let lastName = fullName.slice(7); // "Dev" It starts at index 7 and goes to the end of the string
//If we don't specify the end index, it will take the rest of the string

/**
 * If we want to extract the first charater of the string, we have two options:
 * 1. Use the slice method with the start index as 0 and the end index as 1.
 * 2. Use the charAt method with the index as 0.
 * */

let firstChar = fullName.slice(0, 1); // "A"
let firstChar2 = fullName.charAt(0); // "A"
/**
 * If we want to extract the last character of the string, we have two options:
 * 1. Use the slice method with the start index as -1.
 * 2. Use the charAt method with the index as fullName.length - 1.
 * */
let lastChar = fullName.slice(-1); // "v"
let lastChar2 = fullName.charAt(fullName.length - 1); // "v

//If we just want to extract one character from the string, is recommended to use the charAt method, because it is more readable and easier to understand.

//Email excercise
const email = "andrewsdev09@gmail.com";
let userName = email.slice(0, email.indexOf("@")); // "andrewsdev09"

console.log(`User name: ${userName}`);
let domain = email.slice(email.indexOf("@") + 1); // "gmail.com"

console.log(`Domain: ${domain}`);
let domainName = domain.slice(0, domain.indexOf(".")); // "gmail"
console.log(`Domain name: ${domainName}`);

let domainExtension = domain.slice(domain.indexOf(".") + 1); // "com"
console.log(`Domain extension: ${domainExtension}`);
