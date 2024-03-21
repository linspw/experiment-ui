import { render } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import HCard from "../card.vue";

describe("HCard", () => {
  it("render correctly with default props", () => {
    const { html } = render(HCard, {
      slots: {
        default: "My first test",
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it("render correctly with variant", () => {
    const { container } = render(HCard, {
      props: {
        color: "primary",
      },
      slots: {
        default: "My second test",
      },
    });
    expect(
      (container.firstChild as HTMLElement).classList.contains(
        "h-card--color-primary",
      ),
    ).toBe(true);
  });

  it("render correctly with elevation", () => {
    const { container } = render(HCard, {
      props: {
        elevation: "high",
      },
      slots: {
        default: "My second test",
      },
    });
    expect(
      (container.firstChild as HTMLElement).classList.contains(
        "h-card--elevation-high",
      ),
    ).toBe(true);
  });

  it("render correctly with tag", () => {
    const { container } = render(HCard, {
      props: {
        tag: "section",
      },
      slots: {
        default: "My second test",
      },
    });
    expect((container.firstChild as HTMLElement).tagName).toBe("SECTION");
  });
});
