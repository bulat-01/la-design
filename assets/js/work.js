const imagesGallery = document.querySelectorAll('.project-specifics__img');
const popupGallery = document.querySelector('.popup-gallery');
const bntClosePopupGallery = document.querySelector('.popup-gallery__button-close');

const sliderSwiper = new Swiper('.slider', {
    spaceBetween: 30,
    loop: true,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

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
        },
    },
});

const popupGallerySwiper = new Swiper('.popup-gallery__content', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    breakpoints: {
        768: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',  
            }
        },
    },
});

imagesGallery.forEach((image) => {
    image.addEventListener('click', (event) => {
        popupGallery.classList.add('active');
        body.classList.add('body_lock');
        popupGallerySwiper.slideTo(event.currentTarget.id, 0, false)
    })
})

bntClosePopupGallery.addEventListener('click', (event) => {
    popupGallery.classList.remove('active');
    body.classList.remove('body_lock');
})