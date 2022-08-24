const channel = new BroadcastChannel('backgroundChannel');

channel.onmessage = (msg) => {
  console.log('message received from popup', msg);
  channel.postMessage({ msg: 'Hello popup from service worker' });

  channel.close();
};

export {};
