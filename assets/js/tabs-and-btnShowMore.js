const tabsButtons = document.querySelectorAll('.tabs__tab');
const AllWorks = document.querySelector('.list__all-works');
const AllWorksItems = Array.from(AllWorks.children);
let currentWorksItems = 10;
let hiddenWorksItems;
let countRows = 4;
const btnShowMore = document.querySelector('.portfolio__button');

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