// String methods = allow us to manipulate strings in various ways.

let username = "andrewd";

//if we want to know what's the first letter of the username we use .charAt() method. It also could be used to know any other letter in the string just by changing the index number.
//The first letter is at index 0, the second letter is at index 1, etc.
let firstLetter;
firstLetter = username.charAt(0); // "a"
//or
firstLetter = username[0]; // "a"

//If we want to know the exactly place of a letter in the string we can use .indexOf() method.
let indexOfLetter;
indexOfLetter = username.indexOf("d"); // 2

//IF we want to know the exactly place of a letter in the string but we want to start from the end of the string we can use .lastIndexOf() method. It's util when we have a string with repeated letters and we want to know the last place where the letter is.
let lastIndexOfLetter;
lastIndexOfLetter = username.lastIndexOf("d"); // 7

//If we want to know the length of the string we can use .length property.
let lengthOfUsername;
lengthOfUsername = username.length; // 7

//If we want to clean up the string we can use .trim() method. It removes the spaces at the beginning and the end of the string.
let trimmedUsername;
trimmedUsername = username.trim(); // "andrewd" (if there were spaces at the beginning or the end, they would be removed)
//For example, if we had  "   andrewd   " it would be trimmed to "andrewd".

//If we want to modify the case of the string we can use .toUpperCase() and .toLowerCase() methods.
let upperCaseUsername;
upperCaseUsername = username.toUpperCase(); // "ANDREWD"
let lowerCaseUsername;
lowerCaseUsername = username.toLowerCase(); // "andrewd"

//If we want to repeat the string we can use .repeat() method. It allows us to repeat the string a certain number of times.
let repeatedUsername;
repeatedUsername = username.repeat(3); // "andrewdandrewdandrewd"

//If we want to verify if the string starts with a certain letter we can use .startsWith() method.
let startsWithLetter;
startsWithLetter = username.startsWith("a"); // true

//If we want to verify if the string ends with a certain letter we can use .endsWith() method.
let endsWithLetter;
endsWithLetter = username.endsWith("d"); // true

//If we want to replace a part of the string with another string we can use .replace() method.
let replacedUsername;
replacedUsername = username.replace("andrew", "john"); // "johnd"

//Also exists .replaceAll() method, which replaces all occurrences of a substring in the string.
let replacedAllUsername;
replacedAllUsername = username.replaceAll("d", "x"); // "anxrewx"

//If we want to split the string into an array of substrings we can use .split() method. It allows us to specify a separator.
let splitUsername;
let usernamToSplit = "andrewd,johndoe,janedoe";
splitUsername = usernamToSplit.split(","); // ["andrewd", "johndoe", "janedoe"]

//If we want to check if the string includes a certain substring we can use .includes() method.
let includesSubstring;
includesSubstring = username.includes("d"); // true

//If we want to extract a part of the string we can use .slice() method. It allows us to specify the start and end indices.
let slicedUsername;
slicedUsername = username.slice(0, 3); // "and"

//We can use .padStart() and .padEnd() methods to add padding to the string. It allows us to specify the total length of the string and the character to use for padding.
let paddedUsernameStart;
paddedUsernameStart = username.padStart(10, "*"); // "****andrewd"
let paddedUsernameEnd;
paddedUsernameEnd = username.padEnd(10, "*"); // "andrewd****
