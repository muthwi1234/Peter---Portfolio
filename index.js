document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            errorMessage.textContent = "Please enter a valid email address.";
            return;
        }

        // Custom validation (e.g., checking message length)
        if (message.length < 10) {
            errorMessage.textContent = "Message must be at least 10 characters long.";
            return;
        }

        // If all validation passes, you can submit the form or display a success message
        // For this example, we'll display a success message
        successMessage.textContent = "Form submitted successfully!";
        
        // Clear the form fields
        contactForm.reset();
        errorMessage.textContent = "";
    });
});
