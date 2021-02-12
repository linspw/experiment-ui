import { ATooltipDirective } from '@/components/Atoms/ATooltip';

const ATooltipPlugin = {
  install(Vue) {
    Vue.directive('tooltip', ATooltipDirective);
  },
};

export { ATooltipPlugin };
