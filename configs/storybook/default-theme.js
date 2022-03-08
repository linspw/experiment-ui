import { create } from '@storybook/theming';
import Logo from './logo.svg';

const DefaultTheme = create({
  // base: 'dark',
  brandTitle: 'Core UI - Storybook',
  brandImage: Logo,

  // appBg: 'black',
  // appContentBg: 'black',
  // barTextColor: 'white',
});

export { DefaultTheme };
