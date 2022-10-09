import {
  FromBackgroundToContentMessage,
  FromBackgroundToContentMessageType,
} from '../common/types/FromBackgroundtoContentMessages';
import {
  FromPopupToContentMessage,
  FromPopupToContentMessageType,
} from '../common/types/FromPopupToContentMessages';
import { handleLogMessage } from './handleLogMessage';
import { handleRequestDownloadPageMessage } from './handleRequestDownloadPageMessage';
import { handleInfoRequest } from './handleRequestInfoMessage';
import { isTopFrame } from './utils/frames';

/**
 * This function is called when a new message is received
 */
const contentMessageHandler = (
  message: FromPopupToContentMessage | FromBackgroundToContentMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void
) => {
  switch (message.type) {
    case FromPopupToContentMessageType.Log: {
      handleLogMessage(message, sender, sendResponse);
      break;
    }

    default:
      break;
  }

  if (isTopFrame(window.location.href)) {
    // this scope is called on top frame
    switch (message.type) {
      default:
        break;
    }
  } else {
    // this scope is called on reader frame
    switch (message.type) {
      case FromPopupToContentMessageType.RequestInfo: {
        handleInfoRequest(message, sender, sendResponse);
        break;
      }
      case FromPopupToContentMessageType.RequestDownloadPage: {
        handleRequestDownloadPageMessage(message, sender, sendResponse);
        break;
      }

      case FromBackgroundToContentMessageType.RequestInfo: {
        handleInfoRequest(message, sender, sendResponse);
        break;
      }
      case FromBackgroundToContentMessageType.RequestDownloadPage: {
        handleRequestDownloadPageMessage(message, sender, sendResponse);
        break;
      }

      default:
        break;
    }
  }
};

chrome.runtime.onMessage.addListener(contentMessageHandler);
