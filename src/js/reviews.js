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
    // type: 'fraction',

    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return `<span class="current">${String(current).padStart(
        2,
        '0'
      )}</span><span class="delimiter"></span><span class="total">${String(
        total
      ).padStart(2, '0')}</span>`;
    },

    // type: 'bullets',
    // clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
