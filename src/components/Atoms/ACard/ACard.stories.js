import { ACard } from '.';

export default {
  title: 'Design System/Atoms/ACard',
};

export const withText = () => ({
  components: { ACard },
  template: '<a-card icon="fas fa-user">Hello Button</a-card>',
});

export const withElevation = () => ({
  render() {
    return (
      <div>
        <ACard elevation="low">With JSX</ACard>
        <p />
        <ACard>With JSX</ACard>
        <p />
        <ACard elevation="high">With JSX</ACard>
      </div>
    );
  },
});

export const withVariantInfo = () => ({
  render() {
    return (
      <div>
        <ACard elevation="low">With JSX</ACard>
        <p />
        <ACard elevation="low" variant="success">success</ACard>
        <p />
        <ACard elevation="low" variant="info">info</ACard>
        <p />
        <ACard elevation="low" variant="danger">danger</ACard>
        <p />
        <ACard elevation="low" variant="warn">warn</ACard>
        <p />
        <ACard elevation="low" variant="interactive">interactive</ACard>
        <p />
        <ACard elevation="low" variant="primary">primary</ACard>
        <p />
        <ACard elevation="low" variant="secondary">secondary</ACard>
        <p />
        <ACard elevation="low" variant="tertiary">tertiary</ACard>
      </div>
    );
  },
});
