import {
  LogMessage,
  FromPopupToContentMessageResponse,
} from '../common/types/FromPopupToContentMessages';

export function handleLogMessage(
  message: LogMessage,
  _sender: chrome.runtime.MessageSender,
  _sendResponse: (response: FromPopupToContentMessageResponse) => void
) {
  if (Array.isArray(message.log)) {
    console.log(...message.log);
  } else {
    console.log(message.log);
  }
}
