import { ALink } from '.';

export default {
  title: 'Design System/Atoms/ALink',
}

export const withText = () => ({
  components: { ALink },
  template: '<a-link>Hello Button</a-link>',
})

export const withWeight = () => ({
  render() {
    return (
      <div>
        <ALink weight="regular">With JSX</ALink>
        <p />
        <ALink weight="medium">With JSX</ALink>
        <p />
        <ALink weight="bold">With JSX</ALink>
      </div>
    );
  }
})
