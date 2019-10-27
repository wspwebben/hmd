import Swiper from 'swiper';

import { GUTTER } from './../../js/consts';

const block = 'js-hero-slider';
const elem = document.querySelector(`.${block}__slider`);
const progress = elem.querySelector(`.${block}__progress`);

const makePrefix = index => `${index < 10 ? '0' : ''}${index}`;

const slider = new Swiper(elem, {
  loop: true,
  spaceBetween: GUTTER,
  navigation: {
    prevEl: `.${block}__prev`,
    nextEl: `.${block}__next`,
  },
  on: {
    init() {
      progress.textContent = makePrefix(this.realIndex + 1);
    },
    slideChange() {
      progress.textContent = makePrefix(this.realIndex + 1);
    }
  }
});
