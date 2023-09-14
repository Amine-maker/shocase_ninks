import gsap from "gsap";

const lang = new Map();
const selectLang = document.querySelector("[name=lang]");

lang.set("fr", {
  lang: "Français",
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
      title: "Intégrer une page personnalisée",
      description:
        "Centralisez votre présence en ligne et offrez une expérience fluide à vos visiteurs grâce à Ninks. Notre plateforme vous permet de créer une page unique, rassemblant tous vos liens vers les réseaux sociaux, vos projets, vos créations et plus encore. Simplifiez votre communication et donnez à votre communautée un accès rapide à tout ce qui vous définit en un seul clic.",
    },
    {
      title: "Rediriger votre communauté",
      description:
        "Transformez chaque clic en action grâce aux boutons d'action. Intégrez des liens d'achat, d'inscription, ou de tout autre objectif spécifique sur votre page.",
    },
    {
      title: "Partagez avec vos amis",
      description:
        "Présentez-vous au monde sous votre meilleur jour. Créez une page de liens qui reflète votre identité unique. Nos fonctionnalités d'édition visuelle vous permettent de choisir parmi une variété de thèmes, de couleurs et de mises en page pour concevoir une page qui vous ressemble.",
    },
    {
      title: "Obtenez des statistiques",
      description:
        "Prenez des décisions éclairées. Notre plateforme vous offre des outils analytiques puissants pour suivre et interpréter vos performances. Obtenez des statistiques détaillées sur les clics, les interactions et l'engagement avec vos liens.Vous avez l'avantage de comprendre ce qui fonctionne et d'adapter votre stratégie pour un impact maximal.",
    },
    {
      title: "Faites vous payer!",
      description:
        "Facilitez les transactions. Intégrez des liens de paiement instantanés directement dans votre page.",
    },
  ],
  pricing: [
    {
      price: "Gratuit",
      functionnality: [
        "10 Liens",
        "Sans publicité",
        "Url personnaliée",
        "Test",
      ],
      button: "Commencer",
    },
    {
      price: "3.49€",
      functionnality: [
        "Liens illimités",
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
});

lang.set("en", {
  lang: "Anglais",
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
      title: "Embed a custom page",
      description:
        "Centralize your online presence and provide a seamless experience to your visitors with Ninks. Our platform allows you to create a single page, bringing together all your social media links, projects, creations and more. Simplify your communication and give your community quick access to everything that defines you with just one click.",
    },
    {
      title: "Redirect your community",
      description:
        "Turn every click into action with action buttons. Include links to purchase, register, or any other specific purpose on your page.",
    },
    {
      title: "Share with your friends",
      description:
        "Present yourself to the world in your best light. Create a links page that reflects your unique identity. Our visual editing features allow you to choose from a variety of themes, colors and layouts to design a page that's unique to you.",
    },
    {
      title: "Get statistics",
      description:
        "Make informed decisions. Our platform gives you powerful analytical tools to track and interpret your performance. Get detailed statistics on clicks, interactions and engagement with your links. You have the advantage of understanding what works and adapting your strategy for maximum impact.",
    },
    {
      title: "Get paid!",
      description:
        "Make transactions easier. Embed instant payment links directly into your page.",
    },
  ],
  pricing: [
    {
      price: "Free",
      functionnality: ["10 Links", "No Ads", "Custom url", "Test"],
      button: "Get started",
    },
    {
      price: "$3.49",
      functionnality: [
        "Unlimited links",
        "No ads",
        "Analitycs",
        "Stripe integration",
        "Online payment",
      ],
      button: "Upgrade now",
    },
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
});
lang.set("es", {
  lang: "Anglais",
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
});

const getTextLang = () => {
  return lang.get(localStorage.getItem("lang") || "fr");
};

const updateText = () => {
  selectLang.value = localStorage.getItem("lang") || "fr";
  const textItem = getTextLang();

  //header
  document.querySelectorAll("[data-header-title]").forEach((item, key) => {
    item.innerText = textItem.header.title.entities[key];
  });

  document.querySelector("[data-header-subtitleText]").innerText =
    textItem.header.subtitleText;
  document.querySelector("[data-header-button]").innerText =
    textItem.header.button;

  //pricing

  document
    .querySelectorAll("[data-pricing] .pricing-screen__block")
    .forEach((pricing, key) => {
      pricing.querySelector("[data-pricing-price]").innerText =
        textItem.pricing[key].price;

      textItem.pricing[key].functionnality.map((func, keyFunc) => {
        pricing.querySelector("[data-pricing-functionnality]").children[
          keyFunc
        ].innerText = func;
      });

      pricing.querySelector("[data-pricing-button]").innerText =
        textItem.pricing[key].button;
    });

  // slider

  document
    .querySelectorAll("[data-slider=desktop] .swiper-slide")
    .forEach((slider, key) => {
      console.log(slider);
      if (slider.querySelector("[data-slider-title]").children.length) {
        console.log("ya");
        slider.querySelector("[data-slider-title]").children[0].innerText =
          textItem.slider[key].title;
      } else {
        slider.querySelector("[data-slider-title]").innerText =
          textItem.slider[key].title;
      }

      slider.querySelector("[data-slider-description]").innerText =
        textItem.slider[key].description;
    });

  //final screen
  document.querySelector("[data-final-button]").textContent =
    textItem.finalScreen.button;

  document.querySelector("[data-final-subtitleText]").innerText =
    textItem.finalScreen.subtitleText;
  document.querySelectorAll("[data-final-title]").forEach((item, key) => {
    item.innerText = textItem.finalScreen.title.entities[key];
  });

  // footer

  document.querySelector("[data-footer-right]").childNodes[2].textContent =
    textItem.footer.right;
  document.querySelector("[data-footer-confidentiality]").innerText =
    textItem.footer.confidentiality;
  document.querySelector("[data-footer-legal]").innerText =
    textItem.footer.legal;
};

updateText();

selectLang.addEventListener("change", () => {
  console.log(selectLang.value);
  localStorage.setItem("lang", selectLang.value);
  getTextLang();
  updateText();
});
