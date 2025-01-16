document.addEventListener('DOMContentLoaded', function () {

    new Splide('#headerSlider1', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pagination: false
    }).mount();

    new Splide('#headerSlider2', {
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
            }
        }
    }).mount();

    new Splide('#heroSlider', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        arrows: false,
        pagination: false,
    }).mount();

    new Splide('#newArrivalSlider', {
        type: 'loop',
        perPage: 4,
        autoplay: false,
        arrows: false,
        pagination: false,
        breakpoints: {
            1200: {
                perPage: 3,
                arrows: true
            },
            800: {
                perPage: 2,
                arrows: true
            },
            600: {
                perPage: 1,
                arrows: true
            }
        }
    }).mount();

    new Splide('#testimonialSlider', {
        type: 'loop',
        perPage: 1,
        gap: '1rem',
        autoplay: false,
        arrows: false,
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 2
            },
            768: {
                perPage: 1
            }
        }
    }).mount();

});

