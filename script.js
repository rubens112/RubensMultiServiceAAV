// ===== SLIDER CLICK TO ENLARGE =====
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';
        modal.addEventListener('click', () => modal.remove());

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';
        modalImg.style.borderRadius = '10px';

        modal.appendChild(modalImg);
        document.body.appendChild(modal);
    });
});

// ===== PERSONALIZED WELCOME =====
window.addEventListener('DOMContentLoaded', () => {
    const welcomeMsg = document.getElementById('welcome-msg');
    const welcomeImg = document.getElementById('welcome-img');

    const now = new Date();
    const hour = now.getHours();

    let greeting = "Bienvenue sur Rubens Multi-Service !";
    if(hour < 12) greeting = "Bonjour ! Bienvenue chez Rubens Multi-Service";
    else if(hour < 18) greeting = "Bon après-midi ! Bienvenue chez Rubens Multi-Service";
    else greeting = "Bonsoir ! Bienvenue chez Rubens Multi-Service";

    welcomeMsg.textContent = greeting;
    welcomeImg.src = "-logo.jpg";
});

// ===== FORM SUBMISSION ALERT =====
const form = document.querySelector('form[name="demande"]');
form.addEventListener('submit', e => {
    alert("Merci ! Votre demande a été envoyée. Nous vous contacterons sous peu.");
});