module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'vue/setup-compiler-macros': true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'plugin:storybook/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],
    'no-param-reassign': 'off',
    'max-len': ['error', {
      code: 140,
      tabWidth: 2,
      ignoreUrls: true,
    }],
  },
  ignorePatterns: ['**.test.js'],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
