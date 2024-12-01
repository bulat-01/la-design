const completedProjectsSwiper = new Swiper('.completed-projects__swiper', {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
    },

    breakpoints: {
        1: {
            slidesPerView: 1,
        },

        400: {
            slidesPerView: 2,
        },

        769: {
            slidesPerView: 3,
        },

        1240: {
            slidesPerView: 4,
        }
    },
});