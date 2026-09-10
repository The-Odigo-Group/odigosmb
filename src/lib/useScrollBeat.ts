"use client";

import { useEffect, useRef } from "react";
import { BEAT_COUNT } from "./nodes";

export interface ScrollBeatState {
  scrollFrac: number;
  beatFloat: number;
}

/** Tracks scroll progress as a ref (no re-renders) so useFrame can read it every tick. */
export function useScrollBeatRef() {
  const state = useRef<ScrollBeatState>({ scrollFrac: 0, beatFloat: 0 });

  useEffect(() => {
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFrac = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      state.current = { scrollFrac, beatFloat: scrollFrac * (BEAT_COUNT - 1) };
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return state;
}
