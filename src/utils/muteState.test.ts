import test from "node:test";
import assert from "node:assert/strict";
import { isLocalMicMuted } from "./muteState.ts";

class MockElement {
  private attrs: Record<string, string> = {};

  constructor(
    public tagName: string,
    attributes: Record<string, string> = {},
  ) {
    this.attrs = { ...attributes };
  }

  getAttribute(name: string): string | null {
    return this.attrs[name] ?? null;
  }
}

class MockDocument {
  constructor(private elements: MockElement[]) {}

  querySelector(selector: string): any {
    for (const el of this.elements) {
      if (selector.includes("data-is-muted") && el.getAttribute("data-is-muted") !== null) {
        return el;
      }
      if (selector.includes("aria-label")) {
        const ariaLabel = el.getAttribute("aria-label");
        if (ariaLabel) {
          if (selector.includes("microphone") && ariaLabel.toLowerCase().includes("microphone")) {
            return el;
          }
          if (selector.includes("mic") && ariaLabel.toLowerCase().includes("mic")) {
            return el;
          }
          if (selector.includes("mute") && ariaLabel.toLowerCase().includes("mute")) {
            return el;
          }
        }
      }
    }
    return null;
  }
}

test("isLocalMicMuted: returns false if doc is missing", () => {
  assert.equal(isLocalMicMuted(null as any), false);
});

test("isLocalMicMuted: returns false if microphone button not found", () => {
  const doc = new MockDocument([]) as unknown as Document;
  assert.equal(isLocalMicMuted(doc), false);
});

test("isLocalMicMuted: Google Meet data-is-muted attribute is respected", () => {
  const elMuted = new MockElement("BUTTON", { "data-is-muted": "true" });
  const docMuted = new MockDocument([elMuted]) as unknown as Document;
  assert.equal(isLocalMicMuted(docMuted), true);

  const elUnmuted = new MockElement("BUTTON", { "data-is-muted": "false" });
  const docUnmuted = new MockDocument([elUnmuted]) as unknown as Document;
  assert.equal(isLocalMicMuted(docUnmuted), false);
});

test("isLocalMicMuted: Google Meet aria-label turn on/off microphone fallback", () => {
  const elMuted = new MockElement("BUTTON", { "aria-label": "Turn on microphone" });
  const docMuted = new MockDocument([elMuted]) as unknown as Document;
  assert.equal(isLocalMicMuted(docMuted), true);

  const elUnmuted = new MockElement("BUTTON", { "aria-label": "Turn off microphone" });
  const docUnmuted = new MockDocument([elUnmuted]) as unknown as Document;
  assert.equal(isLocalMicMuted(docUnmuted), false);
});

test("isLocalMicMuted: Zoom Web Client mute/unmute buttons", () => {
  const elMuted = new MockElement("BUTTON", { "aria-label": "unmute microphone" });
  const docMuted = new MockDocument([elMuted]) as unknown as Document;
  assert.equal(isLocalMicMuted(docMuted), true);

  const elUnmuted = new MockElement("BUTTON", { "aria-label": "mute microphone" });
  const docUnmuted = new MockDocument([elUnmuted]) as unknown as Document;
  assert.equal(isLocalMicMuted(docUnmuted), false);
});
