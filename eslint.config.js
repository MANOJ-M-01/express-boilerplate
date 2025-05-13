const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const eslintConfigPrettier = require('eslint-config-prettier/flat');
const path = require('path');

/** @type { import("eslint").Linter.Config[] } */
module.exports = tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        NodeJS: 'readonly',
      },
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve('./tsconfig.json'),
        // tsconfigRootDir: path.resolve('.'),
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked[1].rules,
      // 'no-console': 'warn',
      'no-console': 'off',
      'no-unused-vars': 'off',
      // '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script',
    },
    rules: {},
  },
  eslintConfigPrettier
);
