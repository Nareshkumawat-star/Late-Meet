<div align="center">
  <img src="icons/icon128.png" alt="AI Meeting Copilot Logo" width="120" />

  # AI Meeting Copilot

  **Real-time meeting intelligence without the intrusive bots.**  
  *Never ask "what did I miss?" again.*

  [![Version](https://img.shields.io/badge/Version-1.0.0-black?style=for-the-badge&logo=googlechrome)](https://github.com/shouri123/Late-Meet)
  [![License](https://img.shields.io/badge/License-MIT-black?style=for-the-badge)](LICENSE)
  [![Platform](https://img.shields.io/badge/Platform-Google_Meet-black?style=for-the-badge&logo=googlemeet)](https://meet.google.com)
</div>

<br />

## 🌟 The Problem
Joining a meeting late or losing focus for a moment leaves participants disconnected, scrambling for context, and interrupting the flow of the entire team. Existing AI note-takers add an obnoxious "Bot has joined" participant to the call, invade your privacy, and often generate massive, unreadable transcripts rather than punchy, actionable insights.

## 💡 Our Solution
**AI Meeting Copilot** lives entirely natively within your browser. Without adding any disruptive bots to the call, it securely captures audio directly from the Chrome tab, leverages the powerful **OpenAI Whisper & GPT models** to process the conversation, and provides a stunning, high-performance side-panel dashboard.

It tracks live topics, identifies key decisions, itemizes action items, and instantly generates bespoke briefing cards for anyone joining the call late via a secure, peer-to-peer relay architecture.

---

## 🚀 Key Features

* **Invisible & Native:** Uses modern Chrome `tabCapture` and Offscreen APIs to intercept audio securely without adding bots to the participant list.
* **Live Dashboards:** See real-time transcription tracking, topic identification, sentiment analysis, and action items in a beautifully crafted monochrome interface.
* **Late-Joiner Briefings:** Instantly catches up late participants with targeted, private overlay briefings summarizing what they missed before joining (powered by Supabase Realtime).
* **Bring Your Own Key (BYOK):** Full control over your data. Supply your own OpenAI API key for transcription and summarization tasks.
* **Premium Interface:** A visually striking deep-monochrome UI with glassmorphism effects, smooth animations, and zero clutter. 

---

## 🛠 Technology Stack

* **Extension Architecture:** Manifest V3 compliant, Offscreen Documents, Service Workers.
* **Design System:** Custom Vanila CSS, high-contrast monochrome aesthetic, SVG-native iconography (Lucide).
* **AI Pipeline:** OpenAI Whisper (Transcription) and GPT-4 (Summarization/Intelligence).
* **Relay Infrastructure:** Supabase Realtime (Handles host-to-client briefing synchronization).

---

## ⚙️ Installation & Setup (Developer Mode)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shouri123/Late-Meet.git
   cd Late-Meet
   ```
2. **Load into Chrome:**
   - Open Google Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** in the top right corner.
   - Click **Load unpacked** and select the root directory of this extension.
3. **Configure the Copilot:**
   - Click the extension icon in the toolbar.
   - Enter your **OpenAI API Key** (required for transcription and intelligence).
   - Enter your **Supabase URL & Anon Key** (required for the Late-Joiner brief feature).
4. **Join a Meeting:**
   - Join any active Google Meet.
   - Click **Start Copilot** from the extension popup.
   - Open the full Side Panel dashboard to view live intelligence!

> **Important Architecture Note:** The Late-Joiner briefing feature operates on a peer-to-peer relay. For it to function, the "host" (someone already in the meeting) must be running the Copilot to capture and push the context, and the "joiner" must have the extension installed to receive the synchronized brief.

---

## 🗺 Roadmap

### Phase 1: Core Foundation ✅
- Native Google Meet integration without bot participants.
- Real-time offline audio capture via Chrome Offscreen APIs.
- Premium monochrome UI extension & side panel.
- BYOK integration for processing.

### Phase 2: Platform Expansion 🔄 *(Coming Soon)*
- **Offline/Native Support:** Transition to an NPM package / Terminal CLI to support desktop apps like Zoom and Microsoft Teams.
- **Smart Tracking:** Enhanced detection for action item assignee routing based on voice mapping.
- **On-the-fly Translation:** Bridging language gaps during international calls.

### Phase 3: Enterprise & Scale 📈 *(Planned)*
- **Speaker Diarization:** Advanced voice fingerprinting to accurately partition transcripts by speaker.
- **Seamless Integrations:** Auto-push notes and action items to Slack, Notion, Jira, or Google Docs post-meeting.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <br />
  <i>Built for high-performance teams who value focus.</i>
</div>
