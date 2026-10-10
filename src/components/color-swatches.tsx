"use client";

import { ACCENT_COLORS, useAccent } from "./accent-context";

export default function ColorSwatches() {
  const { index, setIndex } = useAccent();

  return (
    <div className="swatches" role="group" aria-label="Accent color">
      {ACCENT_COLORS.map((c, i) => (
        <button
          key={c.solid}
          type="button"
          className={`swatch${i === index ? " active" : ""}`}
          style={{ background: c.solid }}
          aria-label={`Use accent color ${i + 1}`}
          aria-pressed={i === index}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );
}
