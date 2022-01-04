import { render, screen, fireEvent } from '@testing-library/vue';
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
        isRounded: false,
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it('render correctly with attrs', () => {
    const { html } = render(AButton, {
      slots: {
        default: 'With many Itens',
      },
      attrs: {
        id: 'my-first-component',
        'data-test-id': 'secondary',
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it('when click active event', async () => {
    const handleClick = jest.fn();
    render(AButton, {
      slots: {
        default: 'Event',
      },
      attrs: {
        onClick: handleClick,
      },
    });

    await fireEvent.click(screen.getByText('Event').closest('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
