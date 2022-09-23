import {
  FromPopupToContentMessage,
  FromPopupToContentsMessageType,
} from '../common/types/FromPopupToContentMessages';
import { handleLogMessage } from './handleLogMessage';
import { handleRequestInfoMessageMessage } from './handleRequestInfoMessage';

/**
 * This function is called when a new message is received
 */
const messagesFromReactAppListener = (
  message: FromPopupToContentMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: any) => void
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

    default:
      break;
  }
};

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
