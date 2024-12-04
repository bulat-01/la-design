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