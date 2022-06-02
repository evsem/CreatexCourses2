new Swiper('.testimonials__box', {
  navigation: {
    nextEl: '.testimonials__body-rightArrow',
    prevEl: '.testimonials__body-leftArrow',
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.testimonials__item',
  },
  autoHeight: false,
  slidesPerView: 1,
  watchOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 0,
  freeMode: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 700,
})

new Swiper('.relatedCourses__body', {
  navigation: {
    nextEl: '.relatedCourses__header-arrowRight',
    prevEl: '.relatedCourses__header-arrowLeft',
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.relatedCourses__item',
  },
  autoHeight: false,
  slidesPerView: 2,
  watchOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 2,
  // centeredSlides: true,
  initialSlide: 0,
  freeMode: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
})
