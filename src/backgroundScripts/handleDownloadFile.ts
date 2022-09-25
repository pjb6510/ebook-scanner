import { DownloadFileMessage } from '../common/types/FromContentToBackgroundMessages/DownloadFile';

export function handleDownloadFile(
  message: DownloadFileMessage,
  sender: chrome.runtime.MessageSender,
  _sendResponse: () => void
) {
  chrome.downloads.download({
    url: message.url,
    filename: message.filename,
    conflictAction: 'overwrite',
  });
}
