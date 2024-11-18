const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-button');
const menuBtnLines = document.querySelectorAll('.menu-button__line');
const telNumber = document.querySelector('.tel__number');
const applicationBtn = document.querySelector('.application-button');
const popupForma = document.querySelector('.popup-forma');
const form = document.getElementById('form');
const userName = document.getElementById('username');
const tel = document.getElementById('tel');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(tel);
const btnClosePopupForma = document.querySelector('.popup-forma__button-close');
const btnPrivacyPolicy = document.querySelector('.popup-form__consent-text span');
const popupPrivacyPolicy = document.querySelector('.popup-privacy-policy');
const btnClosePrivacyPolicy = document.querySelector('.popup-privacy-policy__button-close');
const popupThanks = document.querySelector('.popup-thanks');
const btnClosePopupThanks = document.querySelector('.popup-thanks__button-close');


menuBtn.addEventListener('click', (event) => {
    body.classList.toggle('body_lock');
    header.classList.toggle('header_active');
    menu.classList.toggle('menu_active');
    menuBtn.classList.toggle('menu-button_active');
});

menu.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target.classList.contains('menu-navigation__item'))) return; 

    body.classList.remove('body_lock');
    header.classList.remove('header_active');
    menu.classList.remove('menu_active');
    menuBtn.classList.remove('menu-button_active');
    menuBtnLines.forEach((line) => {
        line.style.transition = 'none';
    });
});

applicationBtn.addEventListener('click', (event) => {
    popupForma.classList.add('active');
    body.classList.add('body_lock');
})

btnClosePopupForma.addEventListener('click', (event) => {
    popupForma.classList.remove('active');
    body.classList.remove('body_lock');
})

btnPrivacyPolicy.addEventListener('click', (event) => {
    popupPrivacyPolicy.classList.add('active');
})

btnClosePrivacyPolicy.addEventListener('click', (event) => {
    popupPrivacyPolicy.classList.remove('active');
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateInputs()) {
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
    let flag = false;

    flag = userNameValue === '' || userNameValue.length < 3 || userNameValue.length > 30 
        ? (setError(userName, 'Имя пользователя должно содержать от 3 до 30 символов'), false) 
        : (setSuccess(userName), true);

    flag = telValue.length < 11 
        ? (setError(tel, 'Пожалуйста, проверьте номер телефона и попробуйте снова'), false) 
        : (setSuccess(tel), true);

    return flag;
}

btnClosePopupThanks.addEventListener('click', (event) => {
    popupThanks.classList.remove('active');
    popupForma.classList.remove('active');
    body.classList.remove('body_lock');
})