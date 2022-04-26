import { maska } from 'maska';

const MaskPlugin = {
  install(Vue) {
    Vue.directive('mask', maska);
  },
};

export { MaskPlugin };
