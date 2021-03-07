// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!sass-loader!../src/styles/_index.scss';
import Vue from 'vue';
import { AToastPlugin, ATooltipPlugin, VeeValidatePlugin } from '../src/plugins';

Vue.use(AToastPlugin);
Vue.use(ATooltipPlugin);
Vue.use(VeeValidatePlugin);

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: ['Aurora-Vue'],
      locales: '',
    },
  },
};
