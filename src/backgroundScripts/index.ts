import {
  FromContentToBackgroundMessage,
  FromContentToBackgroundMessageType,
} from '../common/types/FromContentToBackgroundMessages';
import { handleDownloadFile } from './handleDownloadFile';

const backgroundMessagesHandler = (
  message: FromContentToBackgroundMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void
) => {
  switch (message.type) {
    case FromContentToBackgroundMessageType.DownloadFile:
      handleDownloadFile(message, sender, sendResponse);
      break;

    default:
      break;
  }
};

chrome.runtime.onMessage.addListener(backgroundMessagesHandler);
