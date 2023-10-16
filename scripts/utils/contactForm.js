// eslint-disable-next-line no-unused-vars
function displayModal() {
	const modal = document.getElementById("contact_modal");
	const main = document.getElementById("main");

	modal.style.display = "flex";
	modal.setAttribute("aria-hidden", "false");
	main.setAttribute("aria-hidden", "true");

	const inputPrenom = document.getElementById("prenom");
	inputPrenom.focus();
}

function closeModal() {
	const modal = document.getElementById("contact_modal");
	const main = document.getElementById("main");

	modal.style.display = "none";
	modal.setAttribute("aria-hidden", "true");
	main.setAttribute("aria-hidden", "false");


	form.classList.remove("hidden");

	const message = document.querySelector(".message-send");
	message.classList.add("hidden");
	message.setAttribute("aria-hidden", "true");
}

const form = document.querySelector(".form-modal-contact");

form.addEventListener("submit", submitForm);

function submitForm(event) {
	event.preventDefault();
	if (isValidForm()) {
		form.reset();
		validateForm();
	}
}


function isValidForm() {

	// Form elements
	const firstName = document.getElementById("prenom").value;
	const lastName = document.getElementById("nom").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;
  
	let formIsValid = true;
	// Vérification que les données sont correctement saisies
	if (firstName.length < 2) {
		dataErrorMessage("prenom");
		formIsValid = false;
	} else {
		hideDataErrorMessage("prenom");
	}
  
	if (lastName.length < 2) {
		dataErrorMessage("nom");
		formIsValid = false;
	} else {
		hideDataErrorMessage("nom");
	}
  
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
	if (!emailRegex.test(email)) {
		dataErrorMessage("email");
		formIsValid = false;
	} else {
		hideDataErrorMessage("email");
	}

	if (!message) {
		dataErrorMessage("message");
		formIsValid = false;
	} else {
		hideDataErrorMessage("message");
	}
  
	return formIsValid;
}


function dataErrorMessage(nameID) {
	const errorDiv = document.getElementById(nameID);
	errorDiv.classList.add("error-input");

	const errorMessage = document.querySelector(`.${nameID}-error`);
	errorMessage.classList.remove("hidden");
	errorMessage.setAttribute("aria-hidden", "false");
}
  
function hideDataErrorMessage(nameID) {
	const errorDiv = document.getElementById(nameID);
	errorDiv.classList.remove("error-input");

	const errorMessage = document.querySelector(`.${nameID}-error`);
	errorMessage.classList.add("hidden");
	errorMessage.setAttribute("aria-hidden", "true");
}

function validateForm() {
	form.reset();
	form.classList.add("hidden");

	const message = document.querySelector(".message-send");
	message.classList.remove("hidden");
	message.setAttribute("aria-hidden", "false");
}

// Fermerture du formulaire
document.addEventListener("keydown", function(event) {
	if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
		closeModal();
	}
});

form.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		submitForm(event); 
	}
});