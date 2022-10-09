import { DownloadFileMessage } from '../common/types/FromContentToBackgroundMessages/DownloadFile';

export async function handleDownloadFile(
  message: DownloadFileMessage,
  _sender?: chrome.runtime.MessageSender,
  _sendResponse?: () => void
) {
  chrome.downloads.download({
    url: message.url,
    filename: message.filename,
    conflictAction: 'overwrite',
    saveAs: false,
    method: 'GET',
  });
}
