"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { CONNECTIONS, POS } from "@/lib/nodes";

function buildLine(from: string, to: string, dashed: boolean) {
  const a = new THREE.Vector3(...POS[from]);
  const b = new THREE.Vector3(...POS[to]);
  const geometry = new THREE.BufferGeometry().setFromPoints([a, b]);
  const material = dashed
    ? new THREE.LineDashedMaterial({
        color: 0x57626e,
        transparent: true,
        opacity: 0.35,
        dashSize: 2.2,
        gapSize: 1.6,
      })
    : new THREE.LineBasicMaterial({ color: 0x7c8fa0, transparent: true, opacity: 0.4 });
  const line = new THREE.Line(geometry, material);
  if (dashed) line.computeLineDistances();
  return line;
}

function Connection({ from, to, dashed }: { from: string; to: string; dashed: boolean }) {
  const line = useMemo(() => buildLine(from, to, dashed), [from, to, dashed]);
  return <primitive object={line} />;
}

export function Connections() {
  return (
    <>
      {CONNECTIONS.map(([from, to, dashed], i) => (
        <Connection key={i} from={from} to={to} dashed={dashed} />
      ))}
    </>
  );
}
