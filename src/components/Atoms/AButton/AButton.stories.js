import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { AButton } from '.';

export default {
  title: 'AButton',
}

export const withText = () => ({
  components: { AButton },
  template: '<a-button icon="fas fa-user" @click="action">Hello Button</a-button>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    return <AButton onClick={linkTo('AButton', 'With Some Emoji')}>With JSX</AButton>;
  }
})

export const withSomeEmoji = () => ({
  components: { AButton },
  template: '<a-button icon="fas fa-user" behavior="block">💯 😀 😎 👍 💯</a-button>'
})
