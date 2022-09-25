import {
  FromPopupToContentMessage,
  FromPopupToContentsMessageType,
} from '../common/types/FromPopupToContentMessages';
import { handleLogMessage } from './handleLogMessage';
import { handleDownloadPageMessage } from './handleRequestDownloadPageMessage';
import { handleRequestInfoMessageMessage } from './handleRequestInfoMessage';

/**
 * This function is called when a new message is received
 */
const contentMessageHandler = (
  message: FromPopupToContentMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void
) => {
  switch (message.type) {
    case FromPopupToContentsMessageType.Log: {
      handleLogMessage(message, sender, sendResponse);
      break;
    }

    case FromPopupToContentsMessageType.RequestInfo: {
      handleRequestInfoMessageMessage(message, sender, sendResponse);
      break;
    }

    case FromPopupToContentsMessageType.RequestDownloadPage: {
      handleDownloadPageMessage(message, sender, sendResponse);
      break;
    }

    default:
      break;
  }
};

chrome.runtime.onMessage.addListener(contentMessageHandler);
