const burgers = document.querySelectorAll('.burger');
burgers.forEach(burger => {
  burger.addEventListener('click', function() {
    this.classList.toggle('burger--active');
  });
});