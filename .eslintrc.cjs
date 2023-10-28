module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', 'tsconfig.vite.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
    'react/prefer-stateless-function': 'off',
  },
};
