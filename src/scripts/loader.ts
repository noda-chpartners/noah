import gsap from "gsap";
import lenis from "./lenis";

const LOADER_KEY = "noah-loader";
const DURATION = 3.5;
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const pinTop = () => {
  window.scrollTo(0, 0);
  lenis.scrollTo(0, { immediate: true });
};

const markReady = () => {
  pinTop();
  document.documentElement.classList.remove("is-awaiting-loader");
  document.documentElement.classList.add("is-ready");
  document.getElementById("loader")?.setAttribute("aria-hidden", "true");
  pinTop();
  lenis.start();
};

const persist = () => {
  try {
    sessionStorage.setItem(LOADER_KEY, "1");
  } catch {
    // ignore quota / private mode
  }
};

const play = () => {
  const loader = document.getElementById("loader");
  if (!loader) {
    persist();
    window.dispatchEvent(new Event("noah:ready"));
    markReady();
    return;
  }

  pinTop();
  lenis.stop();

  const bg = loader.querySelector(".loader__bg");
  const title = loader.querySelector(".loader__title");
  const lead = loader.querySelector(".loader__lead");

  const fallback = window.setTimeout(() => {
    if (!document.documentElement.classList.contains("is-ready")) {
      persist();
      window.dispatchEvent(new Event("noah:ready"));
      markReady();
    }
  }, 6000);

  gsap.set([title, lead], { opacity: 0, y: 24 });

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      window.clearTimeout(fallback);
      persist();
      markReady();
    },
  });

  if (bg) {
    gsap.fromTo(
      bg,
      { scale: 1.08 },
      { scale: 1, duration: DURATION, ease: "none" },
    );
  }

  tl.to(title, { opacity: 1, y: 0, duration: 1.05 }, 0.2)
    .to(lead, { opacity: 1, y: 0, duration: 0.95 }, 0.85)
    .add(() => {
      persist();
      pinTop();
      window.dispatchEvent(new Event("noah:ready"));
    }, 2.45)
    .to(
      loader,
      { opacity: 0, duration: 1.05, ease: "power2.inOut" },
      2.45,
    );
};

if (reduced) {
  persist();
  window.dispatchEvent(new Event("noah:ready"));
  markReady();
} else if (document.documentElement.classList.contains("is-awaiting-loader")) {
  play();
} else {
  window.dispatchEvent(new Event("noah:ready"));
}
