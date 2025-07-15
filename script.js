document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close menu after clicking a link
            if (nav.classList.contains('is-active')) {
                hamburger.classList.remove('is-active');
                nav.classList.remove('is-active');
            }
        });
    });

    // Close hamburger menu and remove 'is-active' class on window resize if it's open
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769 && nav.classList.contains('is-active')) {
            hamburger.classList.remove('is-active');
            nav.classList.remove('is-active');
        }
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        console.log('Form submitted:', formObject);
        alert('Message sent successfully! We will contact you shortly.');
        contactForm.reset();
    });

    ScrollReveal().reveal('.hero-section__headline', {
        delay: 200,
        distance: '50px',
        origin: 'top',
        easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.hero-section__subheadline', {
        delay: 400,
        distance: '50px',
        origin: 'top',
        easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.hero-section .button', {
        delay: 600,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.about-section__image-wrapper', {
        delay: 200,
        distance: '50px',
        origin: 'left',
        easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.about-section__text-wrapper', {
        delay: 400,
        distance: '50px',
        origin: 'right',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.services-section__grid .service-card', {
        interval: 100,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.testimonials-section__grid .testimonial-card', {
        interval: 100,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.contact-form', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out'
    });
});
