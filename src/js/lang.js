import gsap from "gsap"

console.log(gsap.matchMedia())

const lang = new Map()
const selectLang = document.querySelector("[name=lang]")

lang.set("fr", {
  lang: "fr",
  header: {
    title: { entities: ["LIBÉREZ", "VOS LIENS", "AVEC NINKS"] },
    subtitleText: `
    Mettez en avant votre identité en ligne grâce à Ninks.
    Créez une page à votre image qui rassemble toutes vos
    destinations de contenu de manière visuellement captivante.`,
    adsLargeText: "",
    button: "Commencer",
  },

  slider: [
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ],
  pricing: [
    {
      price: "Free",
      functionnality: ["10 Liens", "Sans publicité", "Url personnaliée", "Test"],
      button: "Commencer",
    },
    {
      price: "3.49€",
      functionnality: [
        "25 Liens",
        "Sans publicité",
        "Analytics",
        "Ingétration de Stripe",
        "Paiement en ligne",
      ],
      button: "Mise à jour",
    },
  ],
  finalScreen: {
    title: { entities: ["QUE DITES-VOUS", "DE", "CELA ?"] },
    subtitleText: `
    Toutes vos connexions sur les réseaux sociaux réunies sur
    une seule page étonnante et ajustable. C'est comme si vous
    aviez entre les mains le pouvoir illimité des reseaux
    sociaux !`,
    button: "C'est parti!",
  },
  footer: {
    legal: "Mentions légales",
    confidentiality: "Politique de confidentialité",
    right: " Ninks. Tous droits réservés.",
  },
})

lang.set("en", {
  lang: "en",
  header: {
    title: { entities: ["UNLEACH", "YOUR LINKS", "WITH NINKS"] },
    subtitleText: `Promote your identity online with Ninks.
    Create a page in your image that brings together all your
    content destinations visually captivating.`,
    adsLargeText: "",
    button: "Get started",
  },

  slider: [
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ],
  pricing: [
    { price: "", functionnality: ["", "", ""], button: "" },
    { price: "", functionnality: ["", "", ""], button: "" },
  ],
  finalScreen: {
    title: { entities: ["WHAT DO YOU SAY", "ABOUT", "THAT ?"] },
    subtitleText: `
    All your social media connections together on
    one stunning, adjustable page.
    It's as if you
    had in your hands the unlimited power of networks
    social!`,
    button: "Let's go!",
  },
  footer: {
    legal: "Legal Notice",
    confidentiality: "Privacy Policy",
    right: " Ninks. All rights reserved.",
  },
})
lang.set("es", {
  lang: "es",
  header: {
    title: "",
    subtitleText: "",
    adsLargeText: "",
    button: "",
  },

  slider: [
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ],
  pricing: [
    { price: "", functionnality: ["", "", ""], button: "" },
    { price: "", functionnality: ["", "", ""], button: "" },
  ],
  finalScreen: {
    title: "",
    subtitleText: "",
    button: "",
  },
  footer: {
    legal: "",
    confidentiality: "",
    right: "",
  },
})

const getTextLang = () => {
  return lang.get(localStorage.getItem("lang"))
}

const updateText = () => {
  const textItem = getTextLang()

  //header
  document.querySelectorAll("[data-header-title]").forEach((item, key) => {
    item.innerText = textItem.header.title.entities[key]
  })

  document.querySelector("[data-header-subtitleText]").innerText = textItem.header.subtitleText
  document.querySelector("[data-header-button]").innerText = textItem.header.button

  //princing

  document.querySelectorAll("[data-pricing]  .pricing-screen__block").forEach((pricing, key) => {
    pricing.querySelector("[data-pricing-price]").innerText = textItem.pricing[key].price

    textItem.pricing[key].functionnality.map((func, keyFunc) => {
      pricing.querySelector("[data-pricing-functionnality]").children[keyFunc].innerText = func
    })

    pricing.querySelector("[data-pricing-button]").innerText = textItem.pricing[key].button
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

selectLang.value = localStorage.getItem("lang")

selectLang.addEventListener("change", () => {
  localStorage.setItem("lang", selectLang.value)
  getTextLang()
  updateText()
})
