import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { SCROLL_OFFSET } from "./runtime";

const lenis = new Lenis({
  autoRaf: true,
  anchors: {
    offset: SCROLL_OFFSET,
  },
});

if (location.hash) {
  requestAnimationFrame(() => {
    const target = document.querySelector(location.hash);
    if (target instanceof HTMLElement) {
      lenis.scrollTo(target, { offset: SCROLL_OFFSET, immediate: true });
    }
  });
}

export default lenis;
