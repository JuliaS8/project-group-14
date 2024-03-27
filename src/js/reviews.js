new Swiper('.reviews-swiper', {
  // кількість слайдів на сторінці
  slidesPerView: 1,

  loop: true,

  // відступ між слайдами
  spaceBetween: 16,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Брейк-поінти
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});
