import { ALogo } from '.';

export default {
  title: 'Design System/Atoms/ALogo',
};

export const withText = () => ({
  components: { ALogo },
  template: '<a-logo />',
});

export const withColors = () => ({
  render() {
    return (
      <div>
        <ALogo color="black" />
        <p />
        <ALogo color="white" />
        <p />
      </div>
    );
  },
});

export const withSize = () => ({
  render() {
    return (
      <div>
        <ALogo size="inherit" />
        <p />
        <ALogo size="extra-small" />
        <p />
        <ALogo size="small" />
        <p />
        <ALogo size="medium" />
        <p />
        <ALogo size="large" />
        <p />
        <ALogo size="extra-large" />
      </div>
    );
  },
});
