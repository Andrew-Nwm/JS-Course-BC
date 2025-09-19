/**
 * Variable scope = where a variable is recognized and accesible in the code (local vs global)
 */

let y = 1; //The name must be unique in the scope. This variable is accessible everywhere in this file, it is a global variable.

//A way to create a variable that is not global
function myFunction() {
	let y = 2; //This variable is only accessible inside this function
	console.log(y); //This will log 2
}

function myFunction2() {
	let y = 3; //This variable is only accessible inside this function
	console.log(y); //This will log 3
}
//In these two functions, we have a variable called y, its the same name but they are on the same scope so they are not the same variable, they are different variables. It's the only way to have two variables with the same name, having them in different scopes. Functions can't access variables from other functions, they are isolated from each other. so, if we try to print or use that value in other function, i'll be show us an 'Uncaught Reference error: y(or any variable in the other function) is not defined'.
