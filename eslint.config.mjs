import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "indent": ["error", 2], // 2 spaces indentation
      "linebreak-style": ["error", "unix"], // Unix-style line endings
      "quotes": ["error", "single"], // Single quotes for strings
      "semi": ["error", "always"], // Semicolons at the end of statements
      "no-trailing-spaces": "off", // Ignore trailing spaces
      "space-before-function-paren": ["error", "never"], // No space before function parenthesis
      // Add any additional rules or modify existing ones as per your needs
    },
  },
];
