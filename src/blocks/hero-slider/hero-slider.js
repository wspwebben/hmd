import Swiper from 'swiper';

import { GUTTER } from './../../js/consts';

const block = 'js-hero-slider';
const blockElement = document.querySelector(`.${block}`);
const imageWrapper = blockElement.querySelector(`.${block}__image-slider`);
const contentWrapper = blockElement.querySelector(`.${block}__content-slider`);

const padIndex = index => String(index).padStart(2, '0');

if (imageWrapper && contentWrapper) {
  const progress = blockElement.querySelector(`.${block}__progress`);

  const updateProgress = index => {
    // first slide has 0 index
    const friendlyIndex = index + 1;
    progress.textContent = padIndex(friendlyIndex);
  }

  const imageSlider = new Swiper(imageWrapper, {
    loop: true,
    spaceBetween: GUTTER,
    navigation: {
      prevEl: `.${block}__prev`,
      nextEl: `.${block}__next`,
    },
    effect: 'coverflow',
    speed: 500,
    on: {
      init() {
        updateProgress(this.realIndex);
      },
      slideChange() {
        updateProgress(this.realIndex); 
      }
    }
  });

  const contentSlider = new Swiper(contentWrapper, {
    loop: true,
    spaceBetween: GUTTER,
  });

  contentSlider.controller.control = imageSlider;
  imageSlider.controller.control = contentSlider;
}