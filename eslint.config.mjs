import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import markdown from "@eslint/markdown";

const compat = new FlatCompat({
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/site/**", "**/.cache", "**/.venv"],
    }, ...compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/prettier"
    ),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
            "simple-import-sort": simpleImportSort,
        },
        languageOptions: {
            parser: tsParser,
            sourceType: "module",
            ecmaVersion: "latest",
            parserOptions: {
                project: [
                    "./tsconfig.json",
                    "./packages/*/tsconfig.json"
                ]
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": 0,
            "@typescript-eslint/explicit-module-bountary-types": 0,
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            exactOptionalPropertyTypes: 0,
        },
        files: ["**/*.ts", "**/*.tsx"],
    },
    ...markdown.configs.processor,
    ...markdown.configs.recommended,
    {
        files: ["**/*.md/*.ts", "**/*.md/*.tsx", "**/*.md/*.js", "**/*.md/*.jsx", "**/*.md/*.json"],
        languageOptions: {
            parserOptions: {
                project: null,
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-unused-expressions": "off",
        },
    }
];
