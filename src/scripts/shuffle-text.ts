import ShuffleText from "shuffle-text";

const DURATION = 800;
const VIEW_THRESHOLD = 0.4;

const targets = new Set<HTMLElement>();

const shouldLockWidth = (el: HTMLElement) =>
  getComputedStyle(el).display.includes("inline");

const lockWidth = (el: HTMLElement) => {
  el.style.maxWidth = "100%";
  el.style.overflow = "hidden";

  if (shouldLockWidth(el)) {
    el.style.width = "";
    const w = Math.ceil(el.getBoundingClientRect().width);
    if (w > 0) el.style.width = `${w}px`;
    return;
  }

  el.style.width = "100%";
  el.style.whiteSpace = "nowrap";
};

const bindHover = (el: HTMLElement, text: ShuffleText) => {
  el.addEventListener("mouseenter", () => {
    if (text.isRunning) return;
    text.start();
  });
};

const bindView = (el: HTMLElement, text: ShuffleText) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      text.start();
      observer.unobserve(el);
    },
    { threshold: VIEW_THRESHOLD },
  );
  observer.observe(el);
};

const initShuffleText = (el: HTMLElement) => {
  if (targets.has(el)) return;

  const text = new ShuffleText(el);
  text.duration = DURATION;
  targets.add(el);
  lockWidth(el);

  const modes = (el.dataset.shuffle ?? "load").split(/\s+/);

  if (modes.includes("hover")) bindHover(el, text);
  if (modes.includes("view")) bindView(el, text);
  if (modes.includes("load")) text.start();
};

const initAll = () => {
  document.querySelectorAll<HTMLElement>(".js-shuffle").forEach(initShuffleText);
};

const start = () => {
  if (document.fonts?.ready) {
    document.fonts.ready.then(initAll);
  } else {
    initAll();
  }
};

if (document.documentElement.classList.contains("is-ready")) {
  start();
} else {
  window.addEventListener("noah:ready", start, { once: true });
}

let resizeTimer = 0;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    targets.forEach(lockWidth);
  }, 120);
});
