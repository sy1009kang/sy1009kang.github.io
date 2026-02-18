// Default to light if user hasn't explicitly chosen.
// Also disable OS auto-switch effects by forcing the initial state.
(() => {
  try {
    const t = localStorage.getItem("theme");
    // user choice only: keep "dark" or "light"
    if (t !== "dark" && t !== "light") {
      localStorage.setItem("theme", "light");
    }
  } catch (e) {}

  // apply light by default (theme scripts usually use data-theme="dark")
  if (!localStorage.getItem("theme") || localStorage.getItem("theme") === "light") {
    document.documentElement.removeAttribute("data-theme");
  }
})();
