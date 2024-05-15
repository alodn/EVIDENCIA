
const { gsap, Power3 } = window;

function animatePage() {

    const elements = document.querySelectorAll('body > *');


    gsap.from(elements, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: Power3.easeOut,
        stagger: 0.2
    });
}


window.addEventListener('DOMContentLoaded', animatePage);