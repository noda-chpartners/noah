import gsap from "gsap";
import { LOADER_STORAGE_KEY } from "../constants/session";
import { prefersReducedMotion } from "./runtime";
import lenis from "./lenis";

const reduced = prefersReducedMotion();

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
  window.dispatchEvent(new Event("noah:ready"));
  pinTop();
  lenis.start();
};

const persist = () => {
  try {
    sessionStorage.setItem(LOADER_STORAGE_KEY, "1");
  } catch {
    // ignore quota / private mode
  }
};

const play = () => {
  const loader = document.getElementById("loader");
  if (!loader) {
    persist();
    markReady();
    return;
  }

  pinTop();
  lenis.stop();

  const count = loader.querySelector<HTMLElement>(".loader__count");
  const progress = loader.querySelector<HTMLElement>(".loader__progress");
  const brand = loader.querySelector<HTMLElement>(".loader__brand");
  const label = loader.querySelector<HTMLElement>(".loader__label");
  const counter = { val: 0 };

  const fallback = window.setTimeout(() => {
    if (!document.documentElement.classList.contains("is-ready")) {
      persist();
      markReady();
    }
  }, 5000);

  gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

  gsap
    .timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        window.clearTimeout(fallback);
        persist();
        markReady();
      },
    })
    .from(label, { opacity: 0, y: 12, duration: 0.45 }, 0)
    .from(brand, { opacity: 0, y: 18, duration: 0.65 }, 0.08)
    .from(count, { opacity: 0, duration: 0.4 }, 0.12)
    .to(
      counter,
      {
        val: 100,
        duration: 1.35,
        ease: "power1.inOut",
        onUpdate: () => {
          if (count) {
            count.textContent = String(Math.round(counter.val)).padStart(3, "0");
          }
        },
      },
      0.2,
    )
    .to(progress, { scaleX: 1, duration: 1.35, ease: "power1.inOut" }, 0.2)
    .to(
      loader,
      {
        yPercent: -100,
        duration: 0.85,
        ease: "power3.inOut",
        onStart: () => window.dispatchEvent(new Event("noah:intro")),
      },
      "+=0.12",
    );
};

if (reduced) {
  persist();
  markReady();
} else if (document.documentElement.classList.contains("is-awaiting-loader")) {
  play();
} else {
  window.dispatchEvent(new Event("noah:ready"));
}
