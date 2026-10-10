"use client";

import { useState } from "react";
import { CONTENT, TABS } from "@/data/content";
import { useTabs } from "./tabs-context";

export default function NavRail() {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <nav className="nav" id="nav">
      {TABS.map((tab, i) => (
        <button
          key={tab}
          data-tab={tab}
          aria-selected={tab === activeTab}
          onClick={() => setActiveTab(tab)}
        >
          <span className="n">{i + 1}</span>
          <span className="lb">{tab}</span>
        </button>
      ))}
    </nav>
  );
}

export function EntryList() {
  const { activeTab } = useTabs();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const sections = CONTENT[activeTab];
  const tabNumber = TABS.indexOf(activeTab) + 1;

  return (
    <div id="list">
      {sections.map((section, i) => (
        <div key={section.name}>
          <div className="sec">
            <span className="n">
              {tabNumber}.{i + 1}
            </span>
            <h2>{section.name}</h2>
          </div>
          {i === 0 && (
            <div className="head">
              <span>DESCRIPTION</span>
              <span>DATE</span>
            </div>
          )}
          {section.items.map((entry) => {
            const key = `${section.name}-${entry.title}-${entry.date}`;
            const open = openItems.has(key);
            return (
              <div key={key} className={`item${open ? " open" : ""}`}>
                <button className="row" onClick={() => toggleItem(key)}>
                  <span>
                    <span className="title">
                      {entry.href ? (
                        <a
                          href={entry.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {entry.title}
                        </a>
                      ) : (
                        entry.title
                      )}
                      {entry.subtitle && <span className="title-subtitle"> {entry.subtitle}</span>}
                    </span>
                    <span className="role">↳ {entry.role}</span>
                  </span>
                  <span className="date">{entry.date}</span>
                  <span className="chev">›</span>
                </button>
                <div className="more">
                  <div>
                    <p>{entry.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
