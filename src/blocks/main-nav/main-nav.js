const menu = document.querySelector('.js-menu');
const toggle = menu.querySelector('.js-menu__toggle');
const wrapper = menu.querySelector('.js-menu__wrapper');

const openClass = 'main-nav__wrapper--open';
let isMenuOpen = false;

wrapper.classList.add(openClass);
wrapper.style.maxHeight = `${wrapper.clientHeight}px`;
wrapper.classList.remove(openClass);

function openMenu() {
  isMenuOpen = true;
  wrapper.classList.add(openClass)
  document.addEventListener('keydown', escapeKeydownHandler);
}

function closeMenu() {
  isMenuOpen = false;
  wrapper.classList.remove(openClass)
  document.removeEventListener('keydown', escapeKeydownHandler);
}

function escapeKeydownHandler({ key }) {
  if (key === 'Escape') {
    // is needed to trigger burger close
    toggle.click();  
  }
}

toggle.addEventListener('click', function() {
  isMenuOpen ? closeMenu() : openMenu();
});
