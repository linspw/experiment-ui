import { AButton } from '.';

export default {
  title: 'Design System/Atoms/AButton',
}

export const withText = () => ({
  components: { AButton },
  template: '<a-button icon="fas fa-user">Hello Button</a-button>',
})

export const variant = () => ({
  render() {
    return (
      <div>
        <AButton variant="primary">With JSX</AButton>
        <p />
        <AButton variant="secondary">With JSX</AButton>
        <p />
        <AButton variant="tertiary">With JSX</AButton>
        <p />
        <AButton variant="quaternary">With JSX</AButton>
      </div>
    );
  }
})

export const withIcon = () => ({
  render() {
    return <AButton icon="fas fa-user">With JSX</AButton>;
  }
})

export const withBehavior = () => ({
  render() {
    return (
      <div>
        <AButton>💯 😀 😎 👍 💯</AButton>
        <p />
        <AButton behavior="block">💯 😀 😎 👍 💯</AButton>
      </div>
    );
  }
})
