/* Button click alert */
const ctaBtn = document.getElementById('ctaBtn');
if(ctaBtn){
    ctaBtn.addEventListener('click', () => {
        alert('Thanks for clicking! Explore the rest of the site.');
    });
}

/* Contact Form Validation */
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(name === '' || email === '' || message === ''){
            alert('Please fill in all fields.');
            return false;
        }

        alert('Message sent successfully!');
        contactForm.reset();
    });
}
