// Aktualizace roku v patičce
document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

function toggleMenu() {
    const isActive = hamburger.classList.contains('active');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (!isActive) {
        body.classList.add('menu-open');
    } else {
        body.classList.remove('menu-open');
    }
}

function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    body.classList.remove('menu-open');
}

if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking on backdrop
    navLinks.addEventListener('click', (e) => {
        if (e.target === navLinks || e.target.classList.contains('nav-links')) {
            closeMenu();
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
}

// Plynulé scrollování pro navigační odkazy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Accordion functionality with smooth animation
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other accordions for better focus (optional - remove if you want multiple open)
            // accordions.forEach(acc => {
            //     if (acc !== this) {
            //         acc.classList.remove('active');
            //         acc.nextElementSibling.classList.remove('active');
            //     }
            // });
            
            if (isActive) {
                this.classList.remove('active');
                content.classList.remove('active');
            } else {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
}); 