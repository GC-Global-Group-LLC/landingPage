const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const rightsReserved = document.getElementById('rightsReserved');

rightsReserved.textContent = `${new Date().getFullYear()} GC Global Group LLC. All rights reserved.`;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            e.preventDefault();

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));