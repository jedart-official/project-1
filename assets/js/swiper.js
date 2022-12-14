const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // ScrollBar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // BreakPoints
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
        freemode: false,
        centeredSlides: true,
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });