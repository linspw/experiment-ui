import { render, screen } from '@testing-library/vue';
import HAvatar from '../avatar.vue';

describe('HAvatar', () => {
  it('render correctly with default props', () => {
    const { html } = render(HAvatar);
    expect(html()).toMatchSnapshot();
  });

  it('render correctly with gender', async () => {
    render(HAvatar, {
      props: {
        gender: 'female',
      },
    });
    expect(screen.getByRole('img').hasAttribute('src')).toBe(true);
    expect(screen.getByRole('img').getAttribute('src')).toBe('https://hyone-backend-homolog.herokuapp.com/public/images/undraw/avatar_female.svg');
  });

  it('render correctly with src', async () => {
    render(HAvatar, {
      props: {
        src: 'www.my-custom-url.com',
      },
    });
    expect(screen.getByRole('img').hasAttribute('src')).toBe(true);
    expect(screen.getByRole('img').getAttribute('src')).toBe('www.my-custom-url.com');
  });

  it('render correctly with type', async () => {
    render(HAvatar, {
      props: {
        type: 'png',
      },
    });
    expect(screen.getByRole('img').hasAttribute('src')).toBe(true);
    expect(screen.getByRole('img').getAttribute('src')).toBe('https://hyone-backend-homolog.herokuapp.com/public/images/undraw/avatar_male.png');
  });

  it('render correctly with size', async () => {
    render(HAvatar, {
      props: {
        size: 'medium',
      },
    });
    expect(screen.getByRole('figure').classList.contains('h-avatar--size-medium')).toBe(true);
  });

  it('render correctly with behavior', async () => {
    render(HAvatar, {
      props: {
        behavior: 'square',
      },
    });
    expect(screen.getByRole('figure').classList.contains('h-avatar--behavior-square')).toBe(true);
  });

  it('render correctly with caption', async () => {
    const { html } = render(HAvatar, {
      props: {
        caption: 'My caption',
      },
    });
    expect(html()).toMatchSnapshot();
    expect(screen.getByText(/my caption/i).textContent.trim()).toBe('My caption');
  });
});
