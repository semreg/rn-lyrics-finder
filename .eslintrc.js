module.exports = {
  env: {
    es2021: true
  },
  extends: ['@react-native-community', 'prettier', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'import'],
  rules: {
    camelcase: 0,
    'no-console': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'internal',
          'builtin',
          ['sibling', 'parent'],
          'index'
        ],
        'newlines-between': 'always'
      }
    ]
    // 'max-len': ['error', { code: 60, ignoreComments: true }]
  }
}
