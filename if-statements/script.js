let years = 19;

if (years >= 18) {
	console.log(`You're old enough to enter this site`);
} else {
	console.log(`Sorry, you're not old enough to enter this site`);
}

//We can do inner if statements as well
//The limit to do inner if statements is only your imagination, there is no limit to how many you can nest. But be careful, it can make your code hard to read.
if (years >= 18) {
	if (years >= 21) {
		console.log(`You can enter and drink alcohol`);
	} else {
		console.log(`You can enter but cannot drink alcohol`);
	}
} else {
	console.log(`Sorry, you're not old enough to enter this site`);
}

//We can use else if statements to check for multiple conditions
if (years >= 18) {
	console.log(`You're old enough to enter this site`);
} else if (years < 0) {
	console.log(`Your years cannot be below 0`);
} else {
	console.log(`Sorry, you're not old enough to enter this site`);
}

//We can also use the ternary operator to shorten our if statements
let canEnter =
	years >= 18
		? `You're old enough to enter this site`
		: `Sorry, you're not old enough to enter this site`;
console.log(canEnter);

let ageBtn = document.getElementById("ageBtn");
let message = document.getElementById("message");

ageBtn.onclick = function () {
	let age = document.getElementById("ageInput").value;
	age = Number(age);
	if (age >= 18) {
		message.textContent = `You're old enough to enter this site`;
		console.log(`You're old enough to enter this site`);
	} else {
		message.textContent = `Sorry, you're not old enough to enter this site`;
		console.log(`Sorry, you're not old enough to enter this site`);
	}
};

document
	.getElementById("ageInput")
	.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			document.getElementById("ageBtn").click();
			username = document.getElementById("ageInput").value;
		}
	});
