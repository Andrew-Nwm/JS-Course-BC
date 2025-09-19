/**
 * Switch statements are used to execute different code blocks based on the value of a variable or expression.
 * They are often used as an alternative to multiple if-else statements for cleaner and more readable code.
 */

//Example with if-else statements
let day = 1;

if (day == 1) {
	console.log("It's Monday");
} else if (day == 2) {
	console.log("It's Tuesday");
} else if (day == 3) {
	console.log("It's Wednesday");
} else if (day == 4) {
	console.log("It's Thursday");
} else if (day == 5) {
	console.log("It's Friday");
} else if (day == 6) {
	console.log("It's Saturday");
} else if (day == 7) {
	console.log("It's Sunday");
} else {
	console.log("Invalid day");
} //How we can see, this code is long and repetitive, making it hard to read and maintain.

//Now, let's use a switch statement to achieve the same result:
switch (day) {
	case 1:
		console.log("It's Monday");
		break;
	case 2:
		console.log("It's Tuesday");
		break;
	case 3:
		console.log("It's Wednesday");
		break;
	case 4:
		console.log("It's Thursday");
		break;
	case 5:
		console.log("It's Friday");
		break;
	case 6:
		console.log("It's Saturday");
		break;
	case 7:
		console.log("It's Sunday");
		break;
	default:
		console.log("Invalid day");
} //As we can see, the switch statement is much cleaner and easier to read. It allows us to handle multiple cases without repeating the variable or expression being evaluated. Each case corresponds to a specific value of the variable, and the `break` statement prevents fall-through to subsequent cases. The `default` case handles any values that do not match any of the specified cases, similar to the `else` statement in an if-else structure.

//Another example using a switch statement:

let testScore = 92;
let letterGrade;
switch (true) {
	case testScore >= 90:
		letterGrade = "A";
		console.log("You got an A");
		break;
	case testScore >= 80:
		letterGrade = "B";
		console.log("You got a B");
		break;
	case testScore >= 70:
		letterGrade = "C";
		console.log("You got a C");
		break;
	case testScore >= 60:
		letterGrade = "D";
		console.log("You got a D");
		break;
	default:
		letterGrade = "F";
		console.log("You got an F");
}
