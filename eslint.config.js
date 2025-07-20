import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  // Base JavaScript rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  // Prettier integration
  prettierConfig,

  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Prettier as an ESLint rule
      'prettier/prettier': 'error',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',

      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },

  {
    // Configuration files
    files: ['*.config.{js,ts,mjs}', 'vite.config.ts', 'postcss.config.js'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  {
    // Allow console in development files
    files: ['resources/assets/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },

  {
    // Ignore patterns
    ignores: [
      'node_modules/',
      'vendor/',
      '_media/',
      '_site/',
      'dist/',
      '*.min.js',
      '*.bundle.js',
    ],
  }
)
