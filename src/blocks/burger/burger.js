const burgers = document.querySelectorAll('.js-burger');

burgers.forEach(burger => {
  burger.addEventListener('click', function() {
    this.classList.toggle('js-burger--active');
  });
});