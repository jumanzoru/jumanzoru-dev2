"use client";

import { useEffect, useRef } from "react";

const TRAIL_LIFETIME = 420; // ms a trail point stays visible
const MAX_ALPHA = 0.2;
const MAX_WIDTH = 3.5;
const MIN_WIDTH = 0.5;

function Crosshair() {
  return (
    <div className="cc-shape">
      <span className="cc-arm cc-top" />
      <span className="cc-arm cc-bottom" />
      <span className="cc-arm cc-left" />
      <span className="cc-arm cc-right" />
    </div>
  );
}

export default function CustomCursor() {
  const mainRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let visible = false;
    let raf = 0;
    let points: { x: number; y: number; t: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const setVisible = (next: boolean) => {
      if (visible === next) return;
      visible = next;
      mainRef.current?.style.setProperty("opacity", next ? "1" : "0");
      if (!next) points = [];
    };

    const onMove = (e: MouseEvent) => {
      if (mainRef.current) {
        mainRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      points.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--accent-light").trim() ||
      "#ff9c52";

    const tick = () => {
      const now = performance.now();
      points = points.filter((p) => now - p.t < TRAIL_LIFETIME);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.length > 1) {
        const color = accent();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        let prevMidX = points[0].x;
        let prevMidY = points[0].y;
        for (let i = 1; i < points.length; i++) {
          const p0 = points[i - 1];
          const p1 = points[i];
          const midX = (p0.x + p1.x) / 2;
          const midY = (p0.y + p1.y) / 2;
          const age = (now - p1.t) / TRAIL_LIFETIME;
          const fade = 1 - age;
          ctx.strokeStyle = color;
          ctx.globalAlpha = MAX_ALPHA * fade;
          ctx.lineWidth = MIN_WIDTH + MAX_WIDTH * fade;
          ctx.beginPath();
          ctx.moveTo(prevMidX, prevMidY);
          ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);
          ctx.stroke();
          prevMidX = midX;
          prevMidY = midY;
        }
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />
      <div ref={mainRef} className="custom-cursor" aria-hidden="true">
        <Crosshair />
      </div>
    </>
  );
}



