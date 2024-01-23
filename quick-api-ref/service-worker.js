import "./sw-omnibox.js";
import "./sw-tips.js";

chrome.runtime.onInstalled.addListener(({ reason, previousVersion }) => {
  console.log(reason, previousVersion);
  if (reason === "install") {
    chrome.storage.local.set({
      apiSuggestions: ["tabs", "storage", "scripting"],
    });
  }
});
