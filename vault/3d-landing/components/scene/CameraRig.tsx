"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ACTIVE_BY_BEAT, BEAT_COUNT, WAYPOINTS } from "@/lib/nodes";
import type { NodeRegistry } from "./nodeRegistry";

export function CameraRig({
  nodes,
  reduced,
}: {
  nodes: React.RefObject<NodeRegistry>;
  reduced: boolean;
}) {
  const { camera } = useThree();

  // GSAP tweens these plain vectors on scroll; useFrame below just reads them and
  // composes the final camera transform (base position + idle wobble + lookAt).
  const basePos = useRef(new THREE.Vector3(...WAYPOINTS[0].cam));
  const lookTarget = useRef(new THREE.Vector3(...WAYPOINTS[0].look));
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      basePos.current.set(...WAYPOINTS[0].cam);
      lookTarget.current.set(...WAYPOINTS[0].look);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: reduced ? true : 0.8,
        },
      });

      for (let i = 0; i < WAYPOINTS.length - 1; i++) {
        const to = WAYPOINTS[i + 1];
        tl.to(
          basePos.current,
          { x: to.cam[0], y: to.cam[1], z: to.cam[2], ease: "power1.inOut", duration: 1 },
          i
        ).to(
          lookTarget.current,
          { x: to.look[0], y: to.look[1], z: to.look[2], ease: "power1.inOut", duration: 1 },
          i
        );
      }

      timelineRef.current = tl;
    },
    { dependencies: [reduced] }
  );

  useFrame(({ clock }) => {
    const t0 = clock.getElapsedTime();

    camera.position.copy(basePos.current);
    if (!reduced) {
      camera.position.x += Math.sin(t0 * 0.15) * 0.6;
      camera.position.y += Math.sin(t0 * 0.2) * 0.3;
    }
    camera.lookAt(lookTarget.current);

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

    const beatFloat = (timelineRef.current?.progress() ?? 0) * (BEAT_COUNT - 1);
    const beatIdx = Math.min(BEAT_COUNT - 1, Math.max(0, Math.round(beatFloat)));
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
