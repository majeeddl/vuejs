/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-v-model-argument": "off",
  },
  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto",
    },
  ],
  env: {
    "vue/setup-compiler-macros": true,
    "vue/no-v-model-argument": false,
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
