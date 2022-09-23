import { LogMessage } from '../common/types/FromPopupToContentMessages/LogMessage';

export function handleLogMessage(
  message: LogMessage,
  _sender: chrome.runtime.MessageSender,
  _sendResponse: (response: any) => void
) {
  if (Array.isArray(message.log)) {
    console.log(...message.log);
  } else {
    console.log(message.log);
  }
}
