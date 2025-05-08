let currentIndex = 0;
const images = ['assets/images/profile.jpg']; // Add more images here

function showSlide(index) {
    const slider = document.querySelector('.slider img');
    slider.src = images[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Set up automatic slide change every 5 seconds
setInterval(nextSlide, 5000);

// Initial call
showSlide(currentIndex);
