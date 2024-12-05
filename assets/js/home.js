const arrowDown = document.querySelector('.arrow-bottom__img');
const targetBlock = document.querySelector('.portfolio');
const benefitsArrows = document.querySelectorAll('.benefits__arrow');
const benefitsItemDescription = document.querySelectorAll('.benefits__item-description');

arrowDown.addEventListener('click', (event) => {
    targetBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
})

benefitsArrows.forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
        const arrowId = event.currentTarget.dataset.arrow;

        event.currentTarget.classList.toggle('benefits__arrow_active');
        document.getElementById(arrowId).classList.toggle("benefits__item-description_active");
    })
})

