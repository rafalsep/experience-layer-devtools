module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
    },
  ],
  rules: {
    'no-plusplus': 0,
    'no-await-in-loop': 0,
    'no-template-curly-in-string': 0,
    'react/prop-types': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'no-console': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unstable-nested-components': 0,
    'react/destructuring-assignment': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  globals: {
    chrome: true,
  },
};
