import { AButton } from '.';

export default {
  title: 'Design System/Atoms/AButton',
};

export const withText = () => ({
  components: { AButton },
  template: '<a-button icon="fas fa-user">Hello Button</a-button>',
});

export const variant = () => ({
  render() {
    return (
      <div>
        <AButton variant="primary">primary</AButton>
        <p />
        <AButton variant="secondary">secondary</AButton>
        <p />
        <AButton variant="tertiary">tertiary</AButton>
        <p />
        <AButton variant="quaternary">quaternary</AButton>
        <p />
        <AButton variant="quintenary">quintenary</AButton>
      </div>
    );
  },
});

export const withSize = () => ({
  render() {
    return (
      <div>
        <AButton size="medium">With JSX</AButton>
      </div>
    );
  },
});

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
  },
});

export const isRounded = () => ({
  render() {
    return <AButton icon="fas fa-user" isRounded={true}>With JSX</AButton>;
  },
});

export const isLoading = () => ({
  render() {
    return <AButton icon="fas fa-user" isLoading={true}>With JSX</AButton>;
  },
});

export const onlyIcon = () => ({
  render() {
    return <AButton icon="fas fa-user" />;
  },
});

export const withBehavior = () => ({
  render() {
    return (
      <div>
        <AButton>💯 😀 😎 👍 💯</AButton>
        <p />
        <AButton behavior="block">💯 😀 😎 👍 💯</AButton>
      </div>
    );
  },
});
