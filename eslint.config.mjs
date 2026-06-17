import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".obsidian/**",
      "node_modules/**",
      "assets/**",
      "docs/**",
      "planning/**",
      "wireframes/**",
    ],
  },
  ...nextVitals,
];

export default eslintConfig;
