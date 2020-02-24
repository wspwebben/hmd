import Swiper from 'swiper';

const block = 'js-tabs';
const elem = document.querySelector(`.${block}`);

if (elem && window.matchMedia('(min-width: 60rem)').matches) {
  const slider = new Swiper(elem, {
    slidesPerView: 'auto',
    mousewheel: true,
    freeMode: true,
  });
}