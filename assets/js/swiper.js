const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });