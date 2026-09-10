"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { ACTIVE_BY_BEAT, WAYPOINTS } from "@/lib/nodes";
import type { ScrollBeatState } from "@/lib/useScrollBeat";
import type { NodeRegistry } from "./nodeRegistry";

function lerpArr(a: [number, number, number], b: [number, number, number], t: number) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ] as [number, number, number];
}

export function CameraRig({
  scrollRef,
  nodes,
  reduced,
}: {
  scrollRef: React.RefObject<ScrollBeatState>;
  nodes: React.RefObject<NodeRegistry>;
  reduced: boolean;
}) {
  const { camera } = useThree();
  const camTarget = useRef(new THREE.Vector3(...WAYPOINTS[0].cam));
  const lookTarget = useRef(new THREE.Vector3(...WAYPOINTS[0].look));
  const camCurrent = useRef(new THREE.Vector3(...WAYPOINTS[0].cam));
  const lookCurrent = useRef(new THREE.Vector3(...WAYPOINTS[0].look));
  const followLerp = reduced ? 1 : 0.055;

  useFrame(({ clock }) => {
    const { beatFloat } = scrollRef.current;
    const idx = Math.min(WAYPOINTS.length - 2, Math.floor(beatFloat));
    const t = beatFloat - idx;
    const t2 = t * t * (3 - 2 * t);
    const camArr = lerpArr(WAYPOINTS[idx].cam, WAYPOINTS[idx + 1].cam, t2);
    const lookArr = lerpArr(WAYPOINTS[idx].look, WAYPOINTS[idx + 1].look, t2);
    camTarget.current.set(...camArr);
    lookTarget.current.set(...lookArr);

    const t0 = clock.getElapsedTime();
    camCurrent.current.lerp(camTarget.current, followLerp);
    lookCurrent.current.lerp(lookTarget.current, followLerp);
    camera.position.copy(camCurrent.current);
    if (!reduced) {
      camera.position.x += Math.sin(t0 * 0.15) * 0.6;
      camera.position.y += Math.sin(t0 * 0.2) * 0.3;
    }
    camera.lookAt(lookCurrent.current);

    const registry = nodes.current;
    if (!reduced) {
      let i = 0;
      for (const id in registry) {
        const n = registry[id];
        if (n.isPlane) {
          n.group.rotation.y = Math.sin(t0 * 0.13 + i) * 0.24;
          n.group.rotation.x = Math.sin(t0 * 0.1 + i * 1.7) * 0.09;
        } else {
          n.group.rotation.y = t0 * 0.06 + i;
          n.group.rotation.x = Math.sin(t0 * 0.1 + i) * 0.05;
        }
        i++;
      }
    }

    const beatIdx = Math.min(6, Math.max(0, Math.round(beatFloat)));
    const actives = ACTIVE_BY_BEAT[beatIdx];
    for (const id in registry) {
      const n = registry[id];
      const isActive = actives.indexOf(id) !== -1;
      const targetIntensity = n.dev
        ? isActive
          ? 0.15
          : 0.02
        : isActive
          ? n.activeIntensity
          : n.baseIntensity;
      const targetGlow = isActive ? n.activeGlow : n.baseGlow;
      if (!n.dev) {
        n.mats.forEach((m) => {
          m.emissiveIntensity += (targetIntensity - m.emissiveIntensity) * 0.06;
        });
      }
      if (n.spriteMat) {
        n.spriteMat.opacity += (targetGlow - n.spriteMat.opacity) * 0.06;
      }
      const scaleTarget = isActive ? 1.12 : 1.0;
      n.group.scale.x += (scaleTarget - n.group.scale.x) * 0.06;
      n.group.scale.y = n.group.scale.z = n.group.scale.x;
    }
  });

  return null;
}
