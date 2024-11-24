if (window.location.pathname === '/pages/portfolio.html' || window.location.pathname === '/pages/contacts.html' || window.location.pathname === '/pages/price.html') {
    const logoIcon = document.querySelector('.logo');
    const logoIconForMenu = document.querySelector('.logo-for-menu');
    const telNumberIcon = document.querySelector('.tel__image');
    const telNumberIconForMenu = document.querySelector('.tel__image-for-menu');

    menuBtn.addEventListener('click', (event) => {
        logoIcon.classList.toggle('logo_off');
        logoIconForMenu.classList.toggle('logo-for-menu_white');
        telNumberIcon.classList.toggle('tel__image_off');
        telNumberIconForMenu.classList.toggle('tel__image-for-menu_white');
        telNumber.classList.toggle('tel__number_white')
        menuBtnLines.forEach((line) => line.classList.toggle('menu-button__line_white'));
    });

    menu.addEventListener('click', (event) => {
        logoIcon.classList.remove('logo_off');
        logoIconForMenu.classList.remove('logo-for-menu_white');
        telNumber.classList.remove('tel__image_off');
        telNumberIconForMenu.classList.remove('tel__image-for-menu_white');
        telNumber.classList.remove('tel__number_white')
        menuBtnLines.forEach((line) => {
            line.classList.remove('menu-button__line_white')}
        );
    });
}
