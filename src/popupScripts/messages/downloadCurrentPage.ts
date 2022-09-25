import { FromPopupToContentsMessageType } from '../../common/types/FromPopupToContentMessages';
import { RequestDownloadPageMessage } from '../../common/types/FromPopupToContentMessages/RequestDownloadPage';

export async function downloadCurrentPage(tabId: number): Promise<void> {
  const message: RequestDownloadPageMessage = {
    type: FromPopupToContentsMessageType.RequestDownloadPage,
  };

  return await chrome.tabs.sendMessage(tabId, message);
}
