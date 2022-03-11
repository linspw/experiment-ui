import { app } from '@storybook/vue3';
import { CoreUIPlugin } from '@plugins/core-ui-plugin';
import { transformSource, tokenFiles } from './helper';
import '@styles/index.scss';

app.use(CoreUIPlugin);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
