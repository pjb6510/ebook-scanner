import { FromPopupToBackgroundMessageType } from '../../common/types/FromPopupToBackgroundMessages';
import { DownloadAllPagesMessage } from '../../common/types/FromPopupToBackgroundMessages/DownloadAllPages';

export async function downloadAllPages() {
  const message: DownloadAllPagesMessage = {
    type: FromPopupToBackgroundMessageType.DownloadAllPages,
  };

  return await chrome.runtime.sendMessage(message);
}
