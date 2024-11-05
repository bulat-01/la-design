const headerElem = document.querySelector('.header');
const arrowDown = document.querySelector('.arrow-bottom__img');
const buttonToTop = document.querySelector('.button-to-top');
const targetBlock = document.querySelector('.portfolio');
const tabsButtons = document.querySelectorAll('.tabs__tab');

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

document.addEventListener('DOMContentLoaded', () => {
  tabsButtons.forEach((tabButton) => {
    const tabContent = document.getElementById(tabButton.dataset.tab);
    tabButton.children[0].textContent = tabContent.children.length;
  })
})

tabsButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    const tabButtonActive = document.querySelector('.active');
    console.log(tabButtonActive);
    if (tabButtonActive) {
      tabButtonActive.classList.remove('active');
    }
    
    const tabContentActive = document.getElementById(tabButton.dataset.tab);
    
    tabContentActive.classList.add('active');

    const line = document.querySelector('.tabs__black-line');
    
    if(event.target.tagName == 'DIV') {
      line.style.width = event.target.offsetWidth - event.target.children[0].offsetWidth - 5  + 'px';
      line.style.left = event.target.offsetLeft   + 'px'; 
    } else if(event.target.tagName == 'SPAN') {
      line.style.width = event.target.parentElement.offsetWidth -  event.target.offsetWidth - 5 + 'px';
      line.style.left = event.target.parentElement.offsetLeft  + 'px'; 
    }
  })
})

