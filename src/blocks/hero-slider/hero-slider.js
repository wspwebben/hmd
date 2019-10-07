import Swiper from 'swiper';

const block = 'js-hero-slider';
const gutter = 20;

const slider = new Swiper(`.${block}__slider`, {
  loop: true,
  spaceBetween: gutter,
  navigation: {
    prevEl: `.${block}__prev`,
    nextEl: `.${block}__next`,
  },
});
