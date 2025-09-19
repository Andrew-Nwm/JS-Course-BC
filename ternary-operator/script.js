/**
 * Ternary Operator: a shortcut to if{} and else{} statements.
 * It helps to assign a value to a variable based on a condition.
 * Syntax: condition ? valueIfTrue : valueIfFalse;
 */

let ageChecker = document.getElementById("ageChecker");
let message = document.getElementById("message");

//condition evaluation with if and else
ageChecker.onclick = function () {
	let ageInput = document.getElementById("ageInput").value;
	ageInput = Number(ageInput);
	if (ageInput >= 18) {
		message.textContent = `Okay dude, you're old enough to enter this site.`;
	} else {
		message.textContent = `Sorry dude, you're not old enough to enter this site.`;
	}
};

//Now, condition evaluation with ternary operator
ageChecker.onclick = function () {
	let ageInput = document.getElementById("ageInput").value;
	ageInput = Number(ageInput);
	ageInput >= 18
		? (message.textContent = `Okay dude, you're old enough to enter this site.`)
		: (message.textContent = `Sorry dude, you're not old enough to enter this site.`);
};

//Another example
//One store is giving to his customers a discount of 10% if they have a purchase amount up to $100

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
	`Welcome to our store. Today we have a discount of 10% for purchases over $100.\n`
);
console.log(
	`Your cart amount is $${purchaseAmount}, your discount is $${discount}`
);
console.log(`You have to pay $${purchaseAmount - discount * (discount / 100)}`);
