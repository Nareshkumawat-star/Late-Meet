/**
 * Helper to detect if the local microphone is muted in Google Meet or Zoom.
 */
export function isLocalMicMuted(doc: Document = globalThis.document): boolean {
  if (!doc) return false;

  // 1. Google Meet: check button with data-is-muted attribute or microphone toggle
  const meetMicBtn = doc.querySelector(
    'button[data-is-muted], button[aria-label*="microphone" i], button[aria-label*="mic " i]',
  );
  if (meetMicBtn) {
    const isMutedAttr = meetMicBtn.getAttribute("data-is-muted");
    if (isMutedAttr !== null) {
      return isMutedAttr === "true";
    }
    const ariaLabel = meetMicBtn.getAttribute("aria-label") || "";
    if (ariaLabel.includes("Turn on") || ariaLabel.includes("Unmute")) {
      return true;
    }
    if (ariaLabel.includes("Turn off") || ariaLabel.includes("Mute")) {
      return false;
    }
  }

  // 2. Zoom Web Client: check button with aria-label="unmute" or similar
  const zoomMicBtn = doc.querySelector(
    '.join-audio-container button, button[aria-label*="mute" i], button[aria-label*="microphone" i]',
  );
  if (zoomMicBtn) {
    const ariaLabel = zoomMicBtn.getAttribute("aria-label") || "";
    if (ariaLabel.toLowerCase().includes("unmute") || ariaLabel.toLowerCase().includes("turn on")) {
      return true;
    }
    if (ariaLabel.toLowerCase().includes("mute")) {
      return false;
    }
  }

  return false;
}
