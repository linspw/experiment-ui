/* eslint-disable no-param-reassign */
import type {App} from 'vue'

const clickOutsideDirective = {
  beforeMount: (el: any, binding: any) => {
    el.clickOutsideEvent = (event: any) => {
      if (!(el === event.target || el.contains(event.target))) {
        if (typeof binding.value === 'function') binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el: any) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

const ClickOutsidePlugin = {
  install(Vue: App) {
    Vue.directive('click-outside', clickOutsideDirective);
  },
};

export { ClickOutsidePlugin };
