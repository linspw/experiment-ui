// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!sass-loader!../../src/styles/utils/index.scss';
import Vue from 'vue';
import { AToastPlugin } from '@/plugins/ToastPlugin';

Vue.use(AToastPlugin);

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: ['Aurora-Vue'],
      locales: '',
    },
  },
};
