const header = document.getElementById("header");
const toggle = header?.querySelector<HTMLButtonElement>(".header__toggle");
const navLinks = header?.querySelectorAll(".header__nav_link");

const setOpen = (open: boolean) => {
  header?.classList.toggle("is-open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("is-nav-open", open);
};

toggle?.addEventListener("click", () => {
  setOpen(!header?.classList.contains("is-open"));
});

navLinks?.forEach((link) => {
  link.addEventListener("click", () => setOpen(false));
});
