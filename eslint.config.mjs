import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // react-three-fiber's whole rendering model is imperative: useFrame callbacks and
    // effects are expected to mutate camera/scene/object3d graphs returned from hooks
    // (that's how Three.js is driven every frame without re-rendering React 60x/sec).
    // The React Compiler-oriented purity/immutability rules don't yet have an
    // allowlist for that pattern, so they're scoped off for the Three.js scene layer only.
    files: ["src/components/scene/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
