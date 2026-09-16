import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lenis from "./lenis";
import { prefersReducedMotion } from "./runtime";

gsap.registerPlugin(ScrollTrigger);
lenis.on("scroll", ScrollTrigger.update);

let stopHeroSlideshow: (() => void) | undefined;

const playHeroSlideshow = (slides: HTMLElement[]) => {
  stopHeroSlideshow?.();

  if (slides.length < 2) {
    gsap.fromTo(
      slides[0],
      { scale: 1.06 },
      { scale: 1, duration: 2.2, ease: "power2.out" },
    );
    return;
  }

  const HOLD = 5.2;
  const FADE = 2.6;
  let index = 0;
  let timer: gsap.core.Tween | undefined;

  slides.forEach((slide, i) => {
    gsap.set(slide, {
      opacity: i === 0 ? 1 : 0,
      scale: 1,
      zIndex: i === 0 ? 1 : 0,
    });
  });

  const kenBurns = (slide: HTMLElement) => {
    gsap.fromTo(
      slide,
      { scale: 1 },
      {
        scale: 1.045,
        duration: HOLD + FADE,
        ease: "none",
        overwrite: false,
      },
    );
  };

  const go = () => {
    const current = slides[index];
    const nextIndex = (index + 1) % slides.length;
    const next = slides[nextIndex];

    gsap.set(next, { opacity: 0, scale: 1, zIndex: 2 });
    gsap.set(current, { zIndex: 1 });
    kenBurns(next);

    gsap.to(next, {
      opacity: 1,
      duration: FADE,
      ease: "sine.inOut",
      overwrite: "auto",
      onComplete: () => {
        current.classList.remove("is-active");
        next.classList.add("is-active");
        gsap.killTweensOf(current);
        gsap.set(current, { opacity: 0, scale: 1, zIndex: 0 });
        schedule();
      },
    });

    index = nextIndex;
  };

  const schedule = () => {
    timer?.kill();
    timer = gsap.delayedCall(HOLD, go);
  };

  kenBurns(slides[0]);
  schedule();

  stopHeroSlideshow = () => {
    timer?.kill();
    gsap.killTweensOf(slides);
  };
};

const playHero = () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const slides = [...hero.querySelectorAll<HTMLElement>(".hero__image")];
  const catchCopy = hero.querySelector(".hero__catch");
  const subCopy = hero.querySelector(".hero__sub");

  if (slides.length) {
    playHeroSlideshow(slides);
  }

  if (catchCopy) {
    gsap.fromTo(
      catchCopy,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.25, delay: 0.15, ease: "power3.out" },
    );
  }

  if (subCopy) {
    gsap.fromTo(
      subCopy,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.05, delay: 0.4, ease: "power3.out" },
    );
  }
};

const once = (trigger: Element, start = "top 85%") => ({
  trigger,
  start,
  once: true,
});

const reveal = (elements: NodeListOf<Element> | Element[], extra: gsap.TweenVars = {}) => {
  elements.forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: once(el),
      ...extra,
    });
  });
};

const initReveals = () => {
  reveal(document.querySelectorAll(".ed-head"));
  reveal(document.querySelectorAll(".about__intro, .about__item"));
  reveal(document.querySelectorAll(".gallery__lead, .gallery__text"));
  reveal(document.querySelectorAll(".company__layout, .contact__body"));
  reveal(document.querySelectorAll(".page-block, .js-reveal"));

  document.querySelectorAll(".gallery__item").forEach((item, index) => {
    gsap.from(item, {
      y: 36,
      opacity: 0,
      duration: 1,
      delay: Math.min(index * 0.06, 0.3),
      ease: "power3.out",
      scrollTrigger: once(item, "top 88%"),
    });
  });

  document.querySelectorAll(".service__item").forEach((item) => {
    const media = item.querySelector(".service__media");
    const copy = item.querySelector(".service__copy");

    if (media) {
      gsap.from(media, {
        y: 48,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: once(item, "top 80%"),
      });
    }

    if (copy) {
      gsap.from(copy, {
        y: 32,
        opacity: 0,
        duration: 1,
        delay: 0.12,
        ease: "power3.out",
        scrollTrigger: once(item, "top 80%"),
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
      scrollTrigger: once(fields[0]),
    });
  }
};

let heroPlayed = false;

const bootHero = () => {
  if (heroPlayed || prefersReducedMotion()) return;
  heroPlayed = true;
  playHero();
};

const bootReveals = () => {
  if (prefersReducedMotion()) return;
  initReveals();
  ScrollTrigger.refresh();
};

if (document.documentElement.classList.contains("is-ready")) {
  bootHero();
  bootReveals();
} else {
  window.addEventListener("noah:intro", bootHero, { once: true });
  window.addEventListener("noah:ready", () => {
    bootHero();
    bootReveals();
  }, { once: true });
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    stopHeroSlideshow?.();
    heroPlayed = false;
  });
}
