window.onload = () => {
    // Modal State
    let modalState = {
        hasBeenShown: false,
        emails: [],
    }

    // Elements
    let emailModal = document.getElementsByClassName('email-modal')[0];
    let closeModalBtn = document.getElementsByClassName('email-modal__close-btn')[0];
    let emailInputField = document.getElementsByClassName('email-modal__input')[0];
    let emailSendBtn = document.getElementsByClassName('email-modal__button')[0];
    let emailThankMsg = document.getElementsByClassName('email-thank')[0];

    // Callbacks and Functions
    const emailValidityHandler = email => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const showModalHandler = () => {
        if (!modalState.hasBeenShown) {
            emailModal.classList.add('email-modal--visible');
        }
    }

    const closeModalHandler = () => {
        emailModal.classList.remove('email-modal--visible');
        modalState.hasBeenShown = true;
    }

    const emailSubmitHandler = () => {
        
        if (emailInputField.value !== "" && emailValidityHandler(emailInputField.value)) {
            modalState.emails.push(emailInputField.value);
            emailThankMsg.classList.add('email-thank--success');
        } else {
            document.getElementsByClassName('email-modal__error-msg')[0].classList.add('email-modal__error-msg--active');
            document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');
        }
    }

    // Event Listeners
    document.body.addEventListener('mouseleave', showModalHandler);
    closeModalBtn.addEventListener('click', closeModalHandler);
    emailSendBtn.addEventListener('click', emailSubmitHandler);
}


