import Swiper from 'swiper';

import { GUTTER } from './../../js/consts';

const block = 'js-testimonials';
const elem = document.querySelector(`.${block}`);

if (elem) {
  const mainSlider = new Swiper(`.${block}__main-slider`, {
    loop: true,
    spaceBetween: GUTTER,
    navigation: {
      prevEl: `.${block}__prev`,
      nextEl: `.${block}__next`,
    },
  });

  const subSlider = new Swiper(`.${block}__sub-slider`, {
    loop: true,
    spaceBetween: GUTTER,
  });

  subSlider.controller.control = mainSlider;
  mainSlider.controller.control = subSlider;
}
