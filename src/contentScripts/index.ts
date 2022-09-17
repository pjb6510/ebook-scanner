import {
  FromPopupToContentMessage,
  FromPopupToContentMessageResponse,
  FromPopupToContentsMessageType,
} from '../common/types/FromPopupToContentMessages';
import { handleLogMessage } from './handleLogMessage';

// Function called when a new message is received
const messagesFromReactAppListener = (
  message: FromPopupToContentMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: FromPopupToContentMessageResponse) => void
) => {
  switch (message.type) {
    case FromPopupToContentsMessageType.log:
      handleLogMessage(message, sender, sendResponse);
      break;

    default:
      break;
  }
};

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
