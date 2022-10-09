import {
  FromContentToBackgroundMessage,
  FromContentToBackgroundMessageType,
} from '../common/types/FromContentToBackgroundMessages';
import {
  FromPopupToBackgroundMessage,
  FromPopupToBackgroundMessageType,
} from '../common/types/FromPopupToBackgroundMessages';
import { handleDownloadAllPages } from './handleDownloadAllPages';
import { handleDownloadFile } from './handleDownloadFile';

const backgroundMessagesHandler = (
  message: FromContentToBackgroundMessage | FromPopupToBackgroundMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void
) => {
  switch (message.type) {
    case FromContentToBackgroundMessageType.DownloadFile: {
      handleDownloadFile(message, sender, sendResponse);
      break;
    }

    case FromPopupToBackgroundMessageType.DownloadAllPages: {
      handleDownloadAllPages(message, sender, sendResponse);
      break;
    }

    default:
      break;
  }
};

if (!chrome.runtime.onMessage.hasListeners()) {
  chrome.runtime.onMessage.addListener(backgroundMessagesHandler);
}
