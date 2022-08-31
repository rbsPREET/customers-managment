module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    },
    "react": {
      "version": "detect"
    }
  },
  plugins: [
    "react", "react-hooks", "@typescript-eslint", "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "camelcase": "error",
    "spaced-comment": "error",
    "quotes": ["error", "single"],
    "no-duplicate-imports": "error",
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [
      2,
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [
      2,
      'tag-aligned',
    ],
  }
}
