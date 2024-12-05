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
const buttonExpand = document.querySelector('.price-list__button-expand');
const moreInformations = document.querySelectorAll('.price-list__more-info');
const buttonsExpandMobile = document.querySelectorAll('.price-list__button-expand-mobile');

buttonExpand.addEventListener('click', (event) => {
    moreInformations.forEach((moreInformation) => {
        moreInformation.classList.toggle('active');

        if(moreInformation.classList.contains('active')) {
            buttonExpand.firstElementChild.textContent = 'Свернуть';
        } else {
            buttonExpand.firstElementChild.textContent = 'Развернуть';
        }

        buttonExpand.lastElementChild.classList.toggle('active');
    })
})

buttonsExpandMobile.forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = button.dataset.descriptionIndex;
        const targetDescription = document.querySelector(`.price-list__item-wrapper[data-description-index="${index}"]`);

        
        if(targetDescription.classList.contains('active')) {
            targetDescription.classList.remove('active');
            button.classList.remove('active');
            button.firstElementChild.textContent = 'Развернуть';
        } else {
            targetDescription.classList.add('active');
            button.classList.add('active');
            button.firstElementChild.textContent = 'Свернуть';
        }
    })
})
