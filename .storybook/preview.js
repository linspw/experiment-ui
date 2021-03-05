// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!sass-loader!../src/styles/utils/index.scss';
import Vue from 'vue';
import { AToastPlugin } from '../src/plugins';
import { ATooltipPlugin } from '../src/plugins';

Vue.use(AToastPlugin);
Vue.use(ATooltipPlugin);

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: ['Aurora-Vue'],
      locales: '',
    },
  },
};
