document.addEventListener('DOMContentLoaded', function () {
    // Initialize Splide sliders only if the corresponding element exists
    const initializeSlider = (selector, options) => {
        const element = document.querySelector(selector);
        if (element) {
            new Splide(selector, options).mount();
        }
    };

    // Header Slider 1
    initializeSlider('#headerSlider1', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pagination: false,
    });

    // Header Slider 2
    initializeSlider('#headerSlider2', {
        type: 'loop',
        perPage: 4,
        autoplay: true,
        arrows: false,
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            768: {
                perPage: 1,
            },
        },
    });

    // Hero Slider
    initializeSlider('#heroSlider', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        arrows: false,
        pagination: false,
    });

    // New Arrival Slider
    initializeSlider('#newArrivalSlider', {
        type: 'loop',
        perPage: 4,
        autoplay: false,
        arrows: false,
        pagination: false,
        breakpoints: {
            1200: {
                perPage: 3,
                arrows: true,
            },
            800: {
                perPage: 2,
                arrows: true,
            },
            600: {
                perPage: 1,
                arrows: true,
            },
        },
    });

    // Testimonial Slider
    initializeSlider('#testimonialSlider', {
        type: 'loop',
        perPage: 1,
        gap: '1rem',
        autoplay: false,
        arrows: false,
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        },
    });
});
