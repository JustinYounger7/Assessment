function test() {
	alert("Test");
}


function validateForm() {
	const email = validateEmail();
	const firstName = validateFirstName();
	const lastName = validateLastName();
	const month = validateMonth();
	const day = validateDay();
	const year = validateYear();

	if(!email || !firstName || !lastName || !month || !day || !year) {
		return false;
	}
}


function validateEmail() {
	var email = document.getElementById("email");
	const error = "Your email address is required."
	if(email.value == "") {
		email.style.borderColor = "red";
		document.getElementById("email-error").innerHTML = error;
		return false;
	}
}

function validateFirstName() {
	var firstname = document.getElementById("first-name");
	const error = "Fill out your last name."
	if(firstname.value == "") {
		firstname.style.borderColor = "red";
		document.getElementById("first-name-error").innerHTML = error;
		return false;
	}
}

function validateLastName() {
	var lastname = document.getElementById("last-name");
	const error = "Fill out your last name."
	if(lastname.value == "") {
		lastname.style.borderColor = "red";
		document.getElementById("last-name-error").innerHTML = error;
		return false;
	}
}

function validateMonth() {
	var month = document.getElementById("month");
	const error = "Select your month of birth."
	if(month.value == "") {
		month.style.borderColor = "red";
		document.getElementById("month-error").innerHTML = error;
		return false;
	}
}

function validateDay() {
	var day = document.getElementById("day");
	const error = "Write your day of birth as two digits."
	if(day.value == "") {
		day.style.borderColor = "red";
		document.getElementById("day-error").innerHTML = error;
		return false;
	}
}


function validateYear() {
	var year = document.getElementById("year");
	const error = "Write your year of birth using four digits."
	if(year.value == "") {
		year.style.borderColor = "red";
		document.getElementById("year-error").innerHTML = error;
		return false;
	}
}



