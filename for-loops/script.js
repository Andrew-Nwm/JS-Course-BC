// For loop = repeat some code a limited amount of times

for (let i = 0; i < 10; i++) {
	console.log("Hello World", i);
}

//If we want to skip some iterations, we can use continue
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		continue; // Skip this iteration
	} else {
		console.log(i);
	}
}

// If we want to stop the loop, we can use break
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break; // Stop the loop
	} else {
		console.log(i);
	}
}
