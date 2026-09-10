import ShuffleText from "shuffle-text";

const DURATION = 800;
const VIEW_THRESHOLD = 0.4;

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

const lockWidth = (el: HTMLElement) => {
  if (el.style.width) return;
  el.style.width = `${Math.ceil(el.getBoundingClientRect().width)}px`;
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
  const text = new ShuffleText(el);
  text.duration = DURATION;
  lockWidth(el);

  const modes = (el.dataset.shuffle ?? "load").split(/\s+/);

  if (modes.includes("hover")) bindHover(el, text);
  if (modes.includes("view")) bindView(el, text);
  if (modes.includes("load")) text.start();
};
