chrome.action.onClicked.addListener((tab) => {
  chrome.scripting
    .insertCSS({
      target: { tabId: tab.id },
      files: ["scripts/styles.css"],
    })
    .then(() => {
      console.log("> css injected successfully");
    });
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      files: ["scripts/content.js"],
    })
    .then(() => {
      console.log("> css injected successfully");
    });
});
