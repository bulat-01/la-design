const arrowDown = document.querySelector('.arrow-bottom__img');
const targetBlock = document.querySelector('.portfolio');
const buttonToTop = document.querySelector('.button-to-top');
const headerElem = document.querySelector('.header');

arrowDown.addEventListener('click', function(event) {
    targetBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
})

buttonToTop.addEventListener('click', function(event) {
  headerElem.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
})



