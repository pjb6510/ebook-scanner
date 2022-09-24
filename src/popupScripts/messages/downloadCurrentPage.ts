import { FromPopupToContentsMessageType } from '../../common/types/FromPopupToContentMessages';
import { RequestDownloadPageMessage } from '../../common/types/FromPopupToContentMessages/RequestDownloadPage';

export function downloadCurrentPage(
  tabId: number,
  fileName: string
): Promise<void> {
  return new Promise((resolve) => {
    const message: RequestDownloadPageMessage = {
      type: FromPopupToContentsMessageType.RequestDownloadPage,
      fileName,
    };

    chrome.tabs.sendMessage(tabId, message, resolve);
  });
}
