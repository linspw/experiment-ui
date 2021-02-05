import { ADisplay } from '.';

export default {
  title: 'Design System/Atoms/ADisplay',
};

export const withText = () => ({
  components: { ADisplay },
  template: '<a-display>Hello Button</a-display>',
});

export const withWeight = () => ({
  render() {
    return (
      <div>
        <ADisplay weight="thin">With JSX</ADisplay>
        <p />
        <ADisplay weight="extra-light">With JSX</ADisplay>
        <p />
        <ADisplay weight="light">With JSX</ADisplay>
        <p />
        <ADisplay weight="regular">With JSX</ADisplay>
        <p />
        <ADisplay weight="medium">With JSX</ADisplay>
        <p />
        <ADisplay weight="semi-bold">With JSX</ADisplay>
        <p />
        <ADisplay weight="bold">With JSX</ADisplay>
        <p />
        <ADisplay weight="extra-bold">With JSX</ADisplay>
        <p />
        <ADisplay weight="black">With JSX</ADisplay>
      </div>
    );
  },
});

export const withItalic = () => ({
  render() {
    return (
      <div>
        <ADisplay italic weight="regular">With JSX</ADisplay>
        <p />
        <ADisplay italic weight="medium">With JSX</ADisplay>
        <p />
        <ADisplay italic weight="bold">With JSX</ADisplay>
      </div>
    );
  },
});

export const withColors = () => ({
  render() {
    return (
      <div>
        <ADisplay color="inherit">inherit</ADisplay>
        <p />
        <ADisplay color="primary">primary</ADisplay>
        <p />
        <ADisplay color="secondary">secondary</ADisplay>
        <p />
        <ADisplay color="tertiary">tertiary</ADisplay>
        <p />
        <ADisplay color="interactive">interactive</ADisplay>
        <p />
        <ADisplay color="grey">grey</ADisplay>
        <p />
        <ADisplay color="success">success</ADisplay>
        <p />
        <ADisplay color="danger">danger</ADisplay>
        <p />
        <ADisplay color="warn">warn</ADisplay>
        <p />
        <ADisplay color="info">info</ADisplay>
        <p />
        <ADisplay color="inverse">inverse</ADisplay>
      </div>
    );
  },
});

export const withSize = () => ({
  render() {
    return (
      <div>
        <ADisplay size="inherit">inherit</ADisplay>
        <p />
        <ADisplay size="extra-small">extra-small</ADisplay>
        <p />
        <ADisplay size="small">small</ADisplay>
        <p />
        <ADisplay size="medium">medium</ADisplay>
        <p />
        <ADisplay size="large">large</ADisplay>
        <p />
        <ADisplay size="extra-large">extra-large</ADisplay>
      </div>
    );
  },
});

export const withAlign = () => ({
  render() {
    return (
      <div>
        <ADisplay align="left" tag="h3">💯 😀 😎 👍 💯</ADisplay>
        <p />
        <ADisplay align="center" tag="h3">💯 😀 😎 👍 💯</ADisplay>
        <p />
        <ADisplay align="right" tag="h3">💯 😀 😎 👍 💯</ADisplay>
        <p />
        <ADisplay align="justify" tag="h3">Justificando o texto.</ADisplay>
      </div>
    );
  },
});
