browser.tabs.onCreated.addListener(async function (tab) {
  if (tab.pendingUrl === '') {
    browser.tabs.update(tab.id, { active: true, highlighted: true, url: 'https://24hourhomepage.com' });
  }
});

