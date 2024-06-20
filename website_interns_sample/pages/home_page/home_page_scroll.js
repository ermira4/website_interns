document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.card');
    const totalSlides = slides.length;
    let slidesPerPage = getSlidesPerPage(); 
    let currentSlide = 0;

    function getSlidesPerPage() {
        if (window.innerWidth >= 300 && window.innerWidth <= 900) {
            return 1; 
        } else {
            return 3; 
        }
    }

    function slideTo(index) {
        const slideWidth = carousel.offsetWidth / slidesPerPage;
        const slideOffset = -index * slideWidth;
        carousel.style.transform = `translateX(${slideOffset}px)`;
        currentSlide = index;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - slidesPerPage) {
            slideTo(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            slideTo(currentSlide - 1);
        }
    }

    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    window.addEventListener('resize', function() {
        slidesPerPage = getSlidesPerPage(); 
        slideTo(currentSlide); 
    });

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', function(event) {
        touchStartX = event.touches[0].clientX;
    });

    carousel.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].clientX;
        handleGesture();
    });

    function handleGesture() {
        if (touchEndX < touchStartX) {
            nextSlide(); 
        } else if (touchEndX > touchStartX) {
            prevSlide(); 
        }
    }
});

