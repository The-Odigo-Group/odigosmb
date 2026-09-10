"use client";

import { useEffect, useState } from "react";
import { BEAT_COUNT } from "@/lib/nodes";

export function HudProgress() {
  const [scrollFrac, setScrollFrac] = useState(0);
  const [beatNum, setBeatNum] = useState(1);

  useEffect(() => {
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const frac = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const beatFloat = frac * (BEAT_COUNT - 1);
      setScrollFrac(frac);
      setBeatNum(Math.round(beatFloat) + 1);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="readout">
      <div className="bar">
        <i style={{ height: `${(scrollFrac * 100).toFixed(1)}%` }} />
      </div>
      <div className="count">
        <b>{String(beatNum).padStart(2, "0")}</b> / {BEAT_COUNT}
      </div>
    </div>
  );
}
