export function initThemeSwitch() {
  const root = document.documentElement;
  const saved = localStorage.getItem("vt-theme");
  if (saved) root.dataset.theme = saved;
  document.addEventListener("click", (e) => {
    const t = (e.target as HTMLElement).closest("[data-action='toggle-theme']");
    if (!t) return;
    const next = root.dataset.theme === "hell" ? "heaven" : "hell";
    root.dataset.theme = next;
    localStorage.setItem("vt-theme", next);
  });
}
