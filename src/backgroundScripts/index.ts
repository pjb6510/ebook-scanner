chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    console.log('background ready');
  });
});

export {};
