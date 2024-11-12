const headerElem = document.querySelector('.header');
const arrowDown = document.querySelector('.arrow-bottom__img');
const buttonToTop = document.querySelector('.button-to-top');
const targetBlock = document.querySelector('.portfolio');
const tabsButtons = document.querySelectorAll('.tabs__tab');
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
document.addEventListener('DOMContentLoaded', () => {
  tabsButtons.forEach((tabButton) => {
    const tabContent = document.getElementById(tabButton.dataset.tab);
    tabButton.children[0].textContent = tabContent.children.length;
  })
})

tabsButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    const tabButtonActive = document.querySelector('.active');
    
    if (tabButtonActive) {
      tabButtonActive.classList.remove('active');
    }
    
    const tabContentActive = document.getElementById(tabButton.dataset.tab);
    
    tabContentActive.classList.add('active');

    const line = document.querySelector('.tabs__black-line');
    
    line.style.width = event.currentTarget.offsetWidth - event.currentTarget.children[0].offsetWidth - 5  + 'px';
    line.style.left = event.currentTarget.offsetLeft + 'px'; 
  })
})

