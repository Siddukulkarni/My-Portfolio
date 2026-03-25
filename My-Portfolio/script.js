const timelineItems = document.querySelectorAll('.timeline-container');
const contactElements = document.querySelectorAll('.info-card, .contact-form');

function animateOnScroll(elements, triggerFactor = 0.85) {
    const triggerPoint = window.innerHeight * triggerFactor;

    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerPoint) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', () => {
    animateOnScroll(timelineItems, 0.9); 
    animateOnScroll(contactElements, 0.85); 
});

animateOnScroll(timelineItems, 0.9);
animateOnScroll(contactElements, 0.85);

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    emailjs.sendForm('service_vvib08m', 'template_rb0gd8f', this)
        .then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Oops! Something went wrong...', error);
        });

    this.reset(); 
});

(function () {
    emailjs.init("KTtYTUxHkK4sLsiTW"); 
})();

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active'); 
});
