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

    if (!target.classList.contains('menu-navigation__item')) return; 

    body.classList.remove('body_lock');
    header.classList.remove('header_active');
    menu.classList.remove('menu_active');
    menuBtn.classList.remove('menu-button_active');
    menuBtnLines.forEach((line) => line.classList.remove('menu-button__line_active'));
    logoIcon.classList.remove('logo_off');
    logoIconForMenu.classList.remove('logo-for-menu_active');
    telNumber.classList.remove('tel__image_off');
    telNumberIconForMenu.classList.remove('tel__image-for-menu_active');
    telNumber.classList.remove('tel__number_active')
});
