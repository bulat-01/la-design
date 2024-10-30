const arrowDown = document.querySelector('.arrow-bottom__img');
const targetBlock = document.querySelector('.portfolio');

arrowDown.addEventListener('click', function(event) {
    targetBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
})