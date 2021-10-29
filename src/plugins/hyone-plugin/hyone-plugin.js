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
} from '@/components/atoms';

import {
  ABreadcrumb,
  ADropdown,
  AInputField,
  AModal,
  AToast,
} from '@/components/molecules';

const HyONEPlugin = {
  install(Vue) {
    this.installAtoms(Vue);
    this.installMolecules(Vue);
  },
  installAtoms(Vue) {
    Vue.component('a-avatar', AAvatar);
    Vue.component('a-badge', ABadge);
    Vue.component('a-button', AButton);
    Vue.component('a-card', ACard);
    Vue.component('a-display', ADisplay);
    Vue.component('a-divider', ADivider);
    Vue.component('a-grid-container', AGridContainer);
    Vue.component('a-grid-item', AGridItem);
    Vue.component('a-icon', AIcon);
    Vue.component('a-input', AInput);
    Vue.component('a-link', ALink);
    Vue.component('a-logo', ALogo);
    Vue.component('a-select', ASelect);
    Vue.component('a-text', AText);
    Vue.component('a-image', AImage);
    Vue.component('a-slider', ASlider);
    Vue.component('a-title', ATitle);
    Vue.component('a-tooltip', ATooltip);
  },
  installMolecules(Vue) {
    Vue.component('a-breadcrumb', ABreadcrumb);
    Vue.component('a-toast', AToast);
    Vue.component('a-input-field', AInputField);
    Vue.component('a-modal', AModal);
    Vue.component('a-dropdown', ADropdown);
  },
};

export { HyONEPlugin };
