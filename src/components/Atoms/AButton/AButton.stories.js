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
    return (
      <div>
        <AButton icon="fas fa-user" icon-color="success">With JSX</AButton>
        <p />
        <AButton icon="fas fa-user" icon-color="warn">With JSX</AButton>
        <p />
        <AButton icon="fas fa-user" icon-color="danger" behavior="block">With JSX</AButton>
      </div>
    );
  }
})

export const isLoading = () => ({
  render() {
    return <AButton icon="fas fa-user" isLoading={true}>With JSX</AButton>;
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
