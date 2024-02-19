/* eslint-disable max-classes-per-file */
import { vi } from "vitest";
// import { setActivePinia, createPinia } from 'pinia'
import failOnConsole from "vitest-fail-on-console";

// @ts-ignore
window.HTMLCanvasElement.prototype.getContext = vi
  .fn()
  .mockImplementation(() => ({
    scale: () => {},
    clearRect: () => {},
    moveTo: () => {},
    lineTo: () => {},
    stroke: () => {},
  }));

class ClipboardEventMock extends Event implements ClipboardEvent {
  constructor(
    type: "copy" | "cut" | "paste",
    options: { clipboardData?: DataTransfer } = {},
  ) {
    super(type);
    this.clipboardData = options.clipboardData ?? null;
  }

  clipboardData: DataTransfer | null;
}

(window as any).ClipboardEvent = ClipboardEventMock;
(window as any).document.elementFromPoint = (_left: number, _top: number) =>
  document.body;

const createContextualFragment = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.children[0]; // so hokey it's not even funny
};

const mockedRange = {
  collapse: () => {},
  selectNodeContents: () => {},
  // toString: jest.fn(),
  cloneRange: () => {},
  setEnd: () => {
    /* no-op */
  },
  setStart: () => {
    /* no-op */
  },
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
  getBoundingClientRect: () => ({ right: 0 }),
  getClientRects: (): DOMRect[] => [],
  createContextualFragment,
};

global.getSelection = (): any => {
  return {
    addRange: () => {},
    getRangeAt: () => mockedRange,
    removeAllRanges: () => {},
    rangeCount: 0,
  };
};
globalThis.Range.prototype.createContextualFragment = (html: string) =>
  createContextualFragment(html) as any;

global.document.createRange = () => {
  const range = new Range();
  range.getBoundingClientRect = mockedRange.getBoundingClientRect as any;
  range.getClientRects = mockedRange.getClientRects as any;
  return range;
};

global.DragEvent = class DragEvent {} as any;

global.ResizeObserver = require("resize-observer-polyfill");

const { getComputedStyle } = window;
window.getComputedStyle = (elt, options) => {
  return getComputedStyle(elt, options);
};
// beforeEach(() => {
//   // creates a fresh pinia and makes it active
//   // so it's automatically picked up by any useStore() call
//   // without having to pass it to it: `useStore(pinia)`
//   setActivePinia(createPinia())
// })

failOnConsole();
