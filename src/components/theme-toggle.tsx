"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const light = savedTheme === "light";
    setIsLight(light);
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;

    const applyTheme = () => {
      setIsLight(nextIsLight);
      document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    };

    const button = buttonRef.current;
    const root = document.documentElement;
    const rect = button?.getBoundingClientRect();
    if (rect) {
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );
      root.style.setProperty("--theme-x", `${x}px`);
      root.style.setProperty("--theme-y", `${y}px`);
      root.style.setProperty("--theme-radius", `${radius}px`);
    }

    const viewTransitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };
    if (viewTransitionDocument.startViewTransition) {
      viewTransitionDocument.startViewTransition(() => flushSync(applyTheme));
    } else {
      applyTheme();
    }
    window.localStorage.setItem("portfolio-theme", nextIsLight ? "light" : "dark");
  };

  return (
    <button
      type="button"
      ref={buttonRef}
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
      aria-pressed={isLight}
    >
      <span aria-hidden="true">{isLight ? "☾" : "☼"}</span>
    </button>
  );
}
