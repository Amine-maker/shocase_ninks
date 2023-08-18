

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin, gsap_SplitText__WEBPACK_IMPORTED_MODULE_4__.SplitText, gsap_ScrollSmoother__WEBPACK_IMPORTED_MODULE_5__.ScrollSmoother);
window.addEventListener('DOMContentLoaded', function () {
  /*********    Fixed header    *********/
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();

    if (scroll >= 700) {
      $(".header-fixed").addClass('active');
    } else {
      $(".header-fixed").removeClass('active');
    }
  });
  let currentYear = new Date().getFullYear(),
      yearNode = document.querySelector('.year');
  yearNode.innerHTML = currentYear;
  const video = document.querySelector("video");

  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    video.removeAttribute("autoplay");
    video.pause();
  }

  let mm = gsap.matchMedia(),
      breakPoint = 991;
  mm.add({
    isMobile: `(max-width: ${breakPoint}px)`,
    isDesktop: `(min-width: ${breakPoint + 1}px)`
  }, context => {
    let {
      isMobile,

    } = context.conditions;
    console.log(context.conditions);
    let smoother = gsap_ScrollSmoother__WEBPACK_IMPORTED_MODULE_5__.ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: isMobile ? 0.5 : 2,
      smoothTouch: 0.1,
      effects: true
    });
    smoother.effects(".second-screen__block-pic__img", {
      speed: "0.9"
    });
    smoother.effects(".alarm-screen__pics-pic__img", {
      speed: "1"
    });
    smoother.effects(".parallax-1", {
      speed: "1.1"
    });
    smoother.effects(".parallax-2", {
      speed: "1.2"
    });
  }); // Main text appearance

  gsap.fromTo(".title-1, .title-3", {
    opacity: 0,
    x: -50
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo(".title-2", {
    opacity: 0,
    x: 50
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo(".stamp", {
    opacity: 0
  }, {
    opacity: 1,
    yPercent: 0,
    duration: 1
  }); // Block rotation

  let rotation = gsap.utils.toArray(".rotation");
  rotation.forEach(el => {
    let rotationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top"
      }
    });
    rotationTimeline.to(el, {
      rotation: 40,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: 2
      }
    });
  }); // Text split animation

  let text = gsap.utils.toArray(".split-title");
  text.forEach(el => {
    let splitWords = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_4__.SplitText(el, {
      type: "lines"
    });
    let splitTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top"
      }
    });
    splitTimeline.from(splitWords.lines, {
      opacity: 0,
      yPercent: 180,
      duration: 0.8,
      ease: 'Power3.easeOut',
      stagger: 0.2,
      transform: "rotate3d(1,-.3,0,90deg)"
    });
  }); // Fade footer blocks

  let fade = gsap.utils.toArray(".fade");
  fade.forEach((el, i) => {
    if (i == 1) {
      gsap.from(el, {
        opacity: 0,
        xPercent: 10,
        duration: 0.8,
        scrollTrigger: {
          trigger: el
        }
      });
    } else {
      gsap.from(el, {
        opacity: 0,
        xPercent: -10,
        duration: 0.8,
        scrollTrigger: {
          trigger: el
        }
      });
    }
  }); // FadeUp blocks

  let smallImages = gsap.utils.toArray(".fadeUp");
  smallImages.forEach(el => {
    gsap.from(el, {
      opacity: 0,
      yPercent: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play complete"
      }
    });
  }); // bubbles appearance for group blocks

  gsap.set(".pic", {
    opacity: 0,
    scale: 0
  });
  ScrollTrigger.batch(".pic", {
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      ease: "back.out"
    })
  }); // slider

  let swiper = new Swiper(".swiper", {
    speed: 1200,
    parallax: true,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  let swiperMob = new Swiper(".swiper-mob", {
    speed: 600,
    autoHeight: true,
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});
