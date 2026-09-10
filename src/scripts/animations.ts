import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lenis from "./lenis";

gsap.registerPlugin(ScrollTrigger);
lenis.on("scroll", ScrollTrigger.update);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const playHero = () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const image = hero.querySelector(".hero__image");
  const catchCopy = hero.querySelector(".hero__catch");

  if (image) {
    gsap.fromTo(
      image,
      { scale: 1.12 },
      { scale: 1, duration: 1.8, ease: "power2.out" },
    );
  }

  if (catchCopy) {
    gsap.fromTo(
      catchCopy,
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.15, delay: 0.35, ease: "power3.out" },
    );
  }
};

const reveal = (elements: NodeListOf<Element> | Element[], extra: gsap.TweenVars = {}) => {
  elements.forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      ...extra,
    });
  });
};

const initReveals = () => {
  reveal(document.querySelectorAll(".ed-head"));
  reveal(document.querySelectorAll(".about__vision, .about__block, .about__greeting"));
  reveal(document.querySelectorAll(".company__layout, .contact__body"));
  reveal(document.querySelectorAll(".page-block, .js-reveal"));

  document.querySelectorAll(".service__item").forEach((item) => {
    const media = item.querySelector(".service__media");
    const copy = item.querySelector(".service__copy");

    if (media) {
      gsap.from(media, {
        y: 48,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          once: true,
        },
      });
    }

    if (copy) {
      gsap.from(copy, {
        y: 32,
        opacity: 0,
        duration: 1,
        delay: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          once: true,
        },
      });
    }
  });

  const fields = document.querySelectorAll(".form__field");
  if (fields.length) {
    gsap.from(fields, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: fields[0],
        start: "top 85%",
        once: true,
      },
    });
  }
};

const boot = () => {
  if (reduced) return;
  playHero();
  initReveals();
  ScrollTrigger.refresh();
};

if (document.documentElement.classList.contains("is-ready")) {
  boot();
} else {
  window.addEventListener("noah:ready", boot, { once: true });
}
