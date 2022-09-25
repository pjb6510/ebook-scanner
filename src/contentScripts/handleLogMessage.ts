import { LogMessage } from '../common/types/FromPopupToContentMessages/LogMessage';
import { isTopFrame } from './utils/frames';

export function handleLogMessage(
  message: LogMessage,
  _sender: chrome.runtime.MessageSender,
  _sendResponse: (response: any) => void
) {
  const frameTag = isTopFrame(window.location.href) ? 'TOP_LOG' : 'READER_LOG';

  if (Array.isArray(message.log)) {
    console.log(frameTag, ...message.log);
  } else {
    console.log(frameTag, message.log);
  }
}
