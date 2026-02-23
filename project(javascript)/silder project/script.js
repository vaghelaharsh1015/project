let currentSlide = 0; 
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } 

    else if (index < 0) {
        currentSlide = totalSlides - 1;
    } 
    else {
        currentSlide = index;
    }

    // thise is code for chang img
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1); 
}

function prevSlide() {
    showSlide(currentSlide - 1); 
}

// setInterval(() => {
//     nextSlide();
// }, 3000); 