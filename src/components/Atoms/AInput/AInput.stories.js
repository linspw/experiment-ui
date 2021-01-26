import { AInput } from '.';

export default {
  title: 'Design System/Atoms/AInput',
};

export const withText = () => ({
  components: { AInput },
  template: '<a-input icon="fas fa-search">Hello input</a-input>',
});

export const types = () => ({
  render() {
    return (
      <div>
        <AInput type="text" placeholder="text"/>
        <p />
        <AInput type="password" placeholder="password"/>
        <p />
        <AInput type="email" placeholder="email"/>
        <p />
      </div>
    );
  },
});

export const placeholder = () => ({
  render() {
    return (
      <div>
        <AInput placeholder="default">default</AInput>
        <p />
        <AInput placeholder="block">block</AInput>
        <p />
      </div>
    );
  },
});

export const behavior = () => ({
  render() {
    return (
      <div>
        <AInput behavior="default" placeholder="default" />
        <p />
        <AInput behavior="block" placeholder="block" />
        <p />
      </div>
    );
  },
});

export const icon = () => ({
  render() {
    return (
      <div>
        <AInput icon="fas fa-user" placeholder="default" />
      </div>
    );
  },
});
