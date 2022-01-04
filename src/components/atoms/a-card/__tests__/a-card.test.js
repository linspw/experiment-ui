import { render } from '@testing-library/vue';
import ACard from '../a-card.vue';

describe('ACard', () => {
  it('render correctly with default props', () => {
    const { html } = render(ACard, {
      slots: {
        default: 'My first test',
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it('render correctly with variant', () => {
    const { container } = render(ACard, {
      props: {
        variant: 'primary',
      },
      slots: {
        default: 'My second test',
      },
    });
    expect(container.firstChild.classList.contains('a-card--variant-primary')).toBe(true);
  });

  it('render correctly with elevation', () => {
    const { container } = render(ACard, {
      props: {
        elevation: 'high',
      },
      slots: {
        default: 'My second test',
      },
    });
    expect(container.firstChild.classList.contains('a-card--elevation-high')).toBe(true);
  });

  it('render correctly with elevation', () => {
    const { container } = render(ACard, {
      props: {
        tag: 'section',
      },
      slots: {
        default: 'My second test',
      },
    });
    expect(container.firstChild.tagName).toBe('SECTION');
  });
});
