"use client";

import { useEffect, useState } from "react";

// Owns theme state + persistence. Pre-paint script in layout sets the initial
// data-theme, so here we only sync state and respond to clicks.
function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = document.documentElement.dataset.theme || "dark";
    setTheme(saved);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("theme", next);
    } catch (e) {
      /* ignore storage failures (private mode) */
    }
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === "dark" ? "☾" : "☀"}
      </span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}

export default ThemeToggle;
