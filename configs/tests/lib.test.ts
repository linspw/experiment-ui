import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
// eslint-disable-next-line import/extensions
import * as Library from "../../dist/lib/experiment-ui.umd.js";

describe("Lib Test", () => {
  it("builded with correct objects", () => {
    expect(Library).toHaveProperty("ExperimentUI");
    expect(Library).toHaveProperty("ExperimentUIComponents");
    // const { html } = render(Library);
    // expect(html()).toMatchSnapshot();
  });

  describe("when builded", () => {
    it("attach plugin correctly", async () => {
      const warn = vi.spyOn(console, "warn");
      const error = vi.spyOn(console, "error");
      const root = document.createElement("div");
      root.setAttribute("data-app", "true");
      const handleClick = vi.fn();
      const exampleOfComponent = {
        template:
          '<h-button data-testid="example" @click="onClick">Event</h-button>',
        methods: {
          onClick: handleClick,
        },
      };

      const vueInstanceConfig = {
        global: {
          plugins: [Library.ExperimentUI],
        },
        container: document.body.appendChild(root),
      };

      const { html } = render(exampleOfComponent, vueInstanceConfig);

      expect(warn).not.toBeCalled();
      expect(error).not.toBeCalled();
      expect(html()).toMatchSnapshot();
      await fireEvent.click(screen.getByTestId("example"));
      expect(handleClick).toBeCalled();
      // expect(window.getComputedStyle(screen.getByTestId('example'))).toHaveProperty('background-color: blue');
    });
  });
});
