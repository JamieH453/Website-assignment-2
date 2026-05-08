// Initialize EmailJS
emailjs.init("JXKG7huKtk_bKbwXL");

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Send email
    sendEmail();
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const job = document.getElementById('job').value;
    const cv = document.getElementById('cv').files[0];

    if (name === '') {
        alert('Please enter your full name.');
        return false;
    }

    if (job === '') {
        alert('Please select a position.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    if (!cv) {
        alert('Please upload your CV.');
        return false;
    }

    return true;
}

function sendEmail() {
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        job: document.getElementById('job').options[document.getElementById('job').selectedIndex].text,
        message: 'Application submitted for ' + document.getElementById('job').options[document.getElementById('job').selectedIndex].text + '. CV attached.'
    };

    emailjs.send('service_ry8oy3m', 'template_8g6dgvv', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showModal();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send application. Please try again.');
        });
}

function showModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';

    // Close modal when clicking close button
    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
        window.location.href = 'apply now.html';
    };

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            window.location.href = 'apply now.html';
        }
    };

    // Redirect button
    document.getElementById('redirectBtn').onclick = function() {
        modal.style.display = 'none';
        window.location.href = 'apply now.html';
    };
}