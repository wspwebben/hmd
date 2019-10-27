/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
    'is-accent',
    'is-light',
    'is-open',
    'is-center',
    'is-gap',

    'swiper-container',
    'swiper-wrapper',
    'swiper-slide',
  ],
  'alwaysAddBlocks': [
    'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    'src/scss/normalize.scss',
    'src/scss/fonts.scss',
    'swiper/swiper.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    // Lora Regular
    'src/fonts/Lora-Regular.woff': 'fonts/',
    'src/fonts/Lora-Regular.woff2': 'fonts/',
    // Roboto Regular
    'src/fonts/Roboto-Regular.woff': 'fonts/',
    'src/fonts/Roboto-Regular.woff2': 'fonts/',
    // Roboto Bold Italic
    'src/fonts/Roboto-BoldItalic.woff': 'fonts/',
    'src/fonts/Roboto-BoldItalic.woff2': 'fonts/',
    
    // Asset images
    'src/img/*.{png,svg,jpg}': 'img/',
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
