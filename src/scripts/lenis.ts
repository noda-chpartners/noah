import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { SCROLL_OFFSET } from "./runtime";

const lenis = new Lenis({
  autoRaf: true,
  anchors: {
    offset: SCROLL_OFFSET,
  },
});

if (document.documentElement.classList.contains("is-awaiting-loader")) {
  lenis.stop();
}

window.addEventListener(
  "noah:ready",
  () => {
    requestAnimationFrame(() => lenis.start());
  },
  { once: true },
);

const scrollToHash = () => {
  if (!location.hash) return;
  const target = document.querySelector(location.hash);
  if (target instanceof HTMLElement) {
    lenis.scrollTo(target, { offset: SCROLL_OFFSET, immediate: true });
  }
};

if (document.documentElement.classList.contains("is-awaiting-loader")) {
  window.addEventListener("noah:ready", scrollToHash, { once: true });
} else {
  requestAnimationFrame(scrollToHash);
}

export default lenis;
