import { LOADER_STORAGE_KEY } from "../constants/session";
import { prefersReducedMotion } from "./runtime";

const reduced = prefersReducedMotion();

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const pinTop = () => {
  window.scrollTo(0, 0);
};

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });

const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;

const animateCount = (el: HTMLElement, duration: number) =>
  new Promise<void>((resolve) => {
    const t0 = performance.now();
    let last = "";

    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const text = String(Math.round(easeInOutQuad(t) * 100)).padStart(3, "0");
      if (text !== last) {
        last = text;
        el.textContent = text;
      }
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(tick);
  });

const persist = () => {
  try {
    sessionStorage.setItem(LOADER_STORAGE_KEY, "1");
  } catch {
    // ignore quota / private mode
  }
};

const markReady = () => {
  const root = document.documentElement;
  root.classList.remove("is-awaiting-loader", "is-loader-exiting");
  root.classList.add("is-ready");
  document.getElementById("loader")?.setAttribute("aria-hidden", "true");
  pinTop();
  window.dispatchEvent(new Event("noah:ready"));
};

const play = async () => {
  const loader = document.getElementById("loader");
  if (!loader) {
    persist();
    markReady();
    return;
  }

  pinTop();
  loader.classList.add("is-playing");

  const count = loader.querySelector<HTMLElement>(".loader__count");
  const fallback = window.setTimeout(() => {
    if (!document.documentElement.classList.contains("is-ready")) {
      persist();
      markReady();
    }
  }, 5000);

  await wait(200);
  if (count) await animateCount(count, 1350);
  await wait(120);

  document.documentElement.classList.add("is-loader-exiting");
  window.dispatchEvent(new Event("noah:intro"));
  await wait(850);

  window.clearTimeout(fallback);
  persist();
  markReady();
};

if (reduced) {
  persist();
  markReady();
} else if (document.documentElement.classList.contains("is-awaiting-loader")) {
  play();
} else {
  window.dispatchEvent(new Event("noah:ready"));
}
