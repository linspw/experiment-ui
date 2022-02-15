import { render, screen } from "@testing-library/vue";
import * as Library from "@root/dist/lib/core-ui.umd.js";

describe("Lib Test", () => {
  it("builded with correct objects", () => {
    expect(Library).toHaveProperty("CoreUI");
    expect(Library).toHaveProperty("CoreUIComponents");
    // const { html } = render(Library);
    // expect(html()).toMatchSnapshot();
  });

  describe("when builded", () => {
    it("attach plugin correctly", async () => {
      const warn = jest.spyOn(console, "warn");
      const error = jest.spyOn(console, "error");
      const root = document.createElement("div");
      root.setAttribute("data-app", "true");

      const exampleOfComponent = {
        template: `<h-button data-testid="example">Deu Certo</h-button>`,
      };

      const vueInstanceConfig = {
        global: {
          plugins: [Library.CoreUI],
        },
        container: document.body.appendChild(root),
      };
  
      const { html, getByTestId } = await render(
        exampleOfComponent,
        vueInstanceConfig,
      );

      expect(warn).not.toBeCalled();
      expect(error).not.toBeCalled();
      expect(html()).toMatchSnapshot();      
      // expect(window.getComputedStyle(getByTestId('example'))).toHaveStyle('background-color: blue')
    });
  });
});
