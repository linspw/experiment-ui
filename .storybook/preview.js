// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!sass-loader!../src/styles/_index.scss';
import Vue from 'vue';
import { AToastPlugin, ATooltipPlugin } from '../src/plugins';

Vue.use(AToastPlugin);
Vue.use(ATooltipPlugin);

const tokenContext = require.context(
  '!!raw-loader!../src',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: ['Aurora-Vue'],
      locales: '',
    },
  },
  designToken: {
    files: tokenFiles,
  }
};
