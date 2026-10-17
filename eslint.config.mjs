import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {ignores:[".next/**",".next-dev/**","output/**","test-results/**","playwright-report/**","next-env.d.ts","qa/*-recheck.js","qa/browser.js"]},
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
