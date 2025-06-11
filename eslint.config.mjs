import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Turn off errors/warnings for unused variables
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Allow unused parameters
      "no-unused-params": "off",

      // Allow empty functions
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "off",

      // Disable warnings for any TS-specific rule you'd like relaxed
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Allow any type usage
      "@typescript-eslint/no-explicit-any": "off",

      // General: allow console logs, alerts, etc.
      "no-console": "off",
    },
  },
];

export default eslintConfig;
