import * as frData from "../js/fr.json"
import * as enData from "../js/en.json"

const lang = new Map()
const selectLangElement = document.querySelector("[name=lang]")
lang.set("fr", frData)
lang.set("en", enData)

lang.forEach((lang, key) => {
  const option = document.createElement("option")
  option.classList.add("footer-select__option")
  option.textContent = lang.lang
  option.value = key

  selectLangElement.appendChild(option)
})

const getTextLang = () => {
  return lang.get(localStorage.getItem("lang") || "fr")
}

const updateText = () => {
  selectLangElement.value = localStorage.getItem("lang") || "fr"
  const textItem = getTextLang()

  //header
  document.querySelectorAll("[data-header-title]").forEach((item, key) => {
    item.innerText = textItem.header.title.entities[key]
  })

  document.querySelector("[data-header-subtitleText]").innerText = textItem.header.subtitleText
  document.querySelector("[data-header-button]").innerText = textItem.header.button

  //pricing

  document.querySelectorAll("[data-pricing] .pricing-screen__block").forEach((pricing, key) => {
    pricing.querySelector("[data-pricing-price]").innerText = textItem.pricing[key].price

    textItem.pricing[key].functionnality.map((func, keyFunc) => {
      pricing.querySelector("[data-pricing-functionnality]").children[keyFunc].innerText = func
    })

    pricing.querySelector("[data-pricing-button]").innerText = textItem.pricing[key].button
  })

  // slider

  document.querySelectorAll("[data-slider=desktop] .swiper-slide").forEach((slider, key) => {
    if (slider.querySelector("[data-slider-title]").children.length) {
      slider.querySelector("[data-slider-title]").children[0].innerText = textItem.slider[key].title
    } else {
      slider.querySelector("[data-slider-title]").innerText = textItem.slider[key].title
    }

    slider.querySelector("[data-slider-description]").innerText = textItem.slider[key].description
  })

  //final screen
  document.querySelector("[data-final-button]").textContent = textItem.finalScreen.button

  document.querySelector("[data-final-subtitleText]").innerText = textItem.finalScreen.subtitleText
  document.querySelectorAll("[data-final-title]").forEach((item, key) => {
    item.innerText = textItem.finalScreen.title.entities[key]
  })

  // footer

  document.querySelector("[data-footer-right]").childNodes[2].textContent = textItem.footer.right
  document.querySelector("[data-footer-confidentiality]").innerText =
    textItem.footer.confidentiality
  document.querySelector("[data-footer-legal]").innerText = textItem.footer.legal
}

updateText()

selectLangElement.addEventListener("change", () => {
  localStorage.setItem("lang", selectLangElement.value)
  getTextLang()
  updateText()
})
