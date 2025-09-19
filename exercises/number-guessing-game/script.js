//Define the number will be guessed by the user
let guess = Math.floor(Math.random() * 10) + 1;
console.log("The number to guess is: " + guess); // For debugging purposes
//Define the variable to check if the number has been guessed
let numberGuessed = false;

//Define the variable to store the number entered by the user
let numPerGuess = "";

//Check if the number is equal to the guessed number
while (!numberGuessed) {
	numPerGuess = window.prompt("Guess a number between 1 and 10:");
	let number = parseInt(numPerGuess);

	if (isNaN(number) || number < 1 || number > 10) {
		alert("Please enter a valid number between 1 and 10.");
		continue;
	}

	if (number === guess) {
		alert("Congratulations! You guessed the number!");
		numberGuessed = true;
	} else {
		if (number < guess) {
			alert("The number is higher. Try again.");
		} else if (number > guess) {
			alert("The number is lower. Try again.");
		}
	}
}
