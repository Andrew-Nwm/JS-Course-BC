// .checked = Checked property  that determines the checked state of a checkbox or radio button
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
	if (myCheckBox.checked) {
		subResult.textContent = "You are suscribed";
	} else {
		subResult.textContent = "You are not suscribed";
	}

	if (visaBtn.checked) {
		paymentResult.textContent = "You paying with Visa";
	} else if (mastercardBtn.checked) {
		paymentResult.textContent = "You paying with Mastercard";
	} else if (payPalBtn.checked) {
		paymentResult.textContent = "You paying with Paypal";
	} else {
		paymentResult.textContent = "You haven't selected a payment method";
	}
};
