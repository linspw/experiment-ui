import { app } from "@storybook/vue3";
import { BuserPartnersUIPlugin } from "@plugins/buser-partners-ui-plugin";
import Maska from "maska";
import "@assets/styles/index.scss";
import { transformSource, tokenFiles } from "./helper";

app.use(BuserPartnersUIPlugin).use(Maska);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    transformSource,
  },
  designToken: {
    files: tokenFiles,
  },
};
