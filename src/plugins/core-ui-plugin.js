import {
  AAvatar,
  AButton,
  ACard,
  ADisplay,
  ADivider,
  AGridContainer,
  AGridItem,
  AIcon,
  AImage,
  AInput,
  ALink,
  ALogo,
  ASelect,
  ASlider,
  AText,
  ATitle,
  ATooltip,
  ABadge,
} from '@components/atoms';

import {
  ABreadcrumb,
  ADropdown,
  AInputField,
  AModal,
  AToast,
} from '@components/molecules';

import '@styles/_index.scss';

const CoreUIPlugin = {
  install(Vue) {
    this.installAtoms(Vue);
    this.installMolecules(Vue);
  },
  installAtoms(Vue) {
    Vue.component('h-avatar', AAvatar);
    Vue.component('h-badge', ABadge);
    Vue.component('h-button', AButton);
    Vue.component('h-card', ACard);
    Vue.component('h-display', ADisplay);
    Vue.component('h-divider', ADivider);
    Vue.component('h-grid-container', AGridContainer);
    Vue.component('h-grid-item', AGridItem);
    Vue.component('h-icon', AIcon);
    Vue.component('h-input', AInput);
    Vue.component('h-link', ALink);
    Vue.component('h-logo', ALogo);
    Vue.component('h-select', ASelect);
    Vue.component('h-text', AText);
    Vue.component('h-image', AImage);
    Vue.component('h-slider', ASlider);
    Vue.component('h-title', ATitle);
    Vue.component('h-tooltip', ATooltip);
  },
  installMolecules(Vue) {
    Vue.component('h-breadcrumb', ABreadcrumb);
    Vue.component('h-toast', AToast);
    Vue.component('h-input-field', AInputField);
    Vue.component('h-modal', AModal);
    Vue.component('h-dropdown', ADropdown);
  },
};

export { CoreUIPlugin };
