const menu = document.querySelector('.main-nav');
const menuToggle = menu.querySelector('.main-nav__toggle');
const menuWrapper = menu.querySelector('.main-nav__wrapper');

menuWrapper.style.maxHeight = `${menuWrapper.clientHeight}px`;

menuToggle.addEventListener('click', function() {
  menuWrapper.classList.toggle('main-nav__wrapper--open')
});