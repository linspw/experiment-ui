import {
  HAvatar,
  HButton,
  HCard,
  HDivider,
  HGridContainer,
  HGridItem,
  HIcon,
  HImage,
  HInput,
  HSelect,
  HSlider,
  HTooltip,
  HBadge,
  HText,
  HSuspense,
  HLoading,
  HCheckbox,
} from '@components/atoms';

import {
  HBreadcrumb,
  HDropdown,
  HInputField,
  HModal,
  HToast,
  HStepper,
} from '@components/molecules';

const CoreUIPlugin = {
  install(Vue) {
    this.installAtoms(Vue);
    this.installMolecules(Vue);
  },
  installAtoms(Vue) {
    Vue.component('HAvatar', HAvatar);
    Vue.component('HBadge', HBadge);
    Vue.component('HButton', HButton);
    Vue.component('HCard', HCard);
    Vue.component('HDivider', HDivider);
    Vue.component('HGridContainer', HGridContainer);
    Vue.component('HGridItem', HGridItem);
    Vue.component('HIcon', HIcon);
    Vue.component('HInput', HInput);
    Vue.component('HSelect', HSelect);
    Vue.component('HImage', HImage);
    Vue.component('HSlider', HSlider);
    Vue.component('HTooltip', HTooltip);
    Vue.component('HText', HText);
    Vue.component('HSuspense', HSuspense);
    Vue.component('HLoading', HLoading);
    Vue.component('HCheckbox', HCheckbox);
  },
  installMolecules(Vue) {
    Vue.component('HBreadcrumb', HBreadcrumb);
    Vue.component('HToast', HToast);
    Vue.component('HInputField', HInputField);
    Vue.component('HModal', HModal);
    Vue.component('HDropdown', HDropdown);
    Vue.component('HStepper', HStepper);
  },
};

export { CoreUIPlugin };
