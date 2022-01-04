module.exports = {
  verbose: true,
  globals: {
    'vue-jest': {
      babelConfig: '<rootDir>/babel.config.js',
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@plugins/(.*)$': '<rootDir>/src/plugins/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/config/tests/setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  testEnvironment: 'jsdom',
};
