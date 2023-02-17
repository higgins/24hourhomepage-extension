chrome.tabs.onCreated.addListener(async function (tab) {
  if (tab.pendingUrl === 'chrome://newtab/') {
    chrome.tabs.update(tab.id, { active: true, highlighted: true, url: 'https://24hourhomepage.com' });
  }
});
