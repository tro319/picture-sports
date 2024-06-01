'use-strict';


const swiper = new Swiper(".swiper", {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 2,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

