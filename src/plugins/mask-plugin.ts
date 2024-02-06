import { vMaska } from 'maska';
import {App} from 'vue'

const MaskPlugin = {
  install(Vue: App) {
    Vue.directive('mask', vMaska);
  },
};

export { MaskPlugin };
