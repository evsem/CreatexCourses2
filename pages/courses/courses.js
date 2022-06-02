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

// SEARCH
// window.onload = () => {
//   let input = document.querySelector(".courses__header-search")
//   input.oninput = function () {
//     let value = this.value.trim()
//     let titles = document.querySelectorAll(".courses__item-content__title")
//     let items = document.querySelectorAll(".courses__body-item")

//     if (value != "") {
//       titles.forEach((title) => {
//         if (title.innerText.toLowerCase().search(value) == -1) {
//           title.classList.add("backcolor")
//         }
//       })
//     } else {
//       titles.forEach((title) => {
//         title.classList.remove("backcolor")
//       })
//     }
//   }
// }
