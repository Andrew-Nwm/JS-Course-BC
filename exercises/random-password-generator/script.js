function generatePassword(
	length,
	includeUppercase,
	includeLowercase,
	includeNumbers,
	includeSymbols
) {
	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	const numberChars = "0123456789";
	const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

	let allowedChars = "";
	let password = "";

	allowedChars += includeUppercase ? uppercaseChars : "";
	allowedChars += includeLowercase ? lowercaseChars : "";
	allowedChars += includeNumbers ? numberChars : "";
	allowedChars += includeSymbols ? symbolChars : "";

	if (length <= 0 || allowedChars.length === 0) {
		return "Invalid parameters for password generation. ";
	}

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allowedChars.length);
		password += allowedChars[randomIndex];
	}

	return password;
}

const passwordLength = 20;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
	passwordLength,
	includeUppercase,
	includeLowercase,
	includeNumbers,
	includeSymbols
);

console.log(`Generated password: ${password}`);
