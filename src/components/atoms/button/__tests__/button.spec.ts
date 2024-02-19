/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
import HButton from "../button.vue";

describe("HButton", () => {
  it("render correctly with default props", () => {
    const { html } = render(HButton, {
      slots: {
        default: "My first test",
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it("render correctly with different props", () => {
    const { html } = render(HButton, {
      slots: {
        default: "With many Itens",
      },
      props: {
        behavior: "block",
        color: "secondary",
        size: "small",
        iconLeft: "fas fa-circle",
        iconColor: "primary",
        isRounded: false,
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it("render correctly with attrs", () => {
    const { html } = render(HButton, {
      slots: {
        default: "With many Itens",
      },
      attrs: {
        id: "my-first-component",
        "data-test-id": "secondary",
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it("when click active event", async () => {
    const handleClick = vi.fn();
    render(HButton, {
      slots: {
        default: "Event",
      },
      attrs: {
        onClick: handleClick,
      },
    });

    await fireEvent.click(screen.getByText("Event").closest("button")!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
