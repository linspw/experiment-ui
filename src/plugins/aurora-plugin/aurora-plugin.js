import {
  AAvatar,
  ABreadcrumb,
  AButton,
  ACard,
  ADisplay,
  ADivider,
  AGridContainer,
  AGridItem,
  AIcon,
  AImage,
  AInput,
  AInputField,
  ALink,
  ALogo,
  ASelect,
  ASlider,
  AText,
  ATitle,
  AToastPlugin,
  ATooltip,
  ATooltipPlugin,
} from '@/export';

const AuroraPlugin = {
  install(Vue) {
    Vue.component('a-avatar', AAvatar);
    Vue.component('a-breadcrumb', ABreadcrumb);
    Vue.component('a-button', AButton);
    Vue.component('a-card', ACard);
    Vue.component('a-display', ADisplay);
    Vue.component('a-divider', ADivider);
    Vue.component('a-grid-container', AGridContainer);
    Vue.component('a-grid-item', AGridItem);
    Vue.component('a-icon', AIcon);
    Vue.component('a-input', AInput);
    Vue.component('a-inputField', AInputField);
    Vue.component('a-link', ALink);
    Vue.component('a-logo', ALogo);
    Vue.component('a-select', ASelect);
    Vue.component('a-text', AText);
    Vue.component('a-title', AImage);
    Vue.component('a-title', ASlider);
    Vue.component('a-title', ATitle);
    Vue.component('a-title', ATooltip);

    Vue.use(AToastPlugin);
    Vue.use(ATooltipPlugin);
  },
};

export { AuroraPlugin };
