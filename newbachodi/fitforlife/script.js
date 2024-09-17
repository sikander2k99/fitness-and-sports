let slideIndex = 0;
const slides = [
    'url(https://img.freepik.com/free-photo/shirtless-athletic-male-doing-biceps-workouts-with-one-dumbbell-grey-vignette-background_613910-9827.jpg?semt=ais_hybrid)',
    'url(https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627073.jpg?semt=ais_hybrid)',
    'url(https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE2fHxmaXRuZXNzfGVufDB8fDB8fHww)'
];

const hero = document.querySelector('.hero');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slideIndex = index;
    hero.style.backgroundImage = slides[slideIndex];
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Initialize the first slide
showSlide(slideIndex);

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);

// Function to Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal){
        modal.style.display = "block";
    }
}

// Function to Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal){
        modal.style.display = "none";
    }
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if(i === index){
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize the first testimonial
document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(currentTestimonial);
});





