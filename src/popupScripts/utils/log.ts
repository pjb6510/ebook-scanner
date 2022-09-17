import { LogMessage } from '../../common/types/FromPopupToContentMessages';

export function consoleLogOnContent(...log: any[]) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const targetTab = tabs[0].id ?? 0;
    chrome.tabs.sendMessage(targetTab, { type: 'log', log } as LogMessage);
  });
}
