const arrowDown = document.querySelector('.arrow-bottom');
const targetBlock = document.querySelector('.portfolio');

arrowDown.addEventListener('click', function(event) {
    targetBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
})