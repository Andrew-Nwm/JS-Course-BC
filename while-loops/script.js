// While loop = repeat some code WHILE a condition is true

//Example:

let username = "";

while (username === "" || username === null || username === undefined) {
	//This code will repeat itself while the condition is no longer true
	username = window.prompt("Enter your username:");
}
alert(`Welcome, ${username}!`);

// Alternative using nullish coalescing operator
// This will set a default value if username is null or undefined
while (username ?? "" === "") {
	username = window.prompt("Enter your username:");
}
alert(`Welcome, ${username}!`);

//Other alternative is using do while loop
do {
	//The difference is that the code inside the do block will run at least once
	username = window.prompt("Enter your username:");
} while (username === "" || username === null || username === undefined);
alert(`Welcome, ${username}!`);

//Another example

let loggedIn = false;
username = "";
let password = "";

while (!loggedIn) {
	username = window.prompt("Enter your username:");
	password = window.prompt("Enter your password:");

	// Simulate a login check
	if (username === "admin" && password === "1234") {
		loggedIn = true;
		alert(`Welcome, ${username}!`);
	} else {
		alert("Invalid credentials, please try again.");
	}
}
