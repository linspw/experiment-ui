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
    Vue.component('h-avatar', HAvatar);
    Vue.component('h-badge', HBadge);
    Vue.component('h-button', HButton);
    Vue.component('h-card', HCard);
    Vue.component('h-divider', HDivider);
    Vue.component('h-grid-container', HGridContainer);
    Vue.component('h-grid-item', HGridItem);
    Vue.component('h-icon', HIcon);
    Vue.component('h-input', HInput);
    Vue.component('h-select', HSelect);
    Vue.component('h-image', HImage);
    Vue.component('h-slider', HSlider);
    Vue.component('h-tooltip', HTooltip);
    Vue.component('h-text', HText);
    Vue.component('h-suspense', HSuspense);
  },
  installMolecules(Vue) {
    Vue.component('h-breadcrumb', HBreadcrumb);
    Vue.component('h-toast', HToast);
    Vue.component('h-input-field', HInputField);
    Vue.component('h-modal', HModal);
    Vue.component('h-dropdown', HDropdown);
    Vue.component('h-stepper', HStepper);
  },
};

export { CoreUIPlugin };
