const buttonToTop = document.querySelector('.buttonToTop');
const header = document.querySelector('.header');

buttonToTop.addEventListener('click', function(event) {
    header.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
})



