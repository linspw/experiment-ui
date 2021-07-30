import { ATooltipDirective } from './a-tooltip-directive';

const ATooltipPlugin = {
  install(Vue) {
    Vue.directive('tooltip', ATooltipDirective);
  },
};

export { ATooltipPlugin };
