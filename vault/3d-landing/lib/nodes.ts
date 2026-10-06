export type Vec3 = [number, number, number];

export const POS: Record<string, Vec3> = {
  O1: [4, -1, 26],
  D: [0, 1, 0],
  I: [-2, -1, -42],
  G: [2, 1, -84],
  O2: [0, 0, -126],
  contentgen: [-14, 3, -42],
  portal: [14, -3, -42],
  getfound: [-20, -4, -84],
  wincust: [20, 4, -84],
  earnfoll: [-36, 9, -84],
  buildloy: [36, -9, -84],
};

export const LETTER_IMG: Record<string, { url: string; ar: number }> = {
  O1: { url: "/letters/o1.png", ar: 395 / 425 },
  D: { url: "/letters/d.png", ar: 383 / 577 },
  I: { url: "/letters/i.png", ar: 147 / 571 },
  G: { url: "/letters/g.png", ar: 396 / 542 },
  O2: { url: "/letters/o2.png", ar: 410 / 425 },
};

export const LETTER_WORLD_HEIGHT: Record<string, number> = {
  O1: 6.5,
  D: 9.5,
  I: 7.5,
  G: 8.5,
  O2: 9,
};

export const LETTER_GLOW: Record<string, number> = {
  O1: 6,
  D: 9,
  I: 5,
  G: 8,
  O2: 9,
};

// letter planes carry their own real gradient texture -- keep them lit mostly by their
// own diffuse color instead of a big glow halo, or they wash out into a soft blob
export const LETTER_GLOW_OPTS = {
  baseIntensity: 0.05,
  activeIntensity: 0.4,
  glowOpacity: 0.22,
  activeGlow: 0.4,
};

export interface SatelliteDef {
  id: string;
  color: number;
  r: number;
  glow: number;
  dev: boolean;
}

export const SATELLITES: SatelliteDef[] = [
  { id: "contentgen", color: 0xa8c0c8, r: 3.4, glow: 19, dev: false },
  { id: "portal", color: 0xa8c0c8, r: 3.4, glow: 19, dev: false },
  { id: "getfound", color: 0x7ea852, r: 4.2, glow: 25, dev: false },
  { id: "wincust", color: 0x7ea852, r: 4.2, glow: 25, dev: false },
  { id: "earnfoll", color: 0x57626e, r: 2.6, glow: 12, dev: true },
  { id: "buildloy", color: 0x57626e, r: 2.6, glow: 12, dev: true },
];

export const LETTER_COLOR: Record<string, number> = {
  O1: 0xa8c0c8,
  D: 0xa8c0c8,
  I: 0x7ea852,
  G: 0x2f9089,
  O2: 0xc090a3,
};

export const CONNECTIONS: Array<[string, string, boolean]> = [
  ["O1", "D", false],
  ["D", "I", false],
  ["I", "G", false],
  ["G", "O2", false],
  ["I", "contentgen", false],
  ["I", "portal", false],
  ["G", "getfound", false],
  ["G", "wincust", false],
  ["G", "earnfoll", true],
  ["G", "buildloy", true],
];

export interface Waypoint {
  cam: Vec3;
  look: Vec3;
}

export const WAYPOINTS: Waypoint[] = [
  { cam: [6, 2, 34], look: [0, 0, 6] },
  { cam: [6, -1, 20], look: [6, -2, 26] },
  { cam: [0, 1, 7], look: [0, 0, 0] },
  { cam: [0, 0, -28], look: [0, 0, -42] },
  { cam: [0, 0, -66], look: [0, 0, -84] },
  { cam: [0, 1, -108], look: [0, 2, -126] },
  { cam: [0, 7, 12], look: [0, -1, -60] },
];

export const ACTIVE_BY_BEAT: string[][] = [
  [],
  ["O1"],
  ["D"],
  ["I", "contentgen", "portal"],
  ["G", "getfound", "wincust"],
  ["O2"],
  ["D", "I", "G", "O2", "contentgen", "portal", "getfound", "wincust"],
];

export const BEAT_COUNT = WAYPOINTS.length;
