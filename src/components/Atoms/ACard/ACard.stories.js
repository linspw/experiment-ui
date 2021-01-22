import { ACard } from '.';

export default {
  title: 'Design System/Atoms/ACard',
}

export const withText = () => ({
  components: { ACard },
  template: '<a-card icon="fas fa-user">Hello Button</a-card>',
})

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
  }
})

export const withVariantInfo = () => ({
  render() {
    return (
      <div>
        <ACard elevation="low">With JSX</ACard>
        <p />
        <ACard elevation="low" variant="success">With JSX</ACard>
        <p />
        <ACard elevation="low" variant="info">With JSX</ACard>
        <p />
        <ACard elevation="low" variant="danger">With JSX</ACard>
        <p />
        <ACard elevation="low" variant="warn">With JSX</ACard>
        <p />
        <ACard elevation="low" variant="dark">With JSX</ACard>
      </div>
    );
  }
})