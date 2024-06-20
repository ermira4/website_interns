document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('.registrationForm form');
    const contactDetails = document.getElementById('contactDetails');
    const userNameSpan = document.getElementById('userName');
    const userEmailSpan = document.getElementById('email');
    const userPhoneSpan = document.getElementById('phone');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate registration (replace with actual registration logic)
        const formData = new FormData(registrationForm);
        const name = formData.get('nameInput');
        const email = formData.get('emailInput');
        const message = formData.get('messageInput');

        // Display contact details after successful registration
        userNameSpan.textContent = name;
        userEmailSpan.textContent = email;
        contactDetails.style.display = 'block';
        registrationForm.style.display = 'none';
    });
});