import { render, fireEvent } from '@testing-library/vue';
import AButton from '../a-button.vue';

describe('AButton', () => {
  it('render correctly with default props', () => {
    const { html } = render(AButton, {
      slots: {
        default: 'My first test',
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it('render correctly with different props', () => {
    const { html } = render(AButton, {
      slots: {
        default: 'With many Itens',
      },
      props: {
        behavior: 'block',
        variant: 'secondary',
        size: 'small',
        icon: 'fas fa-circle',
        iconColor: 'primary',
        isRounded: true,
      },
    });
    expect(html()).toMatchSnapshot();
    //    expect(getByText('My first button').closest('button')).toHaveAttribute('disabled');
  });
});
