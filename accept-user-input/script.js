/**
 * How to accept user input in JavaScript
 *
 * 1. EASY WAY: Use `window.prompt()`
 * 2. PROFESSIONAL WAY: Use HTML textbbox
 */

// let username = window.prompt("What is your name?");
// alert(`Hello, ${username}!`);

let username;
document.getElementById("my_submit").onclick = function () {
	username = document.getElementById("input_username").value;
	alert(`Hello, ${username}!`);
	document.getElementById("input_username").value = "";
};

document
	.getElementById("input_username")
	.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			document.getElementById("my_submit").click();
			username = document.getElementById("input_username").value;
		}
	});
