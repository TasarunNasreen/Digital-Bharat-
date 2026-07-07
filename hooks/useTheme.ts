"use client";

import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>("digital-bharat-theme", "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return { theme, setTheme, toggleTheme };
}
