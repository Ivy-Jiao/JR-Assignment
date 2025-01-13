// JavaScript for password matching validation
const form = document.getElementById('registration-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.getElementById('password-error');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        // Show error message
        error.style.display = 'block';
        confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
        // Clear custom validity
        error.style.display = 'none';
        confirmPassword.setCustomValidity("");

        // Clear form
        form.style.display = 'none';

        // Display success message
        successMessage.style.display = 'block';

        // Optionally, clear the form (if desired)
        form.reset();
    }
});

confirmPassword.addEventListener('input', () => {
    if (password.value === confirmPassword.value) {
        error.style.display = 'none';
        confirmPassword.setCustomValidity("");
    } else {
        error.style.display = 'block';
        confirmPassword.setCustomValidity("Passwords do not match.");
    }
});
