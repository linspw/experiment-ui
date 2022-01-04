import { render } from '@testing-library/vue';
import HCard from '../card.vue';

describe('HCard', () => {
  it('render correctly with default props', () => {
    const { html } = render(HCard, {
      slots: {
        default: 'My first test',
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it('render correctly with variant', () => {
    const { container } = render(HCard, {
      props: {
        variant: 'primary',
      },
      slots: {
        default: 'My second test',
      },
    });
    expect(container.firstChild.classList.contains('h-card--variant-primary')).toBe(true);
  });

  it('render correctly with elevation', () => {
    const { container } = render(HCard, {
      props: {
        elevation: 'high',
      },
      slots: {
        default: 'My second test',
      },
    });
    expect(container.firstChild.classList.contains('h-card--elevation-high')).toBe(true);
  });

  it('render correctly with elevation', () => {
    const { container } = render(HCard, {
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
