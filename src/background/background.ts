chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    )
  }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SLIDER_CHANGED") {
    // Relay the message to all other contexts
    chrome.runtime.sendMessage(message)
  }
})
