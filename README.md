<div align="center">
  <img src="src/icons/icon128.png" alt="AI Meeting Copilot Logo" width="120" />

  # AI Meeting Copilot

  **Privacy-first, real-time meeting intelligence without the intrusive bots.**  
  *Never ask "what did I miss?" again.*

  [![Version](https://img.shields.io/badge/Version-1.0.0-black?style=for-the-badge&logo=googlechrome)](https://github.com/shouri123/Late-Meet)
  [![License](https://img.shields.io/badge/License-MIT-black?style=for-the-badge)](LICENSE)
  [![Platform](https://img.shields.io/badge/Platform-Google_Meet-black?style=for-the-badge&logo=googlemeet)](https://meet.google.com)
</div>

<br />

## 🌟 The Problem
Joining a meeting late or losing focus for a moment leaves participants disconnected and scrambling for context. Existing AI note-takers add an obnoxious "Bot has joined" participant to your call, invade your team's privacy by storing transcripts on remote servers, and often generate massive, unreadable blocks of text instead of punchy, actionable insights.

## 💡 Our Solution
**AI Meeting Copilot** lives entirely natively within your browser. Without adding any disruptive bots to the call, it securely captures audio directly from the Chrome tab. It leverages **ElevenLabs' Scribe API** for state-of-the-art multilingual transcription and **OpenAI GPT models** for intelligent summarization, providing a stunning, high-performance side-panel dashboard.

We designed this with a **local-first philosophy**: all meeting data is processed locally using `chrome.storage.local` during the session, and you only need your own API keys. No external databases. No user tracking.

---

## 🚀 Key Features

* **Invisible & Native:** Uses modern Chrome `tabCapture` and Offscreen APIs to intercept audio securely without adding bots to the participant list.
* **High-Fidelity Transcription:** Utilizes the **ElevenLabs Speech-to-Text API (Scribe)** for industry-leading accuracy and robust multilingual support, gracefully falling back to OpenAI Whisper if needed.
* **Late-Joiner Briefings:** Instantly catches up late participants with targeted, private overlays summarizing missed context via hardened UI automation.
* **Proactive Intelligence:** Automatically detects meetings and initializes host-first (1+N) participant tracking for accurate reporting.
* **Bring Your Own Key (BYOK):** Full control over your data. Supply your own ElevenLabs and OpenAI API keys via the extension options.
* **Premium Interface:** A visually striking deep-monochrome UI with glassmorphism effects, smooth animations, and zero clutter. 

---

## 🏗️ Architecture & How It Works

The extension is built natively on Manifest V3 using **TypeScript and Vite 5** for a modern, optimized build process.

1. **`background.ts` (The Conductor):** Acts as the central state manager. It proactively detects Meet tabs, routes audio chunks to ElevenLabs for transcription, and coordinates intelligence queries with OpenAI.
2. **`offscreen.html` & `offscreen.ts` (The Audio Engine):** Runs a hidden offscreen document for `chrome.tabCapture`. It processes audio in chunks, ensuring zero data loss and handling raw media streams.
3. **`content.ts` (The UI Injector):** Injects floating buttons and briefing overlays. It features a hardened chat automation engine (`execCommand` based) to reliably deliver welcome messages to late joiners.
4. **AI Intelligence Layer:** Uses ElevenLabs STT for capturing speech and dynamic GPT models (like `gpt-4o-mini`) for processing text into structured insights, including Decisions, Action Items, and Strategic Sentiment.
5. **Local Storage:** Securely stores session data in `chrome.storage.local`. After each meeting, you decide to Save or Discard—nothing leaves your browser without your consent.

---

## ⚙️ Installation & Setup

**🚨 IMPORTANT DISTINCTION 🚨**  
* **For Regular Users:** You only need the compiled `dist/` folder. This is the actual, ready-to-use extension.  
* **For Developers:** The `src/` folder contains the raw TypeScript/source code. You must compile it first using the steps below.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shouri123/Late-Meet.git
   cd Late-Meet
   ```
2. **Compile the Extension (Developers only):**
   ```bash
   npm install
   npm run build
   ```
   *This will generate the `dist/` folder containing the final extension.*
3. **Load into Chrome:**
   - Open Google Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** in the top right corner.
   - Click **Load unpacked** and select the **`dist/`** directory (NOT the root or `src/` directory).
4. **Configure the Copilot:**
   - Click the extension icon in the toolbar and open the **Options** menu.
   - Enter your **ElevenLabs API Key** (for superior transcription) and your **OpenAI API Key** (for summarization intelligence).
5. **Join a Meeting:**
   - Join any active Google Meet.
   - Click the floating **Start Copilot** button.
   - Open the full Side Panel dashboard to view live intelligence!

---

## 🛠 Technology Stack

* **Extension Architecture:** Manifest V3 compliant, Offscreen Documents, Service Workers.
* **Build Tools:** TypeScript, Vite 5, `@crxjs/vite-plugin`.
* **Design System:** Custom Vanilla CSS, high-contrast monochrome aesthetic, SVG-native iconography.
* **Storage:** `chrome.storage.local` (Local-first, NO BAAS dependencies).
* **AI Pipeline:** ElevenLabs STT (Scribe v1) for transcription, and dynamic GPT models for Intelligence/Summarization.

---

## 🗺 Roadmap

### Phase 1: Core Foundation ✅
- Native Google Meet integration without bot participants.
- Real-time offline audio capture via Chrome Offscreen APIs.
- Premium monochrome UI extension & side panel.
- BYOK integration for processing.

### Phase 2: Local & Privacy Overhaul ✅
- Strip Supabase/backend dependencies.
- Local-first session management and storage.
- VAD (Voice Activity Detection) implementation to reduce API cost.
- Intelligent rolling LLM context prompting.

### Phase 3: Platform Expansion 🔄 *(Planned)*
- **Offline/Native Support:** Transition to an NPM package / Terminal CLI to support desktop apps like Zoom and Microsoft Teams.
- **Smart Tracking:** Enhanced detection for action item assignee routing based on voice mapping.
- **On-the-fly Translation:** Bridging language gaps during international calls.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues). 

When contributing:
1. Emphasize vanilla, zero-dependency Javascript workflows where possible.
2. Adhere strictly to the monochromatic UI design system.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <br />
  <i>Built for high-performance teams who value focus.</i>
</div>
