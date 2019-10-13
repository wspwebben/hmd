import Swiper from 'swiper';

import { GUTTER } from './../../js/consts';

const block = 'js-inline-slider';

const slider = new Swiper(`.${block}`, {
  loop: true,
  loopedSlides: 0,
  slidesPerView: 'auto',
  spaceBetween: GUTTER,
  centeredSlides: true,
  mousewheel: true,
  freeMode: true,
});
