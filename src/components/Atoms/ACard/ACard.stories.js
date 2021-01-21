import { action } from '@storybook/addon-actions';

import { ACard } from '.';

export default {
  title: 'ACard',
}

export const withText = () => ({
  components: { ACard },
  template: '<a-card icon="fas fa-user" @click="action">Hello Button</a-card>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    return <ACard elevation="low">With JSX</ACard>;
  }
})

export const withSomeEmoji = () => ({
  components: { ACard },
  template: '<a-card elevation="high">💯 😀 😎 👍 💯</a-card>'
})
