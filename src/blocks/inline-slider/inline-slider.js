import Swiper from 'swiper';

import { GUTTER } from './../../js/consts';

const block = 'js-inline-slider';
const elem = document.querySelector(`.${block}`);

if (elem) {
  const slider = new Swiper(elem, {
    loop: true,
    loopedSlides: 0,
    slidesPerView: 'auto',
    spaceBetween: GUTTER,
    centeredSlides: true,
    mousewheel: true,
    freeMode: true,
  });
}