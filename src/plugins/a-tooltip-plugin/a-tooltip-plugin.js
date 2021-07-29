import { ATooltipDirective } from '@/components/atoms/a-tooltip';

const ATooltipPlugin = {
  install(Vue) {
    Vue.directive('tooltip', ATooltipDirective);
  },
};

export { ATooltipPlugin };
