import { render, screen, fireEvent } from '@testing-library/vue';
import * as Library from '@root/dist/lib/core-ui.umd';

describe('Lib Test', () => {
  it('builded with correct objects', () => {
    expect(Library).toHaveProperty('CoreUI');
    expect(Library).toHaveProperty('CoreUIComponents');
    // const { html } = render(Library);
    // expect(html()).toMatchSnapshot();
  });

  describe('when builded', () => {
    it('attach plugin correctly', async () => {
      const warn = jest.spyOn(console, 'warn');
      const error = jest.spyOn(console, 'error');
      const root = document.createElement('div');
      root.setAttribute('data-app', 'true');
      const handleClick = jest.fn();
      const exampleOfComponent = {
        template: '<h-button data-testid="example" @click="onClick">Event</h-button>',
        methods: {
          onClick: handleClick,
        },
      };

      const vueInstanceConfig = {
        global: {
          plugins: [Library.CoreUI],
        },
        container: document.body.appendChild(root),
      };

      const { html } = await render(
        exampleOfComponent,
        vueInstanceConfig,
      );

      expect(warn).not.toBeCalled();
      expect(error).not.toBeCalled();
      expect(html()).toMatchSnapshot();
      await fireEvent.click(screen.getByTestId('example'));
      expect(handleClick).toBeCalled();
      // expect(window.getComputedStyle(screen.getByTestId('example'))).toHaveProperty('background-color: blue');
    });
  });
});
