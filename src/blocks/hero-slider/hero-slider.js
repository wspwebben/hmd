import Swiper from 'swiper';

import { GUTTER } from './../../js/consts';

const block = 'js-hero-slider';

const slider = new Swiper(`.${block}__slider`, {
  loop: true,
  spaceBetween: GUTTER,
  navigation: {
    prevEl: `.${block}__prev`,
    nextEl: `.${block}__next`,
  },
});
