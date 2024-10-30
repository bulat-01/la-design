const arrowDown = document.querySelector('.arrow-bottom__img');
const targetBlock = document.querySelector('.portfolio');
const buttonToTop = document.querySelector('.buttonToTop');
const header = document.querySelector('.header');

arrowDown.addEventListener('click', function(event) {
    targetBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
})

buttonToTop.addEventListener('click', function(event) {
    header.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
})



