import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: { globals: globals.browser },
  },
  tsEslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tsEslint.parser } },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended'],
  },
  eslintConfigPrettier,
]);
