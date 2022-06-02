document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".about__left-accordion__item")

  accordions.forEach((el) => {
    el.addEventListener("click", (ev) => {
      //Находим текущий аккордеон
      const self = ev.currentTarget
      //Находим текущий элемент, на который мы кликнули
      const controlClick = self.querySelector(".about__left-accordion__button")
      //Находим текущий контент аккордеона
      const content = self.querySelector(".about__left-accordion__info")

      //Добавляем класс открытия контента при клике на аккордеон
      self.classList.toggle("open")

      //Анимация открытия
      if (self.classList.contains("open")) {
        //Находим высоту блока
        content.style.maxHeight = content.scrollHeight + "px"
      } else {
        content.style.maxHeight = null
      }
    })
  })
})

new Swiper(".events__body", {
  navigation: {
    nextEl: ".events__arrowsRight-img",
    prevEl: ".events__arrowsLeft-img",
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".events__body-wrapper__item",
  },
  autoHeight: false,
  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 0,
  freeMode: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 700,
})
