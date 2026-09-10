import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
  autoRaf: true,
  anchors: {
    offset: -80,
  },
});

if (location.hash) {
  requestAnimationFrame(() => {
    const target = document.querySelector(location.hash);
    if (target instanceof HTMLElement) {
      lenis.scrollTo(target, { offset: -80, immediate: true });
    }
  });
}

export default lenis;
