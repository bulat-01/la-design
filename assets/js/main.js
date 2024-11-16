const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-button');
const menuBtnLines = document.querySelectorAll('.menu-button__line');
const logoIcon = document.querySelector('.logo');
const logoIconForMenu = document.querySelector('.logo-for-menu');
const telNumberIcon = document.querySelector('.tel__image');
const telNumberIconForMenu = document.querySelector('.tel__image-for-menu');
const telNumber = document.querySelector('.tel__number');
const applicationBtn = document.querySelector('.application-button');
const popupForma = document.querySelector('.popup-forma');
const form = document.getElementById('form');
const userName = document.getElementById('username');
const tel = document.getElementById('tel');
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(tel);
const btnClosePopupForma = document.querySelector('.popup-forma__button-close');
const popupThanks = document.querySelector('.popup-thanks');
const btnClosePopupThanks = document.querySelector('.popup-thanks__button-close');

menuBtn.addEventListener('click', (event) => {
    body.classList.toggle('body_lock');
    header.classList.toggle('header_active');
    menu.classList.toggle('menu_active');
    menuBtn.classList.toggle('menu-button_active');
    menuBtnLines.forEach((line) => line.classList.toggle('menu-button__line_active'));
    logoIcon.classList.toggle('logo_off');
    logoIconForMenu.classList.toggle('logo-for-menu_active');
    telNumberIcon.classList.toggle('tel__image_off');
    telNumberIconForMenu.classList.toggle('tel__image-for-menu_active');
    telNumber.classList.toggle('tel__number_active')
});

menu.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target.classList.contains('menu-navigation__item'))) return; 

    body.classList.remove('body_lock');
    header.classList.remove('header_active');
    menu.classList.remove('menu_active');
    menuBtn.classList.remove('menu-button_active');
    menuBtnLines.forEach((line) => {
        line.style.transition = 'none'
        line.classList.remove('menu-button__line_active')}
    );
    logoIcon.classList.remove('logo_off');
    logoIconForMenu.classList.remove('logo-for-menu_active');
    telNumber.classList.remove('tel__image_off');
    telNumberIconForMenu.classList.remove('tel__image-for-menu_active');
    telNumber.classList.remove('tel__number_active')
});

applicationBtn.addEventListener('click', (event) => {
    popupForma.classList.add('active');
    body.classList.add('body_lock');
})

btnClosePopupForma.addEventListener('click', (event) => {
    popupForma.classList.remove('active');
    body.classList.remove('body_lock');
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateInputs() == 2) {
        popupThanks.classList.add('active');
    }
})

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.input-control__error')

    errorDisplay.textContent = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.input-control__error')

    errorDisplay.textContent = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function validateInputs() {
    const userNameValue = userName.value;
    const telValue = tel.value.replace(/\D/g, '');
    let flag = 0;

    if (userNameValue === '') {
        setError(userName, 'Требуется ввести имя пользователя');
    } else if (userNameValue.length < 3) {
        setError(userName, 'Требуется ввести имя пользователя не меньше 3 символов');
    } else if (userNameValue.length > 30) {
        setError(userName, 'Требуется ввести имя пользователя не больше 30 символов');
    } else {
        setSuccess(userName);
        flag++;
    }

    if (telValue.length < 11) {
        setError(tel, 'Пожалуйста, проверьте номер телефона и попробуйте снова');
    } else {
        setSuccess(tel);
        flag++;
    }

    return flag;
}

btnClosePopupThanks.addEventListener('click', (event) => {
    popupThanks.classList.remove('active');
    popupForma.classList.remove('active');
    body.classList.remove('body_lock');
})