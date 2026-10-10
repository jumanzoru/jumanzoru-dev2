"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { TABS, type Tab } from "@/data/content";

type TabsContextValue = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export function TabsProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>
  );
}

export function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("useTabs must be used within a TabsProvider");
  return ctx;
}
