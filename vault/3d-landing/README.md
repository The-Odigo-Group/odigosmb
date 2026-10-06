# Vaulted: 3D scroll landing page

The original scroll-driven Three.js landing page (react-three-fiber + GSAP ScrollTrigger,
spelling O-D-I-G-O with the real logo letterforms). Removed from the live site when the
wireframe-based site replaced it; kept here for later reuse. Excluded from `tsc` and ESLint.

Also preserved in git: tag `v1-3d-showcase` is the last commit with it live at `/`.

## Restore

| From `vault/3d-landing/` | To |
| --- | --- |
| `page.tsx` | `src/app/<route>/page.tsx` (it's a standalone page — no site header/footer) |
| `components/*` (incl. `scene/`) | `src/components/` |
| `lib/*` | `src/lib/` |
| `public/letters/` | `public/letters/` |
| `landing.css` | append to `src/app/globals.css` (or import it) |

Then re-add the scoped ESLint override for `src/components/scene/**` (disable
`react-hooks/immutability` and `react-hooks/set-state-in-effect`; R3F mutates scene objects
imperatively) and remove `vault` from `tsconfig.json` `exclude` if you want it type-checked in place.
The `three`, `@react-three/*`, `gsap` and `@gsap/react` dependencies are still in `package.json`.
