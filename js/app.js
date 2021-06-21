window.onload = () => {
    let modalState = {
        hasBeenShown: false,
    }
    let emailModal = document.getElementsByClassName('email-modal')[0];
    let closeModalBtn = document.getElementsByClassName('email-modal__close-btn')[0];

    const showModalHandler = () => {
        if (!modalState.hasBeenShown) {
            emailModal.classList.add('email-modal--visible');
        }
    }

    const closeModalHandler = () => {
        emailModal.classList.remove('email-modal--visible');
        modalState.hasBeenShown = true;
    }

    document.body.addEventListener('mouseleave', showModalHandler);
    closeModalBtn.addEventListener('click', closeModalHandler);
}


