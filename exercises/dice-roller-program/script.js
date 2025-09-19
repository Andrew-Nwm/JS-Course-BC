function rollDice() {
	const numDice = document.getElementById("diceCount").value;
	const diceResult = document.getElementById("diceResults");
	const diceImages = document.getElementById("diceImages");
	const values = [];
	const images = [];

	for (let i = 0; i < numDice; i++) {
		const value = Math.floor(Math.random() * 6) + 1;
		console.log(`Dice ${i + 1}: ${value}`);
		values.push(value);
		console.log(values);
		images.push(
			`<img src="assets/${value}.png" style="width: 100px; height: 100px; margin: 5px 8px;" alt="Dice ${value}" />`
		);
	}
	diceResult.textContent = `You rolled: ${values.join(", ")}`;
	diceImages.innerHTML = images.join("");
}
