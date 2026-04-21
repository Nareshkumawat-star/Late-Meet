// Updated background.js

// Remove offscreenCreated flag, using chrome.runtime.getContexts as source of truth
const contexts = chrome.runtime.getContexts();

async function startAudioCapture() {
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout waiting for START_CAPTURE response')), 5000));
    // Assuming START_CAPTURE sends a message to start audio capture
    const response = await Promise.race([chrome.runtime.sendMessage({action: 'START_CAPTURE'}), timeoutPromise]);
    return response;
}

// Use callback form of chrome.tabCapture.getMediaStreamId
function getMediaStreamId(callback) {
    chrome.tabCapture.getMediaStreamId((streamId) => {
        callback(streamId);
    });
}

// Change processTranscript interval
setInterval(() => {
    // ...process transcript logic
}, 10000); // Changed from 15000ms to 10000ms

// Other existing code...