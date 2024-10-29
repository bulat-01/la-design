const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-button');
const body = document.querySelector('.body');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', (event) => {
    menu.classList.toggle('menu_active');
    menuBtn.classList.toggle('menu-button_active');
    body.classList.toggle('body_lock');
    header.classList.toggle('header_active');
});

menu.addEventListener('click', (event) => {
    let target = event.target;

    if (!target.classList.contains('menu-navigation__item')) return; 

    menu.classList.remove('menu_active');
    menuBtn.classList.remove('menu-button_active');
    body.classList.remove('body_lock');
    header.classList.remove('header_active');
});