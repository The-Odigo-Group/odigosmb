"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const STAR_COUNT = 900;

function buildStarGeometry() {
  const positions = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 360;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 220;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 420 - 60;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geo;
}

export function Starfield({ reduced }: { reduced: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  // star placement is random and only needs to happen once on the client --
  // keep it out of the render body so it stays pure.
  useEffect(() => {
    setGeometry(buildStarGeometry());
  }, []);

  useFrame(({ clock }) => {
    if (reduced || !pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.004;
  });

  if (!geometry) return null;

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial color={0x8b9aa3} size={0.55} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}
