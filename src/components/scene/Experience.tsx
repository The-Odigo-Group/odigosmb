"use client";

import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import {
  LETTER_COLOR,
  LETTER_GLOW,
  LETTER_IMG,
  LETTER_WORLD_HEIGHT,
  POS,
  SATELLITES,
} from "@/lib/nodes";
import { CameraRig } from "./CameraRig";
import { Connections } from "./Connections";
import { LetterNode } from "./LetterNode";
import { SatelliteNode } from "./SatelliteNode";
import { Starfield } from "./Starfield";
import type { NodeHandle, NodeRegistry } from "./nodeRegistry";

const LETTER_IDS = ["O1", "D", "I", "G", "O2"];

export function Experience({ reduced }: { reduced: boolean }) {
  const { scene, gl, camera } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color(0x0f1621);
    scene.fog = new THREE.FogExp2(0x0f1621, 0.0068);
  }, [scene]);

  // The canvas sits inside a position:fixed wrapper; on some browsers the
  // ResizeObserver R3F uses internally doesn't fire on that first layout pass,
  // leaving the drawing buffer stuck at the default 300x150. Force a real sync
  // on mount and on resize as a deterministic fallback.
  useEffect(() => {
    function sync() {
      gl.setSize(window.innerWidth, window.innerHeight);
      if (camera instanceof THREE.PerspectiveCamera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    }
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [gl, camera]);

  const registry = useRef<NodeRegistry>({});
  const registerNode = useCallback((id: string, handle: NodeHandle) => {
    registry.current[id] = handle;
  }, []);

  return (
    <>
      <ambientLight color={0x4a5568} intensity={0.55} />
      <pointLight color={0xf2f4f1} intensity={0.55} distance={260} decay={2} position={[0, 10, 10]} />
      <pointLight color={0xc090a3} intensity={0.35} distance={260} decay={2} position={[-20, -10, -90]} />
      <pointLight color={0xeaf1ef} intensity={0.35} distance={300} decay={2} position={[0, -6, -70]} />

      <Starfield reduced={reduced} />

      {LETTER_IDS.map((id) => (
        <LetterNode
          key={id}
          id={id}
          url={LETTER_IMG[id].url}
          aspect={LETTER_IMG[id].ar}
          worldHeight={LETTER_WORLD_HEIGHT[id]}
          glowSize={LETTER_GLOW[id]}
          glowColor={LETTER_COLOR[id]}
          position={POS[id]}
          registerNode={registerNode}
        />
      ))}

      {SATELLITES.map((def) => (
        <SatelliteNode key={def.id} def={def} position={POS[def.id]} registerNode={registerNode} />
      ))}

      <Connections />

      <CameraRig nodes={registry} reduced={reduced} />
    </>
  );
}
