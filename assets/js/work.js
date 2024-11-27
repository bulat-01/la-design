const slider = new Swiper('.slider', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    spaceBetween: 30,

    breakpoints: {
        768: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    },
});

const SimilarProjectsSwiper = new Swiper('.similar-projects__swiper', {

    spaceBetween: 30,
    slidesPerView: 3,

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

const gallery = new Swiper('.project-specifics__gallery', {
    slidesPerView: 'auto',
});