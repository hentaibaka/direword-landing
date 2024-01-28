const swiper = new Swiper(".slider-container", {
    direction: 'horizontal',
    loop: true,
    autoHeight: false,
    lazyPreloadPrevNext: 0,
    breakpointsBase: 'window', //container | window
    centerSlide: "true",  
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      520: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      },
      768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});