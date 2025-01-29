let currentSlide = 0;
const totalSlides = 6; // Total number of slides
const slidesToShow = 3; // Number of slides to show at a time

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - slidesToShow;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * (100 / slidesToShow);
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialize the carousel
showSlide(currentSlide);

// Optional: Set interval to automatically move to the next slide
// const slideInterval = 3000; // Change slide every 3 seconds
// setInterval(nextSlide, slideInterval);