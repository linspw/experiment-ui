import { ATitle } from '.';

export default {
  title: 'Design System/Atoms/ATitle',
}

export const withText = () => ({
  components: { ATitle },
  template: '<a-title>Hello Button</a-title>',
})

export const withWeight = () => ({
  render() {
    return (
      <div>
        <ATitle weight="regular">With JSX</ATitle>
        <p />
        <ATitle weight="medium">With JSX</ATitle>
        <p />
        <ATitle weight="bold">With JSX</ATitle>
      </div>
    );
  }
})

export const withColors = () => ({
  render() {
    return (
      <div>
        <ATitle color="inherit">inherit</ATitle>
        <p />
        <ATitle color="primary">primary</ATitle>
        <p />
        <ATitle color="secundary">secundary</ATitle>
        <p />
        <ATitle color="tertiary">tertiary</ATitle>
        <p />
        <ATitle color="interactive">interactive</ATitle>
        <p />
        <ATitle color="inverse">inverse</ATitle>
        <p />
        <ATitle color="grey">grey</ATitle>
      </div>
    );
  }
})

export const withSize = () => ({
  render() {
    return (
      <div>
        <ATitle size="inherit">inherit</ATitle>
        <p />
        <ATitle size="extra-small">extra-small</ATitle>
        <p />
        <ATitle size="small">small</ATitle>
        <p />
        <ATitle size="medium">medium</ATitle>
        <p />
        <ATitle size="large">large</ATitle>
        <p />
        <ATitle size="extra-large">extra-large</ATitle>
      </div>
    );
  }
})

export const withAlign = () => ({
  render() {
    return (
      <div>
        <ATitle align="left" tag="h3">💯 😀 😎 👍 💯</ATitle>
        <p />
        <ATitle align="center" tag="h3">💯 😀 😎 👍 💯</ATitle>
        <p />
        <ATitle align="right" tag="h3">💯 😀 😎 👍 💯</ATitle>
        <p />
        <ATitle align="justify" tag="h3">Justificando o texto.</ATitle>
      </div>
    );
  }
})
