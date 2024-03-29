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
  HRadio,
  HMenu,
  HMenuItem,
  HTextField,
} from "@/components/atoms";
import type { App } from "vue";

import {
  HDropdown,
  HInputField,
  HModal,
  HToast,
  HStepper,
  HForm,
  HSteps,
  HStep,
  HTabs,
  HTab,
  HBreadcrumb,
} from "@components/molecules";

import { ClickOutsidePlugin } from "./click-outside-plugin";

// eslint-disable-next-line @typescript-eslint/naming-convention
const ExperimentUIPlugin = {
  install(Vue: App) {
    this.installAtoms(Vue);
    this.installMolecules(Vue);
    this.installPlugins(Vue);
  },
  installAtoms(Vue: App) {
    Vue.component("HAvatar", HAvatar);
    Vue.component("HBadge", HBadge);
    Vue.component("HButton", HButton);
    Vue.component("HCard", HCard);
    Vue.component("HDivider", HDivider);
    Vue.component("HGridContainer", HGridContainer);
    Vue.component("HGridItem", HGridItem);
    Vue.component("HRow", HGridContainer);
    Vue.component("HColumn", HGridItem);
    Vue.component("HIcon", HIcon);
    Vue.component("HInput", HInput);
    Vue.component("HSelect", HSelect);
    Vue.component("HImage", HImage);
    Vue.component("HSlider", HSlider);
    Vue.component("HTooltip", HTooltip);
    Vue.component("HText", HText);
    Vue.component("HSuspense", HSuspense);
    Vue.component("HLoading", HLoading);
    Vue.component("HCheckbox", HCheckbox);
    Vue.component("HRadio", HRadio);
    Vue.component("HMenu", HMenu);
    Vue.component("HMenuItem", HMenuItem);
    Vue.component("HTextField", HTextField);
  },
  installMolecules(Vue: App) {
    Vue.component("HBreadcrumb", HBreadcrumb);
    Vue.component("HToast", HToast);
    Vue.component("HInputField", HInputField);
    Vue.component("HModal", HModal);
    Vue.component("HDropdown", HDropdown);
    Vue.component("HStepper", HStepper);
    Vue.component("HForm", HForm);
    Vue.component("HSteps", HSteps);
    Vue.component("HStep", HStep);
    Vue.component("HTabs", HTabs);
    Vue.component("HTab", HTab);
  },
  installPlugins(Vue: App) {
    Vue.use(ClickOutsidePlugin);
  },
};

export { ExperimentUIPlugin };
