/* eslint-disable no-param-reassign */

const clickOutsideDirective = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        if (typeof binding.value === 'function') binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

const ClickOutsidePlugin = {
  install(Vue) {
    Vue.directive('click-outside', clickOutsideDirective);
  },
};

export { ClickOutsidePlugin };
