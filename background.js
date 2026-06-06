chrome.runtime.onInstalled.addListener(() => {
  // Set default state to active
  chrome.storage.local.set({ isActive: true });
  chrome.action.setBadgeText({ text: "ON" });
  chrome.action.setBadgeBackgroundColor({ color: "#4CAF50" });
});

chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(['isActive'], (result) => {
    const newState = !result.isActive;
    
    // Save the new state
    chrome.storage.local.set({ isActive: newState }, () => {
      // Update the icon UI to reflect the state
      chrome.action.setTitle({
        title: newState ? "Minus AI (Active)" : "Minus AI (Inactive)"
      });
      chrome.action.setBadgeText({
        text: newState ? "ON" : "OFF"
      });
      chrome.action.setBadgeBackgroundColor({
        color: newState ? "#4CAF50" : "#F44336"
      });
    });
  });
});
