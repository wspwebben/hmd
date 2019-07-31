const menu = document.querySelector('.main-nav');
const menuToggle = menu.querySelector('.main-nav__toggle');
const menuWrapper = menu.querySelector('.main-nav__wrapper');

const openClass = 'main-nav__wrapper--open';

menuWrapper.classList.add(openClass);
menuWrapper.style.maxHeight = `${menuWrapper.clientHeight}px`;
menuWrapper.classList.remove(openClass);

menuToggle.addEventListener('click', function() {
  menuWrapper.classList.toggle(openClass)
});