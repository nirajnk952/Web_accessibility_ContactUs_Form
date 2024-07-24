document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formMessages = document.getElementById('form-messages');
    var successMessage = document.getElementById('success-message');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var reason = document.getElementById('reason');

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');
    var reasonError = document.getElementById('reason-error');

    // Clear previous messages
    
    formMessages.innerHTML = '';
    formMessages.setAttribute('aria-hidden', 'true');
    successMessage.classList.add('hidden');
    successMessage.setAttribute('aria-hidden', 'true');

    
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';
    reasonError.innerHTML = '';

    // Validate form inputs - check name , email etc

    var isValid = true;

    if (name.value.trim() === '') {
        nameError.innerHTML = 'Please enter your name.';
        nameError.setAttribute('aria-hidden', 'false');
        isValid = false;
    } else {
        nameError.setAttribute('aria-hidden', 'true');
    }

    if (email.value.trim() === '') {
        emailError.innerHTML = 'Please enter your email address.';
        emailError.setAttribute('aria-hidden', 'false');
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        emailError.innerHTML = 'Please enter a valid email address.';
        emailError.setAttribute('aria-hidden', 'false');
        isValid = false;
    } else {
        emailError.setAttribute('aria-hidden', 'true');
    }

    if (message.value.trim() === '') {
        messageError.innerHTML = 'Please enter your message.';
        messageError.setAttribute('aria-hidden', 'false');
        isValid = false;
    } else {
        messageError.setAttribute('aria-hidden', 'true');
    }

    if (!reason.value) {
        reasonError.innerHTML = 'Please select a reason for contacting us.';
        reasonError.setAttribute('aria-hidden', 'false');
        isValid = false;
    } else {
        reasonError.setAttribute('aria-hidden', 'true');
    }

    if (!isValid) {
        formMessages.innerHTML = 'Please fill out all required fields correctly.';
        formMessages.setAttribute('aria-hidden', 'false');
        formMessages.focus();
    } else {
        successMessage.classList.remove('hidden');
        successMessage.setAttribute('aria-hidden', 'false');
        successMessage.innerHTML = 'Thank you for contacting us. Your form has been submitted successfully.';
        document.getElementById('contact-form').reset();
        successMessage.focus();
    }
});

// functn to validate email - regx

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
