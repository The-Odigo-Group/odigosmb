"use client";

import { useMemo } from "react";
import * as THREE from "three";

function makeGlowTexture(hex: number) {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const col = new THREE.Color(hex);
  const r = Math.round(col.r * 255);
  const g = Math.round(col.g * 255);
  const b = Math.round(col.b * 255);
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, `rgba(${r},${g},${b},0.9)`);
  grad.addColorStop(0.35, `rgba(${r},${g},${b},0.35)`);
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export function GlowSprite({
  color,
  size,
  opacity,
  matRef,
}: {
  color: number;
  size: number;
  opacity: number;
  matRef: React.Ref<THREE.SpriteMaterial>;
}) {
  const map = useMemo(() => makeGlowTexture(color), [color]);
  return (
    <sprite scale={[size, size, 1]}>
      <spriteMaterial
        ref={matRef}
        map={map}
        color={0xffffff}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        opacity={opacity}
      />
    </sprite>
  );
}
