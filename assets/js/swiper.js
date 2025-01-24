// Utility function to initialize Swiper if the element exists
function initializeSwiper(selector, options) {
    const element = document.querySelector(selector);
    if (element) {
        return new Swiper(selector, options);
    }
    return null; // Return null if the element doesn't exist
}

// Initialize product detail mobile swiper
const swiper1 = initializeSwiper(".productDetailMobileSwiper", {
    zoom: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    on: {
        click: function (swiper, event) {
            const slide = swiper.slides[swiper.activeIndex];
            const zoom = swiper.zoom;

            if (slide.classList.contains("swiper-slide-zoomed")) {
                zoom.out();
            } else {
                zoom.in(event.target);
            }
        },
    },
});

// Initialize thumbnail slider
const swiper2 = initializeSwiper(".thumbnailProductDetailSlider", {
    direction: "vertical",
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Initialize main product detail slider
const swiper3 = initializeSwiper(".mainProductDetailSlider", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper2, // Only link if swiper2 was successfully initialized
    },
});

