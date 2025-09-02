"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setIsDark(initial === "dark");
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", theme);
  }

  return (
    <button onClick={toggleTheme} className="px-3 py-1.5 border rounded text-sm" aria-label="Toggle theme">
      {isDark ? "Light" : "Dark"} mode
    </button>
  );
}

