import { AText } from '.';

export default {
  title: 'Design System/Atoms/AText',
};

export const withText = () => ({
  components: { AText },
  template: '<a-text>Hello Button</a-text>',
});

export const withWeight = () => ({
  render() {
    return (
      <div>
        <AText weight="regular">With JSX</AText>
        <p />
        <AText weight="medium">With JSX</AText>
        <p />
        <AText weight="bold">With JSX</AText>
      </div>
    );
  },
});

export const withItalic = () => ({
  render() {
    return (
      <div>
        <AText italic weight="regular">With JSX</AText>
        <p />
        <AText italic weight="medium">With JSX</AText>
        <p />
        <AText italic weight="bold">With JSX</AText>
      </div>
    );
  },
});

export const withColors = () => ({
  render() {
    return (
      <div>
        <AText color="inherit">inherit</AText>
        <p />
        <AText color="primary">primary</AText>
        <p />
        <AText color="secondary">secondary</AText>
        <p />
        <AText color="tertiary">tertiary</AText>
        <p />
        <AText color="interactive">interactive</AText>
        <p />
        <AText color="grey">grey</AText>
        <p />
        <AText color="success">success</AText>
        <p />
        <AText color="danger">danger</AText>
        <p />
        <AText color="warn">warn</AText>
        <p />
        <AText color="info">info</AText>
        <p />
        <AText color="inverse">inverse</AText>
      </div>
    );
  },
});

export const withSize = () => ({
  render() {
    return (
      <div>
        <AText size="inherit">inherit</AText>
        <p />
        <AText size="extra-small">extra-small</AText>
        <p />
        <AText size="small">small</AText>
        <p />
        <AText size="medium">medium</AText>
        <p />
        <AText size="large">large</AText>
        <p />
        <AText size="extra-large">extra-large</AText>
      </div>
    );
  },
});

export const withAlign = () => ({
  render() {
    return (
      <div>
        <AText align="left">💯 😀 😎 👍 💯</AText>
        <p />
        <AText align="center">💯 😀 😎 👍 💯</AText>
        <p />
        <AText align="right">💯 😀 😎 👍 💯</AText>
        <p />
        <AText align="justify">Justificando o texto.</AText>
      </div>
    );
  },
});
