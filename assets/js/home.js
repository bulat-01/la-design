const headerElem = document.querySelector('.header');
const arrowDown = document.querySelector('.arrow-bottom__img');
const buttonToTop = document.querySelector('.button-to-top');
const targetBlock = document.querySelector('.portfolio');
const tabsButtons = document.querySelectorAll('.tabs__tab');
const benefitsArrows = document.querySelectorAll('.benefits__arrow img');
const benefitsItemDescription = document.querySelectorAll('.benefits__item-description');
const AllWorks = document.querySelector('.list__all-works');
const AllWorksItems = Array.from(AllWorks.children);
let currentWorksItems = 10;
let hiddenWorksItems;
let countRows = 4;
const btnShowMore = document.querySelector('.portfolio__button');

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
        const arrowId = event.target.dataset.arrow;
        
        event.target.classList.toggle('benefits__arrow_active');
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
    const tabContentActive = document.getElementById(tabButton.dataset.tab);
    const line = document.querySelector('.tabs__black-line');

    if (tabButtonActive) {
      tabButtonActive.classList.remove('active');
    }
    
    const tabContentActive = document.getElementById(tabButton.dataset.tab);

    if (tabContentActive.classList.contains('list__all-works')) {
      btnShowMore.style.display = 'flex';
    } else {
      btnShowMore.style.display = 'none';
    }
    
    tabContentActive.classList.add('active');

    line.style.width = event.currentTarget.offsetWidth - event.currentTarget.children[0].offsetWidth - 5  + 'px';
    line.style.left = event.currentTarget.offsetLeft + 'px'; 
  })
})

btnShowMore.addEventListener('click', (event) => {
  if (btnShowMore.firstElementChild.textContent == 'Показать еще работы') {
    hiddenWorksItems = AllWorksItems.slice(currentWorksItems, currentWorksItems + 7);
    currentWorksItems += 7;
    countRows += 3;
    
    hiddenWorksItems.forEach((item) => {
      item.style.display = 'block';
    })
     
    if (currentWorksItems == AllWorksItems.length) {
      btnShowMore.firstElementChild.textContent = 'Свернуть';
    }
    
  } else {
      currentWorksItems = 10;
      countRows = 4;

      AllWorksItems.slice(10).forEach((item) => {
        item.style.display = 'none';
      })
    
      btnShowMore.firstElementChild.textContent = 'Показать еще работы';
  }
})