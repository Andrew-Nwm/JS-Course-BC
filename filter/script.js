// .filter() = creates a new array by filtering out elements

const numbers = [1, 2, 3, 4, 5, 6, 7];

function isEven(element) {
	return element % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

function isOdd(element) {
	return element % 2 !== 0;
}

const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

const ages = [16, 17, 18, 18, 19, 20, 60];

function isAdult(element) {
	return element >= 18;
}

const adults = ages.filter(isAdult);
console.log(adults);

function isChild(element) {
	return ages < 18;
}

const children = ages.filter(isChild);
console.log(children);

const fruits = [
	"apple",
	"banana",
	"grape",
	"kiwi",
	"mango",
	"orange",
	"pomegranate",
	"strawberry",
];

function getLongWords(element) {
	return element.length >= 6;
}

const longFruits = fruits.filter(getLongWords);
console.log(longFruits);

function getShortWords(element) {
	return element.length < 6;
}

const shortFruits = fruits.filter(getShortWords);
console.log(shortFruits);
