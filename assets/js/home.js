const headerElem = document.querySelector('.header');
const arrowDown = document.querySelector('.arrow-bottom__img');
const targetBlock = document.querySelector('.portfolio');
const buttonToTop = document.querySelector('.button-to-top');
const benefitsArrows = document.querySelectorAll('.benefits__arrow img');
const benefitsItemDescription = document.querySelectorAll('.benefits__item-description');
let arrowId;

arrowDown.addEventListener('click', (event) => {
    targetBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
})

buttonToTop.addEventListener('click', (event) => {
  headerElem.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
})

benefitsArrows.forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
        event.target.classList.toggle('benefits__arrow_active');
        arrowId = event.target.dataset.arrow;
        document.getElementById(arrowId).classList.toggle("benefits__item-description_active");
    })
})


