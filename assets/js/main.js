const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-button');
const menuBtnLines = document.querySelectorAll('.menu-button__line');
const telNumber = document.querySelector('.tel__number');
const buttonToTop = document.querySelector('.button-to-top');

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

buttonToTop.addEventListener('click', (event) => {
    header.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
})