module.exports = {
  verbose: true,
  preset: '@vue/cli-plugin-unit-jest',
  globals: {
    'vue-jest': {
      babelConfig: '<rootDir>/babel.config.js',
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.esm.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
};
