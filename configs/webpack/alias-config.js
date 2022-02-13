const path = require('path');

const baseUrl = path.join(__dirname, '..', '..');

exports.alias = {
  '@': path.resolve(baseUrl, 'src'),
  '@root': path.resolve(baseUrl),
  '@api': path.resolve(baseUrl, 'src/api'),
  '@styles': path.resolve(baseUrl, 'src/styles'),
  '@components': path.resolve(baseUrl, 'src/components'),
  '@layouts': path.resolve(baseUrl, 'src/layouts'),
  '@modules': path.resolve(baseUrl, 'src/modules'),
  '@pages': path.resolve(baseUrl, 'src/pages'),
  '@plugins': path.resolve(baseUrl, 'src/plugins'),
  '@router': path.resolve(baseUrl, 'src/router'),
  '@services': path.resolve(baseUrl, 'src/services'),
  '@settings': path.resolve(baseUrl, 'config', 'settings'),
  '@utils': path.resolve(baseUrl, 'src/utils'),
};
