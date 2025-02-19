import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import ngeslint from "@angular-eslint/eslint-plugin";
import ngtemplate from "@angular-eslint/template-parser";

export default [
  js.configs.recommended,  // JavaScript recommended rules
  {
    files: ["*.ts"],
    languageOptions: {
      parser: tsparser,
      globals: {
        console: "readonly",
        process: "readonly"  // Add 'process' as a global variable
      }
    },
    rules: {
      ...tseslint.configs.recommended.rules,  // TypeScript recommended rules
      "no-console": "warn",
      "no-unused-vars": "warn"
    }
  },
  {
    files: ["*.html"],
    languageOptions: {
      parser: ngtemplate
    },
    plugins: {
      "@angular-eslint/template": ngeslint
    },
    rules: {
      ...ngeslint.configs.recommended.rules // Angular template linting rules
    }
  }
];
