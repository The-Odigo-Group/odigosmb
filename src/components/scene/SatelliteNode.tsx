"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GlowSprite } from "./GlowSprite";
import type { NodeHandle } from "./nodeRegistry";
import type { SatelliteDef } from "@/lib/nodes";

export function SatelliteNode({
  def,
  position,
  registerNode,
}: {
  def: SatelliteDef;
  position: [number, number, number];
  registerNode: (id: string, handle: NodeHandle) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const spriteMatRef = useRef<THREE.SpriteMaterial>(null);

  useEffect(() => {
    if (!groupRef.current) return;
    registerNode(def.id, {
      group: groupRef.current,
      mats: materialRef.current ? [materialRef.current] : [],
      spriteMat: spriteMatRef.current,
      dev: def.dev,
      isPlane: false,
      baseIntensity: def.dev ? 0 : 0.3,
      activeIntensity: def.dev ? 0.15 : 1.1,
      baseGlow: 0.55,
      activeGlow: 0.95,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [def.id]);

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <icosahedronGeometry args={[def.r, def.dev ? 0 : 1]} />
        {def.dev ? (
          <meshBasicMaterial color={def.color} wireframe transparent opacity={0.45} />
        ) : (
          <meshStandardMaterial
            ref={materialRef}
            color={def.color}
            emissive={def.color}
            emissiveIntensity={0.35}
            roughness={0.4}
            metalness={0.15}
            flatShading
          />
        )}
      </mesh>
      <GlowSprite color={def.color} size={def.glow} opacity={0.55} matRef={spriteMatRef} />
    </group>
  );
}
