// DOM
let wrapper = document.querySelector(".wrapper")
let body = document.body

// MODAL
let login = wrapper.querySelector(".header__login-text__login")
let register = wrapper.querySelector(".header__login-text__register")
let modalWrapper = wrapper.querySelector(".modals__wrapper")
let modals = wrapper.querySelectorAll(".modal")

login.addEventListener("click", (e) => {
  let path = e.currentTarget.getAttribute("data-path__modal")
  modals.forEach((modal) => {
    modal.classList.remove("modals__wrapper")
  })
  document.querySelector(`[data-modal = ${path}]`).classList.add("modal__open")
  modalWrapper.classList.add("modals__wrapper-open")
})

register.addEventListener("click", (e) => {
  let path = e.currentTarget.getAttribute("data-path__modal")
  modals.forEach((modal) => {
    modal.classList.remove("modals__wrapper")
  })
  document.querySelector(`[data-modal = ${path}]`).classList.add("modal__open")
  modalWrapper.classList.add("modals__wrapper-open")
})

modalWrapper.addEventListener("click", (e) => {
  if (e.target == modalWrapper) {
    modalWrapper.classList.remove("modals__wrapper-open")
    modals.forEach((modal) => {
      modal.classList.remove("modal__open")
    })
  }
})

// BURGER
let hamb = wrapper.querySelector(".header__hamb")
let mobile = wrapper.querySelector(".header__mobile")
let menu = wrapper.querySelector(".header__left-menu__list").cloneNode(1)

hamb.addEventListener("click", openMenuMobile)

function openMenuMobile(e) {
  e.preventDefault()
  mobile.classList.toggle("open")
  hamb.classList.toggle("active")
  body.classList.toggle("noscroll")
  renderMenuMobile()
}

function renderMenuMobile() {
  mobile.appendChild(menu)
}

// ANCHORS
let anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault()
    const blockID = anchor.getAttribute("href")
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}

// ACCORDION
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
