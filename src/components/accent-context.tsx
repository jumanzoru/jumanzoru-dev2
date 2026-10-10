"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const ACCENT_COLORS = [
  { solid: "#b54b00", light: "#ff9c52" },
  { solid: "#2f6fed", light: "#7aa8ff" },
  { solid: "#2e9b52", light: "#7ddc6f" },
  { solid: "#c0399f", light: "#f06fd6" },
] as const;

type AccentContextValue = {
  index: number;
  setIndex: (i: number) => void;
};

const AccentContext = createContext<AccentContextValue | null>(null);

export function AccentProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const { solid, light } = ACCENT_COLORS[index];
    document.documentElement.style.setProperty("--accent", solid);
    document.documentElement.style.setProperty("--accent-light", light);
  }, [index]);

  return <AccentContext.Provider value={{ index, setIndex }}>{children}</AccentContext.Provider>;
}

export function useAccent() {
  const ctx = useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used within AccentProvider");
  return ctx;
}
