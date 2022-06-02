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

// SWIPER
new Swiper(".testimonials__box", {
  navigation: {
    nextEl: ".testimonials__body-rightArrow",
    prevEl: ".testimonials__body-leftArrow",
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".testimonials__item",
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
