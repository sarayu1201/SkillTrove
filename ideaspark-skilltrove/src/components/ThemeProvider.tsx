"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved ?? (prefersDark ? "dark" : "light");
    
    // Apply theme classes to both html and body for CSS variable support
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.body.className = theme;
    
    // Also set data attribute for additional CSS targeting
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  
  if (!mounted) return <>{children}</>;
  return <>{children}</>;
}

