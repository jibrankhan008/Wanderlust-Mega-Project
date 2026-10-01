// module.exports = {
//	  root: true,
//	  env: { browser: true, es2020: true },
//	  extends: [
//		    'eslint:recommended',
//		    'plugin:@typescript-eslint/recommended-type-checked',
//		    'plugin:react-hooks/recommended',
//		    'plugin:@typescript-eslint/stylistic-type-checked',
//		    'prettier',
//		  ],
//	  ignorePatterns: ['dist', '.eslintrc.cjs', 'jest.config.ts'],
//	  parserOptions: {
//		  project: ['./tsconfig.json', './tsconfig.node.json'],
//		  },
//	  plugins: ['react-refresh'],
//	  rules: {
//		    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//		  },
//	};
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'jest.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
  '@typescript-eslint/no-explicit-any': 'off',
  'prefer-const': 'off',
  'react-hooks/rules-of-hooks': 'off',
  'react-hooks/exhaustive-deps': 'off',
  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
