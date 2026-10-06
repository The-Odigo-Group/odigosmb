import type * as THREE from "three";

export interface NodeHandle {
  group: THREE.Object3D;
  mats: Array<THREE.MeshStandardMaterial>;
  spriteMat: THREE.SpriteMaterial | null;
  dev: boolean;
  isPlane: boolean;
  baseIntensity: number;
  activeIntensity: number;
  baseGlow: number;
  activeGlow: number;
}

export type NodeRegistry = Record<string, NodeHandle>;
