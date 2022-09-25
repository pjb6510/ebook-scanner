import {
  FromContentToBackgroundMessage,
  FromContentToBackgroundMessageType,
} from '../../common/types/FromContentToBackgroundMessages';

export function createDownloadBlobTrigger(url: string, filename: string) {
  return async () => {
    const message: FromContentToBackgroundMessage = {
      type: FromContentToBackgroundMessageType.DownloadFile,
      url,
      filename,
    };

    return await chrome.runtime.sendMessage(message);
  };
}
