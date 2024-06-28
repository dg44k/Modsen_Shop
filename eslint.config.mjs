import { fixupConfigRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ignores: [
      "webpack.config.js",
      ".babelrc",
      "tsconfig.json",
      "dist/**/*",
      "node_modules/**/*",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.tsx", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
    },
  },
  ...fixupConfigRules(pluginReactConfig),
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
