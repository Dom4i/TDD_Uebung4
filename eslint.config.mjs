import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module"
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"], // Akzeptiert CRLF Zeilenumbrüche
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-trailing-spaces": "off",
      "space-before-function-paren": ["error", "never"],
      "comma-dangle": ["error", "never"]
    }
  }
];
