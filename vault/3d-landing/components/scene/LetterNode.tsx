"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { LETTER_GLOW_OPTS } from "@/lib/nodes";
import { GlowSprite } from "./GlowSprite";
import type { NodeHandle } from "./nodeRegistry";

export function LetterNode({
  id,
  url,
  aspect,
  worldHeight,
  glowSize,
  glowColor,
  position,
  registerNode,
}: {
  id: string;
  url: string;
  aspect: number;
  worldHeight: number;
  glowSize: number;
  glowColor: number;
  position: [number, number, number];
  registerNode: (id: string, handle: NodeHandle) => void;
}) {
  const texture = useLoader(THREE.TextureLoader, url);
  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
  }, [texture]);

  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const spriteMatRef = useRef<THREE.SpriteMaterial>(null);

  const width = worldHeight * aspect;

  useEffect(() => {
    if (!groupRef.current || !materialRef.current) return;
    registerNode(id, {
      group: groupRef.current,
      mats: [materialRef.current],
      spriteMat: spriteMatRef.current,
      dev: false,
      baseIntensity: LETTER_GLOW_OPTS.baseIntensity,
      activeIntensity: LETTER_GLOW_OPTS.activeIntensity,
      baseGlow: LETTER_GLOW_OPTS.glowOpacity,
      activeGlow: LETTER_GLOW_OPTS.activeGlow,
      isPlane: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <planeGeometry args={[width, worldHeight]} />
        <meshStandardMaterial
          ref={materialRef}
          map={texture}
          emissive={0xffffff}
          emissiveMap={texture}
          emissiveIntensity={LETTER_GLOW_OPTS.baseIntensity}
          transparent
          alphaTest={0.4}
          side={THREE.DoubleSide}
          roughness={0.6}
          metalness={0.05}
        />
      </mesh>
      <GlowSprite
        color={glowColor}
        size={glowSize}
        opacity={LETTER_GLOW_OPTS.glowOpacity}
        matRef={spriteMatRef}
      />
    </group>
  );
}
