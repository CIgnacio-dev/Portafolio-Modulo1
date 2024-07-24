// scripts.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado!');
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#projects .card-img-top');
    
    images.forEach(image => {
        image.classList.add('img-zoom');
    });
    
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-font');
    let isAlternateFont = false;

    toggleButton.addEventListener('click', function() {
        if (isAlternateFont) {
            document.body.classList.remove('alternate-font');
        } else {
            document.body.classList.add('alternate-font');
        }
        isAlternateFont = !isAlternateFont;
    });
});