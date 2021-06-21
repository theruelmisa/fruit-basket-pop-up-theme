window.onload = () => {
	// Modal State
	const modalState = {
		hasBeenShown: false,
		emails: [],
	};

	// Elements
	const emailModal = document.getElementsByClassName("email-modal")[0];
	const closeModalBtn = document.getElementsByClassName(
		"email-modal__close-btn"
	)[0];
	const emailInputField =
		document.getElementsByClassName("email-modal__input")[0];
	const emailSendBtn = document.getElementsByClassName(
		"email-modal__button"
	)[0];
	const declineBtn = document.getElementsByClassName(
		"email-modal__decline-offer"
	)[0];
	const errorMsg = document.getElementsByClassName("email-modal__error-msg")[0];
	const emailFormGroup = document.getElementsByClassName(
		"email-modal__form-group"
	)[0];
	const emailThankMsg = document.getElementsByClassName("email-thank")[0];
	const userEmail = document.getElementsByClassName("email-thank__user")[0];

	// Callbacks and Functions
	const emailValidityHandler = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const showModalHandler = () => {
		if (!modalState.hasBeenShown) {
			emailModal.classList.add("email-modal--visible");
		}
	};

	const closeModalHandler = () => {
		emailModal.classList.remove("email-modal--visible");
		modalState.hasBeenShown = true;
	};

	const emailSubmitHandler = () => {
		if (
			emailInputField.value !== "" &&
			emailValidityHandler(emailInputField.value)
		) {
			modalState.emails.push(emailInputField.value);
			emailThankMsg.classList.add("email-thank--success");
			userEmail.textContent = emailInputField.value;
		} else {
			errorMsg.classList.add("email-modal__error-msg--active");
			emailFormGroup.classList.add("email-modal__form-group--error");
		}
	};

	const removeErrors = () => {
		errorMsg.classList.remove("email-modal__error-msg--active");
		emailFormGroup.classList.remove("email-modal__form-group--error");
	};

	// Event Listeners
	document.body.addEventListener("mouseleave", showModalHandler);
	closeModalBtn.addEventListener("click", closeModalHandler);
	declineBtn.addEventListener("click", closeModalHandler);
	emailSendBtn.addEventListener("click", emailSubmitHandler);
	emailInputField.addEventListener("click", removeErrors);
	// for Submitting via enter
	emailFormGroup.addEventListener("keyup", (event) => {
		event.preventDefault();

		if (event.keyCode === 13) {
			emailSubmitHandler();
		}
	});
};
