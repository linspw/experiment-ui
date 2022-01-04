module.exports = {
  verbose: true,
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
    '^@/(.*)$': '<rootDir>/src/$1',
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
  testEnvironment: 'jest-environment-jsdom-fifteen',
};
