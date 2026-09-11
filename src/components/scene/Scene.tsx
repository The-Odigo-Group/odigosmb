"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Experience } from "./Experience";

export function Scene() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 0 }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
      camera={{ position: [6, 2, 34], fov: 52, near: 0.1, far: 800 }}
    >
      <Suspense fallback={null}>
        <Experience reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
