let randomNum = Math.random() * 10; // Genera un número aleatorio entre 0 y 10
console.log(randomNum);

//If we want to round the random number generated to the nearest value at floor or ceil, we can use its respective methods.
let floorRoundedNum = Math.floor(randomNum); // Redondea hacia abajo
console.log(floorRoundedNum);
let ceilRoundedNum = Math.ceil(randomNum); // Redondea hacia arriba
console.log(ceilRoundedNum);

//if we want to establish a range  for the random number, we can use the following formula:
const min = 20; //minumum value
const max = 50; //maximum value
let randomInRange = Math.floor(Math.random() * max) + min; //it'll generate a random number between 20 and 50
console.log(randomInRange);
