window.onload = () => {
  let input = document.querySelector(".courses__header-search")
  input.oninput = function () {
    let value = this.value.trim()
    let items = document.querySelectorAll(".courses__item-content__title")

    if (value != "") {
      items.forEach((item) => {
        if (item.innerText.search(value) == -1) {
          item.classList.add("hide")
        }
      })
    } else {
      items.forEach((item) => {
        item.classList.remove("hide")
      })
    }
  }
}
